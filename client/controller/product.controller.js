const productServerUrl = "localhost:4001";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "proto", "product.proto");
// load proto file
const productProto = protoLoader.loadSync(protoPath);
// extract package
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productClient = new productPackage.productServices(productServerUrl,grpc.credentials.createInsecure());

async function listOfProduct(req, res, next) {}
async function getProduct(req, res, next) {}
async function createProduct(req, res, next) {}
async function updateProduct(req, res, next) {}
async function deleteProduct(req, res, next) {}