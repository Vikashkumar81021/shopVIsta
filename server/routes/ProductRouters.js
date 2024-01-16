const express=require('express');
const { createProduct, fetechAllproducts, fetechProductById, updateProduct } = require('../controllers/Product-controllers');
const router=express.Router()


router.post('/',createProduct)
.get('/',fetechAllproducts)
.get('/id',fetechProductById)
.patch('/id',updateProduct)

exports.router=router;