const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model('user_schema',user_schema)