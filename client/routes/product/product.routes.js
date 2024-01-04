const { listOfProduct, createProduct, getProduct, deleteProduct, updateProduct } = require("../../controller/product/product.controller");

const router = require("express").Router();

router.get("/list", listOfProduct)

router.get("/create", createProduct)

router.get("/update", updateProduct)

router.get("/:id", getProduct)

router.get("/delete/:id", deleteProduct)

module.exports = {
  productRouter: router,
};
