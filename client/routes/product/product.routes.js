const { listOfProduct, createProduct, getProduct } = require("../../controller/product.controller");

const router = require("express").Router();

router.get("/list", listOfProduct)

router.get("/create", createProduct)

router.get("/:id", getProduct)

module.exports = {
  productRouter: router,
};
