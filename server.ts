import express from "express"
import * as dotenv from "dotenv"
import cors from 'cors';
dotenv.config()

const app=express()
app.use(cors());
app.use(express.json())
import userroute from "./src/routes/userroute"
import kinderRoute from "./src/routes/KinderRoute"
app.use(express.json())  


import salleRoutes from './src/routes/salleroute';
import coursRoutes from './src/routes/coursroute';
import {connectDB} from "./src/config/database"


app.use("/user",userroute)
app.use("/kinder",kinderRoute)
app.use("/salle",salleRoutes)
app.use("/cours",coursRoutes)
connectDB()
app.listen(process.env.port,()=>{
    console.log(`server is runing at ${process.env.port}`);
    
})