const Product = require("../models/productModel");

module.exports = {
  getProduct: async (req, res) => {
    try {
      const response = await Product.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  },

  getProductById: async (req, res) => {
    try {
      const response = await Product.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  },

  createProduct: async (req, res) => {
    try {
      await Product.create(req.body);
      res.status(201).json({ msg: "Product created" });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateProduct: async (req, res) => {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Product updated" });
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Product deleted" });
    } catch (error) {
      console.log(error.message);
    }
  },
};
