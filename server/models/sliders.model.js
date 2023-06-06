const mongoose = require('mongoose');

//Artist Model
const SliderModel = mongoose.model("Categories", new mongoose.Schema({
    name: String,
    imageUrl:String
   
}));

module.exports = SliderModel