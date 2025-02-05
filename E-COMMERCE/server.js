import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
// import session from "express-session";
import multer from "multer";
import env from "dotenv";

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

// login
app.get("/", (req,res)=>{
    res.render("login.ejs")
})
app.post("/", async(req,res)=>{
    const role = req.body.role
    const adminpassword =req.body.adminPassword
    // console.log(role)
    // console.log(adminPassword)
    try {
        const result = await db.query(
            "SELECT * FROM Admin WHERE role=$1",
            [role]
        );
        if(result.rows.length > 0){
            const ourUser = result.rows[0]
            const storedpswd = ourUser.password
            if (role === "admin" && adminpassword === storedpswd){
                res.redirect("/admin")
            }else{
                res.redirect("/home")
            }
        }
    } catch (error) {
        console.log("CAUGHT ERROR =>>",error)
    }
})

// homepage
app.get("/home", async(req, res)=>{
    try {
        const result = await db.query("SELECT * FROM Frames")
        res.render("index.ejs",{frames: result.rows})
    } catch (error) {
        console.log(error)
    }
})

// pay
app.get("/pay", (req, res)=>{
    res.render("payment.ejs")
})

// admin
app.get("/admin", (req, res)=>{
    res.render("adminpage.ejs")
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

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});
