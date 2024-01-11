const {Product} =require('../model/Product')

exports.createProduct= async(req,res)=>{
    const product=new Product(req.body)
  const response= await  product.save()
   console.log(response);
}