const { default: mongoose, model } = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  price: { type: String },
});

productSchema.pre("save", function (next) {
  // this == productSchema
  const self = this;
  /*
    We get the number of documents in the product model along with a function with ``err'' and ``data'' parameters.
  */
  self.constructor.count(async function (err, data) {
    if (err) return next(err);
    // we can gets the number of products
    model.set({ id: data + 1 });
    next();
  });
});

module.exports = {
    productModel : mongoose.model("Product" , productSchema)
}
