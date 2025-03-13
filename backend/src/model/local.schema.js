import mongoose from "mongoose"



// const collectionTarget = TEST ? "users-test"

const localSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    gestionDeProductos:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref:'productos'
    },
    produccion:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref:'stocks'
    },
    settings:{
        type:mongoose.Schema.Types.Mixed,
        default:{}
    }
    
    
},{
    timestamps:true
})



export default mongoose.model('locales',localSchema)

