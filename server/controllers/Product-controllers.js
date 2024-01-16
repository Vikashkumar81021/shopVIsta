const { query } = require("express");
const { Product } = require("../model/Product");
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};


exports.fetechAllproducts = async (req, res) => {
  let query = Product.find({})
  let totalProductQuery=Product.find({})
  if(req.query.category){
    query= query.find({category:req.query.category})
    totalProductQuery=totalProductQuery.find({category:req.query.category})
   }
    
 if(req.query.brand){
  query= query.find({brand:req.query.brand})
  totalProductQuery=totalProductQuery.find({brand:req.query.brand})
 }
 if(req.query._sort && req.query._order){
  query= query.sort({[req.query._sort]:req.query._order})
 }
const totaldocs=await query.countDocuments().exec()
 if(req.query._page && req.query._limit){
   const pageSize= req.query._limit
   const page=req.query._page
  query=query.skip(pageSize*(page-1)).limit(pageSize)
 }
 

  try {
    const docs = await query.exec();
    res.set('X-total-Count',totaldocs)
    res.status(201).json(docs);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.fetechProductById=async(req,res)=>{
  const {id}=req.params
  try{
    const product=await Product.findById(id)
    res.status(200).json(product)
  }catch(err){
  console.log(err);
  }
  
}

exports.updateProduct=async(req,res)=>{
  const {id}=req.params
  try{
    const product=await Product.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json(product)
  }catch(err){
  console.log(err);
  }
  
}