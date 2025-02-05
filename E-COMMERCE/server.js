import express from "express";
import bodyParser from "body-parser";
// import Client from "pg";
import pg from "pg";
import axios from "axios";

const app = express()
const port = 3000
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"world",
    password:"postgres1",
    port: 5432
});
db.connect();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.render("index.ejs")
})
app.get("/pay", (req, res)=>{
    res.render("payment.ejs")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});
