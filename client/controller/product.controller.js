const productServerUrl = "localhost:4001";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "proto", "product.proto");
// load proto file
const productProto = protoLoader.loadSync(protoPath);
// extract package
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productClient = new productPackage.productServices(
  productServerUrl,
  grpc.credentials.createInsecure()
);

async function listOfProduct(req, res, next) {
  try {
    await productClient.listOfProduct(null, (err, data) => {
      if (err) {
        console.log(err.message);
        return res.json({
          error: err,
        });
      }
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
}
async function createProduct(req, res, next) {
  try {
    // we can get data from body but this is a Practice project
    const { title, price } = req.query;
    await productClient.createProduct({ title, price }, (err, data) => {
      if (err) {
        console.log(err.message);
        return res.json({
          error: err,
        });
      }
      return res.json({
        status: 201,
        data: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
}
async function getProduct(req, res, next) {
  try {
    const { id } = req.params;
    await productClient.getProduct({ id }, (err, data) => {
      if (err) return res.json({ error: err });
      return res.json({
        status: 200,
        data: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
}
function updateProduct(req, res, next) {}
async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    await productClient.deleteProduct({ id }, (err, data) => {
      if (err) return res.json({ error: err });
      return res.json({
        status: 200,
        data: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
