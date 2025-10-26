const express = require("express");
const multer = require("multer");
const path = require("path");
const createError = require("http-errors")


function UploadFile(req,res,next) {
    
// Upload Folder Selection 
const Upload_Folder = `${__dirname}/../public/uploads`;



//  Controls Files and storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, Upload_Folder);
    },
    filename: (req, file, cb) => { 
        const extName = path.extname(file.originalname);
        const FileName = file.originalname
                         .replace(extName, " ")
                         .toLowerCase()
                         .split(" ")
                         .join("-") + "-" + Date.now();
                         
       cb(null,  FileName + extName)
      },
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize : 6000000, // 1MB
    },
     fileFilter: (req, file, cb) => {
      
        if (
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/png" ||
          file.mimetype === "image/jpeg"
        ) {
          cb(null, true);
        } else {       
          cb(createError(500, "Only jpg, png or jpeg allowed"));
        }
      },
  });
 
  
  // Call the middleware Funciton
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        Error: err.message,
      });
    } else {
      next();
    }
  });

};


module.exports =  UploadFile;
