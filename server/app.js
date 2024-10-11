const express = require("express");
const app=express();

const cors = require("cors");

const port=4000;
app.get("/",(req,res) =>{
        return res.json("HI");
    }
)

app.listen(port , ()=>
    console.log("Listening in port "+port)
);