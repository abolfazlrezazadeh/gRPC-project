const { productModel } = require("../model/product.model");

async function listOfProduct(call, callback) {
  try {
    const products = await productModel.find({});
    callback(null, { products });
  } catch (error) {
    callback(error, null);
  }
}
async function getProduct(call, callback) {}
async function createProduct(call, callback) {}
async function updateProduct(call, callback) {}
async function deleteProduct(call, callback) {}

module.exports = {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
