const  ProductCart  = require("../model/productcart");

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate( "name price")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: " product not found in DB"
        });
      }
      req.product = product;
      next();
    });
};

exports.createProduct = (req, res) => {
  req.body.productcart.catalogue = req.id;
  const productcart = new Order(req.body.order);
  productcart.save((err, productcart) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save your order in DB"
      });
    }
    res.json(productcart);
  });
};