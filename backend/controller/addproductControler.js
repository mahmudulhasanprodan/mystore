
const Product = require("../Schemas/productSchema");

const addproductControler = async (req,res,next) => {

  const avatarFiles = req.files.map((file) => file.filename);

  console.log(req.files)

  
     let addProduct;

     if(req.files && req.files.length > 0){
        addProduct = new Product({
             ...req.body,
             avatar : avatarFiles
        })
     }else {
        addProduct = new Product ({
            ...req.body
        })
     };

     try {
        const data  = await addProduct.save();
        res.status(200).json({
            message : "Data Successfully Added",
    
        })
     } catch (err) {
        res.status(500).json({
            Error : err.message
        })
     } 
   
};



module.exports = {
    addproductControler
}