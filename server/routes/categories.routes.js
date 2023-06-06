const express = require('express');
const category_router = express.Router()
const categoryController = require('../controller/categories.controller')

//get All Artists
category_router.get('/',categoryController.getAll)

//get Artist by ID
category_router.get('/:id',categoryController.getByID)

//post Artist
category_router.post('/',categoryController.post)

//delete Artist
category_router.delete('/:id',categoryController.delete)

//edit Artist
category_router.put('/:id',categoryController.edit)


module.exports = category_router

