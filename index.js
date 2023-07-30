const express = require("express");
const connection = require("./config/dbConnect");
const UserRoute = require("./Routes/userRoute");
const RecuriterRoute = require("./Routes/recuriterRoutes");
const app = express();




app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/user",UserRoute);
app.use("/recuriter",RecuriterRoute);

app.listen(5000,()=>{
    console.log("Server connected");
})