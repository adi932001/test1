const  mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema;

const ProductCartSchema=new mongoose.Schema({
    uuid: { 
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    selling_price: {
        type: Number,
        required: true
    },
    original_price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    base_qty: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    } 
},
    { timestamps: true }
);


module.exports = mongoose.model("ProductCart",ProductCartSchema );
