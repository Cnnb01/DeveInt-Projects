import express from "express";
import bodyParser from "body-parser";
// import Client from "pg";
import pg from "pg";
import axios from "axios";
// import session from "express-session";

const app = express()
const port = 3000
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Framely",
    password:"postgres1",
    port: 5432
});
db.connect();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/login", (req,res)=>{
    res.render("login.ejs")
})
app.post("/login", async(req,res)=>{
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
                res.redirect("/")
            }
        }
    } catch (error) {
        console.log("CAUGHT ERROR =>>",error)
    }
})

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/pay", (req, res)=>{
    res.render("payment.ejs")
})

app.get("/admin", (req, res)=>{
    res.render("adminpage.ejs")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});

