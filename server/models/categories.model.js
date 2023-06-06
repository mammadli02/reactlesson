const mongoose = require('mongoose');

//Artist Model
const CategoryModel = mongoose.model("Category", new mongoose.Schema({
    name: String,
   
}));

module.exports = CategoryModel