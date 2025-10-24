const express = require("express");
const router = express.Router();

//  Internal Imports
const {addproductControler} = require("../controller/addproductControler")
const UploadFile = require("../Middleware/imgUpload")
 
//  Product add to database
router.post("/", UploadFile, addproductControler);



module.exports = router;