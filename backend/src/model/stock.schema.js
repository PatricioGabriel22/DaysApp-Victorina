import mongoose from 'mongoose'
import {TEST} from '../config/envStuff.js'


console.log(TEST)

let switchToTest = JSON.parse(TEST)


let collectionTarget = switchToTest ? "testsforstocks" : "stocks"



const stockSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:String,
        required:true
    },
    cantidad:Number,
    unidades:String,
    precio:Number,
    sobro:Boolean

})



export default mongoose.model(collectionTarget,stockSchema)