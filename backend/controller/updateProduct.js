
const Product = require("../Schemas/productSchema");

const updateProduct = async (req,res,next) => {
      try {
        const { id } = req.params;

        const findProduct = await Product.findOne({ _id: id });
        if (!findProduct) {
          return res.status(404).json({
            message: "user not found",
          });
        }
    // Prepare updated values
    let updateValue = {...req.body};
    // Handle uploaded files (if any)
    if (req.files && req.files.length > 0) {
      // If you're allowing multiple files:
      updateValue.avatar = req.files.map(file => file.filename);
      
    }
    
    

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      updateValue,
      { new: true }
    );
      if (!updateProduct) {
      return res.status(400).json({ message: "Update failed" });
    }

    // Respond with updated product
    res.status(200).json({
      message: "Product updated successfully",
      product: updateProduct,
    });
      } catch (err) {
        res.status(500).json({
          error: err.message,
        });
      };
};



module.exports = {
    updateProduct,
}