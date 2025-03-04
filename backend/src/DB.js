import mongoose from "mongoose";
import { MONGO_CLUSTER_URI } from "./config/envStuff.js";


const url = "mongodb+srv://ppuchetadev:aGpFTFsPDFAwxqwJ@victorinacluster.ycryc.mongodb.net/daysapp?retryWrites=true&w=majority&appName=VictorinaCluster"
console.log(MONGO_CLUSTER_URI)
export async function connectDB(){
    mongoose.connect(url)
    console.log("Conectado a DB")
}
