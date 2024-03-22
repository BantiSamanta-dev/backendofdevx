import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/devx')
        console.log("database is connected!")
    } catch (error) {
        console.log("there is some error in mongodb connection", error)
    }
}

export default connectDB