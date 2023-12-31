const { productModel } = require("../model/product.model");

async function listOfProduct(call, callback) {
  try {
    const products = await productModel.find({});
    callback(null, { products });
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
}
async function getProduct(call, callback) {}
async function createProduct(call, callback) {
  try {
    const { title, price } = call.request;
    //some actions about validation
    const result = await productModel.create({ title, price });
    // error handling actions
    if (!result) callback({ error: "server error please try again" }, null);
    callback(null, { status: "product created successfullly" });
  } catch (error) {
    callback(error, null);
  }
}
async function updateProduct(call, callback) {}
async function deleteProduct(call, callback) {}

module.exports = {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
