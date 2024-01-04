const { blogRouter } = require("./blog/blog.routes");
const { productRouter } = require("./product/product.routes");

const router = require("express").Router();

router.use('/product' , productRouter)

router.use('/blog' , blogRouter)

module.exports = {
  allRoutes: router,
};
