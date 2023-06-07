const mongoose = require('mongoose');

//Artist Model
const SliderModel = mongoose.model("Sliders", new mongoose.Schema({
    name: String,
    imageUrl:String
   
}));

module.exports = SliderModel