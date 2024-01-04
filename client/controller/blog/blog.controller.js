const blogServerUrl = "localhost:4002";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "..", "proto", "blog.proto");
//load proto
const blogProto = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const { blogPackage } = grpc.loadPackageDefinition(blogProto);

const blogClient = new blogPackage.blogServices(
  blogServerUrl,
  grpc.credentials.createInsecure()
);
async function getAllBlogs(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}
async function getBlog(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}
async function createBlog(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}
async function updateBlog(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}
async function deleteBlog(req, res, next) {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
