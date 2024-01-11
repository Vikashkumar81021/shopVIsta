const express=require('express')
const mongoose=require('mongoose');
const { createProduct } = require('./controllers/Product-controllers');
const router=express();

router.use(express.json())
main();
async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopVista')
        console.log('DataBase connection successfully')
    } catch (error) {
        console.log('DataBase not connected')
    }
}


router.get('/',(req,res)=>{
    res.send('this is home page')
})

router.post('/product',createProduct);

router.listen(8080,()=>{
    console.log('server is listen 8080')
})
