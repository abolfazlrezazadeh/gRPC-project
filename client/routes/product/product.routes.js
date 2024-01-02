const { listOfProduct, createProduct, getProduct, deleteProduct } = require("../../controller/product.controller");

const router = require("express").Router();

router.get("/list", listOfProduct)

router.get("/create", createProduct)

router.get("/:id", getProduct)
router.get("/delete/:id", deleteProduct)

module.exports = {
  productRouter: router,
};
