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
async function getProduct(call, callback) {
  try {
    const { id } = call.request;
    // some actions about validation of id
    const product = await productModel.findOne({ id });
    if (!product) return callback({ error: "product not found" }, null);
    callback(null, product);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
}
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
async function updateProduct(call, callback) {
  try {
    const { id } = call.request;
    const data = call.request;
    delete data.id;
    const product = await productModel.updateOne({ id }, { $set: data });
    if (!product.modifiedCount)
      callback({ error: "updating failed please try again or later" });
    callback(null, { status: "update sucessfuly" });
  } catch (error) {
    console.log(error);
  }
}
async function deleteProduct(call, callback) {
  try {
    const { id } = call.request;
    // some actions about validation of id
    const product = await productModel.deleteOne({ id });
    if (!product) return callback({ error: "try again" }, null);
    callback(null, { status: "delete sucessfuly" });
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
}

module.exports = {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
