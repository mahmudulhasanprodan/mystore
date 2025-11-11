const Product = require("../Schemas/productSchema");

const getProduct = async (req,res,next) => {
       try {
         const data = await Product.find();
         res.send({
            data : data
         })
       } catch (error) {console.log(error.message)}
};

const getProductById = async (req,res,next) => {
       try {
         const {id} = req.params;
         console.log(id)
         const data = await Product.findById({_id : id});
         res.send({
          data : data
         })
       }catch (err) {
          console.log(err)
       }
};


module.exports = {
    getProduct,
    getProductById
}