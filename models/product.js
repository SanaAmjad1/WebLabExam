var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
    category: String,
    name: String,
    price: String,
    code: String,
    details: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;