const express = require('express');
const slider_router = express.Router()
const SliderController = require('../controller/sliders.controller')

//get All Artists
slider_router.get('/',SliderController.getAllSliders)

//get Artist by ID
slider_router.get('/:id',SliderController.getByID)

//post Artist
slider_router.post('/',SliderController.post)

//delete Artist
slider_router.delete('/:id',SliderController.delete)

//edit Artist
slider_router.put('/:id',SliderController.edit)


module.exports = slider_router

