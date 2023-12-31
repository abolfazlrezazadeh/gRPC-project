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
          error : err,
        });
      }
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
}
function getProduct(req, res, next) {}
function createProduct(req, res, next) {}
function updateProduct(req, res, next) {}
function deleteProduct(req, res, next) {}

module.exports = {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
