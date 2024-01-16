const express =require('express')
const router=express.Router();
const {fetechBrands, createBrands} =require ('../controllers/Brand-controller')

router.get('/',fetechBrands).post('/',createBrands)

exports.router=router