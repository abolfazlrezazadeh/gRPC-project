const { productRouter } = require("./product/product.routes");

const router = require("express").Router();

router.use('/product' , productRouter)

module.exports = {
  allRoutes: router,
};
