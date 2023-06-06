const ProductsModel = require('../models/product.model');

const productController = {
  getCategoriesAllProduct: async (req, res) => {
    const id = req.params.id;
    const products = await ProductsModel.find({ categoryID: id });
    if (products == undefined) {
      res.status(404).send("products not found!");
    } else {
      res.status(200).send(products);
    }
  },
  getAllProducts: async (req, res) => {
    const products = await ProductsModel.find();
    if (products == undefined) {
      res.status(404).send("products not found!");
    } else {
      res.status(200).send(products);
    }
  },
  getByID: async (req, res) => {
    const id = req.params.id;
    const product = await ProductsModel.findById(id);
    console.log("product found: ", product);
    if (!product) {
      res.status(204).send("product not found!");
    } else {
      res.status(200).send({
        data: product,
        message: "data get success!",
      });
    }
  },
  post: async (req, res) => {
    const { name,categoryID,price,imageUrl,description } = req.body;

    const product = new ProductsModel({
      name: name,
      price: price,
      imageUrl: imageUrl,
      description: description,
      categoryID: categoryID,
    });
    await product.save();
    res.status(201).send("product created successfully");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await ProductsModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).send("song not found!");
    } else {
      res
        .status(203)
        .send({ data: deletedProduct, message: "song deleted successfully!" });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { name,price,imageUrl,description,categoryID} = req.body;
    console.log("name: ", name);
    const existedProducts = await ProductsModel.findByIdAndUpdate(id, {
      name: name,
    price:price,
    categoryID:categoryID,
    description:description,
    imageUrl:imageUrl
    });
    if (existedProducts == undefined) {
      res.status(404).send("product  not found!");
    } else {
      res.status(200).send(`${name} updated successfully!`);
    }
  },
};

module.exports  = productController
