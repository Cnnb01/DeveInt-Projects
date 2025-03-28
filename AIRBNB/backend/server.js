import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import multer from "multer";
import env from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"; //store the JWT in a cookie instead of sending it in the authorization header
import bcrypt from "bcrypt";

env.config()
const app = express()
const port = 8000
const saltRounds = 10
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Airbnb",
    password:process.env.DATABASE_PASSWORD,
    port: 5432
});
db.connect();

const storage = multer.memoryStorage() //configures multer to temporarily store uploaded files in memory (RAM) instead of saving them to disk
const upload = multer({storage: storage})

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({ origin: "http://localhost:5173", credentials: true })); //CORS allows the frontend to make API requests to the backend.
app.use(express.json())
app.use(cookieParser());

//key used to sign JWTs
const SECRET_KEY = process.env.JWT_SECRET

app.post('/signup', async(req,res)=>{
    const {name,email,password} = req.body
    try {
        const confirmUser = await db.query("SELECT * FROM AUser WHERE email=$1", [email])
        if(confirmUser.rows.length > 0){
            res.send({ message:"User already exists, try loging in instead"})
        }
        else{
            //password hashing
            bcrypt.hash(password, saltRounds, async (err, hash)=>{
                if(err){
                    console.log("Error hashing password", err)
                }else{
                    const result = await db.query("INSERT INTO AUser (user_fullname, email, password) VALUES ($1, $2, $3)",[name, email, hash])
                    res.json({ message: "User registered successfully" });
                }
            })
        }
    } catch (error) {
        console.log("ERROR=>",error)
    }
})

app.post("/login", async(req,res)=>{
    const {email,loginpassword} = req.body
    try {
        const confirmUser = await db.query("SELECT * FROM AUser WHERE email=$1", [email])
        if(confirmUser.rows.length > 0){
            const theUser = confirmUser.rows[0]
            const storedpswd_hashed = theUser.password
            //comparing to hashed pswd
            bcrypt.compare(loginpassword, storedpswd_hashed, (err,result)=>{
                if(err){
                    console.log("Error comparing passwords =>", err)
                }else{
                    if (result){
                        // generate jwt
                        //step1:create a token
                        // console.log("the email is =>", email)
                        const token = jwt.sign({email:email},SECRET_KEY,{ expiresIn: "1h" })
                        // console.log("SECRET_KEY in Login:", SECRET_KEY);
                        // console.log("Generated Token =>", token);
                        const decoded = jwt.decode(token);
                        console.log("Decoded JWT =>", decoded);
                        //step2:convert the token into a cookie
                        const cookiecreated = res.cookie("token", token, {
                            httpOnly: true,
                            secure: false,
                            maxAge: 3600000
                        })
                        // console.log("COOKIE CREATED=>", cookiecreated)
                        res.json({ success: true, message: "Login successful", token });
                    } else {
                        res.status(401).json({ success: false, message: "Invalid credentials" });
                    }
                }
            })
        } else{
            res.status(401).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.log(error)
    }
})

//step3:create middleware to carryout verification
const verifyAdmin = (req,res,next)=>{
    const token = req.cookies.token;
    const newdecoded = jwt.decode(token);
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            // console.log("JWT Verification Error:", err.message);
            return res.status(403).json({ message: "Invalid token"});
        }
        // console.log("Decoded JWT:", decoded);
        req.user = decoded
        next();
    });
};

app.get("/admin", verifyAdmin, (req, res) => {
    if(req.user.email === "admin@gmail.com"){
        res.json({ message: "Welcome Admin! You have access to this page." });
    }else {
        res.status(403).json({ message: "Access denied" });
    }
});

app.post("/admin", upload.single("image"), async (req,res)=>{
    const imageBuffer = req.file.buffer;
    const {hostname, amenities, pricing, startdate, enddate, place} = req.body;
    try {
        const newHome = db.query("INSERT INTO Home (home_picture, host_name, amenities, cost, home_location, from_date, to_date) VALUES ($1, $2, $3, $4, $5, $6, $7)", [imageBuffer, hostname, amenities, pricing, place, startdate, enddate])
        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.log("ERROR=>",error)
    }
})

//fetching the homes
app.get("/homes", async(req,res)=>{
    try{
        const result = await db.query("SELECT * FROM Home")
        //converting image (binary) to base64
        const homes = result.rows.map(home=>({
            ...home,
            home_picture: home.home_picture ? home.home_picture.toString("base64") : null
        }))
        res.json(homes)
    }
    catch(error){
        console.error("Error:", error);
        res.status(500).json({ message: "Server error" });
    }
})
app.get("/homes/:home_id", async(req,res)=>{
    const homeId = req.params.home_id
    try {
        const result = await db.query("SELECT * FROM Home WHERE home_id=$1",[homeId])
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Home not found" });
        }
        let home = result.rows[0]
        // Convert image from binary to Base64
        if (home.home_picture) {
            home.home_picture = home.home_picture.toString("base64");
        }
        res.json(home);
    } catch (error) {
        console.error("CAUGHT ERROR=>", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});