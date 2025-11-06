
const Product = require("../Schemas/productSchema");


const deleteProduct = async (req,res,next) => {
   try {
     const {id} = req.params;
    const item =  await Product.findByIdAndDelete(id)
     res.status(200).json({
        msg: "Data Deleted Successfully",
     })
   } catch (err) {
       res.status(500).json({
        error : err.message
       })
   }
    
     
}; 



module.exports = {
    deleteProduct
}