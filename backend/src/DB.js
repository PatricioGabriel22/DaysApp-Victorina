import mongoose from "mongoose";
import { MONGO_CLUSTER_URI } from "./config/envStuff.js";


export async function connectDB(){
    mongoose.connect(MONGO_CLUSTER_URI)
    console.log("Conectado a DB")
}
