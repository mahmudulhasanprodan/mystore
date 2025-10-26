const {check,validationResult } = require("express-validator");
const createError = require("http-errors");
const {unlink} = require("fs");
const path = require("path");

const productValidation = [

    check("name")
    .isLength({min: 1})
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore : " -"})
    .withMessage("Name must contain alphabet")
    .trim(),
    
    check("title")
    .isLength({min : 1})
    .withMessage("Title is required")
    .isAlpha("en-US",{ignore: " -"})
    .withMessage("Title must contain alphabet")
    .trim(),
    
    check("description")
    .isLength({min : 1})
    .withMessage("Description is required")
    .isAlpha("en-US",{ignore: " -"})
    .withMessage("Description must contain alphabet")
    .trim(),

    check("category")
    .isLength({min : 1})
    .withMessage("Category is required")
    .isAlpha("en-US",{ignore: " -"})
    .withMessage("Category must contain alphabet")
    .trim(),

    check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric({ no_symbols: true })
    .withMessage("Price must be a number"),

    check("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isNumeric({ no_symbols: true })
    .withMessage("Stock must be a number"),

    check("avatar")
    .custom( async (value,req) => {
        try {
         if (!req.files){
            throw  createError(400, "Only jpg,png or jpeg file required")
        }
        } catch (error) {
            throw createError(error.message)
        }
    })
];


const validationErrorHandler = (req,res,next) => {
      const validError = validationResult(req);
      const mappedError = validError.mapped();
      if(Object.keys(mappedError).length === 0) {
        next();
      }else{
        // Remove the files
        if(req.files){
            const { filename } = req.files[0];
          unlink(
              path.join(__dirname, `/../public//uploads/${filename}`), (err) => {
                if(err) console.log(err)
              }
          )
        };
         
        // response the error
        res.status(500).json({
            Error : mappedError
        })
      }
};


module.exports = {
   productValidation,
   validationErrorHandler
   
}