const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { typw: String, requied: true },
  text: { typw: String, requied: true },
});

blogSchema.pre("save", async function (next) {
  try {
    // this == productSchema
    const self = this;
    /*
      We get the number of documents in the product model along with a function with ``err'' and ``data'' parameters.
    */
    const count = await self.constructor.countDocuments();
    self.set({ id: count + 1 });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = {
  blogModel: mongoose.model("blog", blogSchema),
};
