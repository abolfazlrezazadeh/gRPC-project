// require dbConfig
require("./config/db.connection");
// reuire services
const {
  listOfProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./functions/product.grpc.funcs");
const productServerUrl = "localhost:4001";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "proto", "product.proto");
// load proto file
const productProto = protoLoader.loadSync(protoPath);
// extract package
const { productPackage } = grpc.loadPackageDefinition(productProto);
// productPackage service
function main() {
  const server = new grpc.Server();
  server.addService(productPackage.productServices.service, {
    listOfProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  });
  // start server
  server.bindAsync(
    productServerUrl,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) return console.log(err.message);
      console.log(`Product serve eunning on port : ${port}`);
    }
  );
}
main();
