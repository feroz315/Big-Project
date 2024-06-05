import 'dotenv/config';
// require('dotenv').config();

import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
// import routes from "./Routes/Index.js";
import DATABASE_URL from './DataBase/MongaDB.js';


const app = express();
const PORT = 5000;
// const DB_URL = process.env.DATABASE_URL;
// console.log(DB_URL); 



mongoose.connect(DATABASE_URL)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo", err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.get("/", (( req,res ) => {
    res.json({
        message:"server is connect with Product"
    })
}));


app.listen(PORT, () => {
 console.log(`Server is localhost://${PORT}`)
})