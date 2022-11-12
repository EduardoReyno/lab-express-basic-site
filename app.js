const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/main-page", (req, res,) => {
    console.log("pagina first")
    console.log(req);
    res.sendFile(__dirname + "/views/aboutus.html")
});

app.get("/about-us", (req, res, next)=> {
    console.log(__dirname)
    res.sendFile(__dirname + "/views/works.html")
});

app.get("/works", (req, res, next) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/views/main.html")
});

app.listen(3006,() => {
    console.log("server on")
}) 