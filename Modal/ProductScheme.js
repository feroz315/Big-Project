import mongoose from "mongoose";


const ProductScheme = new mongoose.Schema({

   title: String,  
   description: String,
   category: String,
   productImage: [],
   id : String,
   price : {
        type: Number,
        required: [ true, "Price must be provided"]
    },
        timestamps : true    
});




const ProductItem = mongoose.model("Product", ProductScheme);
export default ProductItem;

