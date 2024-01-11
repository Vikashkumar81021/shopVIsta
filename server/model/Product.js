const mongoose =require('mongoose')
const {Schema} =mongoose;


const productSchema=new Schema({
    
       title:{type:String,required:true},
        description:{type:String,required:true},  
        price:{type:Number,min:[0,'wrong min price'],max:[10000,'wrong max price']},  
        discountPercentage:{type:Number,min:[0,'wrong min discount'],max:[99,'wrong max discount']},
        rating:{type:Number,min:[0,'wrong min rating'],max:[5,'wrong price']},
        stock:{type:Number,min:[1,'wrong min stock'],max:[5,'wrong max stock'],default:0},
        brand:{type:String,required:true},
        category:{type:String,required:true},
        thumbnail:{type:String,required:true},
        images:{type:String,required:true},
        deleted:{type:Boolean,default:false},

        
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
