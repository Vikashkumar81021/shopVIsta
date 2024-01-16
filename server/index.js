const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const server=express();
const productRouters=require('./routes/ProductRouters')
const brandRouters=require('./routes/BrandsRoute')
const categoryRouters=require('./routes/CategoryRoute')

server.use(cors({
    exposedHeaders:['X-total-Count']
}))
server.use(express.json())
server.use('/products',productRouters.router)
server.use('/categories',categoryRouters.router)
server.use('/brands',brandRouters.router)

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
