import mongoose from "mongoose";
const MONGO_URL = 'mongodb+srv://kamal:1Kamal@blood-bank.cspkm6t.mongodb.net/bloodrecord'


const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("MOngoDb connected")
        
    } catch (error) {
        console.log(`MongoDB error: ${error}`)
        
    }
}

export default connectDB;