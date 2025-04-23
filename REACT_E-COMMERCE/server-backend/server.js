import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import multer from "multer";
import env from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"; // store the JWT in a cookie instead of sending it in the authorization header

env.config()
const app = express()
const port = 8000
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

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({ origin: "http://localhost:3000", credentials: true })); //CORS allows the frontend to make API requests to the backend.
app.use(express.json())
app.use(cookieParser());

//key used to sign JWTs
const SECRET_KEY = process.env.JWT_SECRET

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
                res.json({ success: true, message: "Login successful", token });
            } else {
                res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

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

// Protect the admin route
app.get("/admin", verifyUser, (req, res) => {
    if (req.user.role === "admin") {
        res.json({ success: true, message: "Welcome Admin" });
    } else {
        res.status(403).json({ message: "Access denied" });
    }
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Framely!" });
});

//fetching frames
app.get("/frames", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM Frames");
        //converting image_data (binary) to base64
        const frames = result.rows.map(frame => ({
            ...frame,
            image_data: frame.image_data ? frame.image_data.toString("base64") : null
        }));
        // console.log("ALL FRAMES=>",frames);
        res.json(frames);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/admin", upload.single("frame_image"), async(req,res)=>{
    // console.log("REQUEST BODY:=>", req.body);
    // console.log("UPLOADED FILE:=>", req.file);
    const size = req.body.frame_size
    const color = req.body.color
    const price = req.body.price
    const image = req.file ? req.file.buffer : null;
    try {
        const result = await db.query("INSERT INTO Frames (frame_size, color, price, image_data) VALUES ($1, $2, $3, $4)",[size,color,price,image])
        // console.log("Frame uploaded to db =>",result)
        res.json("frame uploaded successfully");
    } catch (error) {
        console.log("CAUGHT AN ERROR WHILE TRYING TO UPLOAD BE=>",error)
    }
})

app.delete("/frames/:frame_id", async(req, res) => {
    const frameId = req.params.frame_id;
    try {
        const result = await db.query("DELETE FROM Frames WHERE frame_id = $1", [frameId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Frame not found" });
        }
        res.json({ message: "Frame deleted successfully" });
    } catch (error) {
        console.error("CAUGHT ERROR=>", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});