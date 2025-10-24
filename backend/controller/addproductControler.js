
const Product = require("../Schemas/productSchema");

const addproductControler = async (req,res,next) => {
    let addProduct;
    if(req.files && req.files.length > 0){
        addProduct = new Product({
            ...req.body,
            avatar : req.files.filename
        })
    }else{
         addProduct = new Product({
            ...req.body,
        })
       
        
    };

    try {
      const data = await addProduct.save();
      console.log(data)
      res.status(200).json({
        message: "user added successfully"
        
      })
    } catch (error) {
        console.log(error)
    }
};



module.exports = {
    addproductControler
}