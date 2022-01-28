require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const productcartRoutes=require("../src/routes/productcart")



//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

  app.use(bodyParser.json());
  
  app.use(cors());

//My Routes
app.use("/", productcartRoutes);



//PORT
const port = process.env.PORT || 3000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});