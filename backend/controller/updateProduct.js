
const Product = require("../Schemas/productSchema");

const updateProduct = async (req,res,next) => {
    const {id} = req.params
    const findProduct = await Product.findOne({_id : id})
    console.log(findProduct)
};



module.exports = {
    updateProduct,
}