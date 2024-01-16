const express=require('express');
const { fetechCategories, createCategory } = require('../controllers/Category-controller');
const router=express.Router();

router.get('/',fetechCategories).post('/',createCategory)

exports.router=router;