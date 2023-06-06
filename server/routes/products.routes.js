const express = require('express');
const product_router = express.Router()
const productController = require('../controller/products.controller')


//get Artist All Songs
product_router.get('/:id',productController.getCategoriesAllProduct)

//get All Songs
product_router.get('/', productController.getAllProducts)
//id
product_router.get('/:id',productController.getByID)

//post Song
product_router.post('/', productController.post)

//delete Song
product_router.delete('/:id',productController.delete)

//edit
product_router.put('/:id',productController.edit)
module.exports = product_router
