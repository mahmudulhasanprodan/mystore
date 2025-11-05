const express = require("express");
const router = express.Router();

//  Internal Imports
const {addproductControler} = require("../controller/addproductControler");
const {getProduct} = require("../controller/getproductControler");
const {updateProduct} = require("../controller/updateProduct");
const UploadFile = require("../Middleware/imgUpload");
const {productValidation,validationErrorHandler} = require("./../Middleware/addproductValidation");
 
//  Product add to database
router.post("/", UploadFile,validationErrorHandler, productValidation, addproductControler);

router.get("/",getProduct);

router.put("/:id", UploadFile,validationErrorHandler, updateProduct);



module.exports = router;