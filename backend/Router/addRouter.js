const express = require("express");
const router = express.Router();

//  Internal Imports
const {addproductControler} = require("../controller/addproductControler");
const {getProduct} = require("../controller/getproductControler");
const UploadFile = require("../Middleware/imgUpload");
const {productValidation,validationErrorHandler} = require("./../Middleware/addproductValidation");
 
//  Product add to database
router.post("/", UploadFile,validationErrorHandler, productValidation, addproductControler);

router.get("/",getProduct)



module.exports = router;