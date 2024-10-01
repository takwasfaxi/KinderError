import express from "express"
import * as dotenv from "dotenv"
dotenv.config()

const app=express()
app.use(express.json())
import userroute from "./src/routes/userroute"
import kinderRoute from "./src/routes/KinderRoute"
import {connectDB} from "./src/config/database"
app.use("/user",userroute)
app.use("/kinder",kinderRoute)
connectDB()
app.listen(process.env.port,()=>{
    console.log(`server is runing at ${process.env.port}`);
    
})