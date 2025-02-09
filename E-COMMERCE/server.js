import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import multer from "multer";
import env from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"; // store the JWT in a cookie instead of sending it in the authorization header

env.config()
const app = express()
const port = 3000
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Framely",
    password:process.env.DATABASE_PASSWORD,
    port: 5432
});
db.connect();

const storage = multer.memoryStorage() //configures multer to temporarily store uploaded files in memory (RAM) instead of saving them to disk
const upload = multer({storage: storage})

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser());

//key used to sign JWTs
const SECRET_KEY = process.env.JWT_SECRET

// login
app.get("/", (req,res)=>{
    res.render("login.ejs")
})
app.post("/", async(req,res)=>{
    const role = req.body.role
    const adminpassword =req.body.adminPassword
    try {
        const result = await db.query(
            "SELECT * FROM Admin WHERE role=$1",
            [role]
        );
        if(result.rows.length > 0){
            const ourUser = result.rows[0]
            const storedpswd = ourUser.password
            if (adminpassword === storedpswd){
                // generate JWT
                const token = jwt.sign({role:role},SECRET_KEY,{ expiresIn: "1h" })
                // console.log("Generated Token =>", token);
                // const decoded = jwt.decode(token);
                // console.log("Decoded JWT =>", decoded);
                // set token as HTTP-only cookie means JavaScript cannot access it on the frontend (prevents XSS attacks).
                res.cookie("token", token, {
                    httpOnly: true, //prevent JavaScript access
                    secure: process.env.NODE_ENV === "production",
                    maxAge: 3600000
                });
                // Redirect based on role
                if (role === "admin") {
                    res.redirect("/admin");
                } else {
                    res.redirect("/home");
                }
            }else{
                res.status(401).json({message: "Invalid credentials"})
            }
        } else{
            res.status(401).json({ message: "User not found" });
        }
    } catch (error) {
        console.log("CAUGHT ERROR =>>",error)
        res.status(500).json({ message: "Server error" });
    }
})

// middleware for routes protection
const verifyUser = (req,res,next)=>{
    const token = req.cookies.token //get token from cookies
    jwt.verify(token, SECRET_KEY, (err, decoded)=>{ //decoded contains the user payload 
        if(err){
            return res.status(403).json({message:"Invalid token"})
        }
        req.user = decoded
        next()
    })
}

// homepage
app.get("/home", async(req, res)=>{
    try {
        const result = await db.query("SELECT * FROM Frames")
        res.render("index.ejs",{frames: result.rows})
    } catch (error) {
        console.log(error)
    }
})

// admin
app.get("/admin", verifyUser, (req, res)=>{
    if(req.user.role === "admin"){
        res.render("adminpage.ejs")
    } else {
        res.status(403).json({message: "Access denied"})
    }
})
app.post("/admin", upload.single("frame_image"), async(req,res)=>{
    const size = req.body.frame_size
    const color = req.body.color
    const price = req.body.price
    const image = req.file ? req.file.buffer : null;
    try {
        const result = await db.query("INSERT INTO Frames (frame_size, color, price, image_data) VALUES ($1, $2, $3, $4)",[size,color,price,image])
        console.log("Frame uploaded to db =>",result)
        res.send("frame uploaded successfully");
    } catch (error) {
        console.log(error)
    }
})

// deleting a frame from db
app.get("/pay/:frame_id", async(req,res)=>{
    const frameId = req.params.frame_id
    try {
        const result = await db.query("DELETE FROM Frames WHERE frame_id = $1",[frameId] )
        res.render("payment.ejs")
    } catch (error) {
        console.log("CAUGHT ERROR=>",error)
    }
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});
