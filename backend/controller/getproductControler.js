const Product = require("../Schemas/productSchema");

const getProduct = async (req,res,next) => {
       try {
         const data = await Product.find();
         res.send({
            data : data
         })
       } catch (error) {}
};




module.exports = {
    getProduct
}