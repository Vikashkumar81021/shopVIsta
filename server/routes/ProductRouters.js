const express=require('express');
const { createProduct, fetechAllproducts } = require('../controllers/Product-controllers');
const router=express.Router()


router.post('/',createProduct).get('/',fetechAllproducts);

exports.router=router;