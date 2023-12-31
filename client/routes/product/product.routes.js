const { listOfProduct } = require("../../controller/product.controller");

const router = require("express").Router();

router.get("/list", listOfProduct)

module.exports = {
  productRouter: router,
};
