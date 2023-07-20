const express = require("express");
const app = express();
const port =3500;
app.get('/',(req, res)=>{
    res.send("Hello World")
})
app.get('/data',(req, res)=>{
    res.send("Data From Here")
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})