const express = require('express');
const fs= require('fs');
const app = express();
const PORT=4000;

const Time= new Date();
const timestamp= Time.toUTCString();

app.get('/',(req, res) => {
    res.send("hello world!")
})

app.get('/time',(req,res)=>{
    fs.writeFile("./date-time.txt",timestamp,(err)=>{
        if (err){
            console.error(err);
            res.send(err);
        }else{
            res.send("File created successfully");
        }
    })
})

app.listen(PORT,()=>console.log("port started",PORT))