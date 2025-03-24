import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import multer from "multer";
import env from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"; // store the JWT in a cookie instead of sending it in the authorization header
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
// const SECRET_KEY = process.env.JWT_SECRET

app.post('/signup', async(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
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
    const email = req.body.email
    const loginpassword = req.body.loginpassword
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
                        res.json({ message:"login successfull"})
                    } else {
                        res.status(401).json({ message: "Email or password incorrect" });
                    }
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});