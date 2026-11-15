import express from "express";
import 'dotenv/config'
import  globalerr from './middlewares/globalerr.js'
import { connectDB } from "../config/databaseconnection.js";
import router from "./modules/tasks/tasksroutes.js";
 const app=express()

 app.use(express.json())

 app.use('/',router)





app.use(globalerr) 
 app.listen(3000,()=>{
    console.log('server connected succssefully')
    connectDB()
    
 })