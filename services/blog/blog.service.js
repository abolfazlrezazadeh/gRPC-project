const blogServerUrl = "localhost:4002";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const {
  deleteBlog,
  updateBlog,
  createBlog,
  getBlog,
  getAllBlogs,
} = require("./functions/blog.grpc.funcs");
const protoPath = path.join(__dirname, "..", "..", "proto", "blog.proto");
//load proto
const blogProto = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const { blogPackage } = grpc.loadPackageDefinition(blogProto);

function main() {
  try {
    const server = new grpc.Server();
    server.addService(blogPackage.blogServices.service, {
      getAllBlogs,
      getBlog,
      createBlog,
      updateBlog,
      deleteBlog,
    });
    // start server
    server.bindAsync(
      blogServerUrl,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) return console.log(`blog.service.js error ${err.message}`);
        console.log(`server running on port http://localhost:${port}`);
        server.start();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

main();