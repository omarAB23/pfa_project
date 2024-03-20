const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    depart:{ type:String , required :true } , 
    arrivee:{ type:String , required :true } , 
    place:{ type: Number , required :true } , 
    price:{ type:Number , required :true } , 
    contact:{ type: String , required :true } , 
    date:{ type: Date , required :true } , 
    condition:{ type:String } , 
    desc:{ type:String  } , 
})


const PostModel= mongoose.model('post',PostSchema)

module.exports = PostModel