const mongoose = require('mongoose');

//Song Model
const  ProductsModel= mongoose.model(
  "Songs",
  new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  })
);

module.exports = ProductsModel