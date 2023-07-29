const express = require("express");
const connection = require("./config/dbConnect");
const UserRoute = require("./userRoutes/routes")
const app = express();




app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/",UserRoute);

app.listen(5000,()=>{
    console.log("Server connected");
})