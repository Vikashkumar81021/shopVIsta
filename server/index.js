const express=require('express')
const mongoose=require('mongoose');
const server=express();
const productRouters=require('./routes/ProductRouters')

server.use(express.json())
server.use('/products',productRouters.router)

main();
async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopVista')
        console.log('DataBase connection successfully')
    } catch (error) {
        console.log('DataBase not connected')
    }
}






server.listen(8080,()=>{
    console.log('server is listen 8080')
})
