const  mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema;

const ProductCartSchema=new mongoose.Schema({
    uuid: { 
        type: String,
        required: true,
        unique: true,
        index: true
    },
    product:{
        type:ObjectId,
        ref:"catalogue"
    },
    name:String,
    count:Number,
    price:Number
});


module.exports = mongoose.model("ProductCart",ProductCartSchema );
