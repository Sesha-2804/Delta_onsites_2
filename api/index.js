import express from 'express';
const app=express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect("mongodb://localhost:27017/do2",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB")
});
import path from 'path';
import authRoute from './routes/auth'
app.use(express.json());
app.use("/api/auth",authRoute);


app.listen(8500,()=>{
    console.log("Backend server is up and running");
})

