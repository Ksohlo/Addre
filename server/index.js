import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import router from "./api/routes/useRoutes.js";
import Router from "./api/routes/studentRoute.js";
import attendanceRouter from "./api/routes/attendanceRoute.js";

const app = express()

app.use(bodyParser.json())

dotenv.config()
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;


mongoose.connect(URL)
.then(()=>{
    console.log("Database connected successfully");
    
})
.catch((err)=>{
    console.log("The database is endergoing an errror pls rectify it");
    
});


app.use("/api/user", router);
app.use("/api/student", Router);
app.use("/api/attendance", attendanceRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})