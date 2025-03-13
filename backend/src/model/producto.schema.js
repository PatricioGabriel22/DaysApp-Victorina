import mongoose from 'mongoose'
import {TEST} from '../config/envStuff.js'


// JSON.parse(TEST) se usa para convertir la cadena de texto "true" en true y "false" en false, de modo que puedas trabajar con un booleano real en JavaScript.

let switchToTest = JSON.parse(TEST)

let collectionTarget = switchToTest ? "tests" : "productos"


const productoDaysAppSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:String,
        required:true
    },
    fechaRevision:{
            type:String,
            default: 0
    },
    dias:{
        type:[],
        default:1
    },
    revisado:{
        type:Boolean,
        default:true
    },
    horaInicial:{
        type:String
    },
    cantidad:Number,
    unidades:String,
    precio:Number,
    sobro:Boolean,
    local:{type: mongoose.Schema.Types.ObjectId, ref:'locales'}

})



export default mongoose.model(collectionTarget,productoDaysAppSchema)