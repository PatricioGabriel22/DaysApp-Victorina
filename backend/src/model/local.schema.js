import mongoose from "mongoose"



// const collectionTarget = TEST ? "users-test"

const localSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    settings:{
        type:mongoose.Schema.Types.Mixed,
        default:{}
    }
    
    
},{
    timestamps:true
})



export default mongoose.model('locales',localSchema)

