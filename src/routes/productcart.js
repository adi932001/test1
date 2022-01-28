const express = require("express");
const router = express.Router();


const {
  getProductById,
  createProduct
} = require("../controller/productcart");

//params
router.param("productcartId", getProductById);

//Actual routes
//create
router.post(
  "/product/create/:productId",
  createProduct
);
module.exports = router;