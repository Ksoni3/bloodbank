import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//file imports

import authRoutes from "./routes/authRoutes.js"
import inventoryRoutes from "./routes/inventoryRoutes.js"

//dot config
dotenv.config();

//mongodb connection

connectDB();

// rest objectn
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//Port
const PORT = 8000;

//routes

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/inventory", inventoryRoutes)

app.get('/', (req,res)=>{
    res.status(200).json({
        message: "It is home page",
        success: false
    })
})



//listen

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`);
});
