const { listOfProduct, createProduct } = require("../../controller/product.controller");

const router = require("express").Router();

router.get("/list", listOfProduct)

router.get("/create", createProduct)

module.exports = {
  productRouter: router,
};
