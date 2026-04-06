
const express = require("express");
const app = express();


//Catch test route
app.use('/test',(req,res) => {
    res.send("Server is running on /test route");
});

// Catch hello route
app.use('/hello',(req,res) => {
    res.send("Hello World!!");
});

//Catch all route, This should be the last route to be defined, otherwise it will catch all the routes and the above routes will not work.
app.use('/',(req,res) => {
    res.send("Welcome Home!");
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
});