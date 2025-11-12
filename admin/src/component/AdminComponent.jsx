import React, { useRef, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { SuccessTost } from '../utils/utils';
import axios from "axios"
import Product from './Product';

const AdminComponent = () => {

  const [addproduct,setaddproduct] = useState(false);
  const [product,setproduct] = useState(false);
  const [productData, setproductData] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });

  const[productPhoto,seproductPhoto] = useState(null);
  const fileInputRef =  useRef(null);

//HandleAdd Function is here
const HandleAdd = () => {
     setaddproduct(!addproduct);
     setproduct(false)
};

// HandleChange Function is start here
const HandleChange = (e) => {
  setproductData ({
     ...productData,
     [e.target.id] : e.target.value,
     
  });
  
};

const HandleChangeImg = (e) =>{
   seproductPhoto(e.target.files[0]);
};

// HandleSubmit function is start here
const HandleSubmit = async (e) => {
    e.preventDefault()
   const formData = new FormData();
       formData.append("name", productData.name);
       formData.append("title", productData.title);
       formData.append("description", productData.description);
       formData.append("category", productData.category);
       formData.append("price", productData.price);
       formData.append("stock", productData.stock);
       formData.append("avatar", productPhoto);
    
    try {
      const res = await axios.post("http://localhost:5000/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      SuccessTost(res.data.message)
      setproductData({
        ...productData,
        name: "",
        title: "",
        description: "",
        category: "",
        price: "",
        stock: "",
      });
      // reset input file
      fileInputRef.current.value = "";

    }catch (error) {
      alert(error.response.data.Error)
    }

};

// HandleProduct Function is here
const HandleProduct = () => {
      setproduct(!product)
      setaddproduct(false)
};

  return (
    <>
      <div>
        <div>
          <div className="flex items-center">
            <div className="w-1/6 h-[100vh] bg-slate-600">
              <div className="flex items-center justify-center py-4">
                <h1 className="font-bold font-Montserrat text-white text-2xl">
                  MyStore
                </h1>
              </div>
              {/* Product add button is here */}
              <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                onClick={HandleAdd}
              >
                <span
                  className={`${
                    addproduct
                      ? "font-bold text-md text-lime-500"
                      : "text-white font-bold text-md"
                  }`}
                >
                  <FaCirclePlus />
                </span>
                <h1 className="font-Montserrat font-bold text-md text-white">
                  Add Products
                </h1>
              </div>
              {/* Product is here */}
              <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                onClick={HandleProduct}
              >
                <span
                  className={`${
                    product
                      ? "text-lime-500 font-bold text-md"
                      : "text-white font-bold text-md"
                  }`}
                >
                  <MdLocalGroceryStore />
                </span>
                <h1 className="font-Montserrat font-bold text-md text-white">
                  Products
                </h1>
              </div>
              <div className="flex items-center gap-x-1 cursor-pointer px-4 mt-4">
                <span className="text-white font-bold text-md">
                  <FaChalkboardUser />
                </span>
                <h1 className="font-Montserrat font-bold text-md text-white">
                  Order
                </h1>
              </div>
            </div>
            <div className="w-5/6 h-[100vh] bg-slate-200">
              {/* From Data is here */}
              {addproduct && (
                <div className="px-4 mt-10">
                  <form>
                    <div className="flex flex-col gap-y-4">
                      <div>
                        <input
                          type="file"
                          id="avatar"
                          name="avatar"
                          className="cursor-pointer"
                          onChange={HandleChangeImg}
                          ref={fileInputRef}
                          multiple
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Product Name"
                          id="name"
                          name="name"
                          className="w-[200px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                          onChange={HandleChange}
                          value={productData.name}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Title"
                          id="title"
                          name="title"
                          className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                          onChange={HandleChange}
                          value={productData.title}
                        />
                      </div>
                      <div>
                        <textarea
                          type="text"
                          placeholder="Description"
                          id="description"
                          name="description"
                          className="w-[350px] outline-green-700 min-h-24  rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                          onChange={HandleChange}
                          value={productData.description}
                        ></textarea>
                      </div>
                      <div>
                        <select
                          name="category"
                          id="category"
                          className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black cursor-pointer"
                          onChange={HandleChange}
                          value={productData.category}
                        >
                          <option value="Select Catagory">
                            Select Catagory
                          </option>
                          <option value="Beauty">Beauty</option>
                          <option value="Fragrances">Fragrances</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Groceries">Groceries</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Price"
                          id="price"
                          name="price"
                          className="w-[100px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                          onChange={HandleChange}
                          value={productData.price}
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Stock"
                          id="stock"
                          name="stock"
                          className="w-[100px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                          onChange={HandleChange}
                          value={productData.stock}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="px-6 py-2 bg-lime-500 rounded-md font-Montserrat font-bold text-white"
                          onClick={HandleSubmit}
                        >
                          Add Product
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* show product data is here */}
              {product && (
                <div className="p-4">
                  <Product />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );}


export default AdminComponent
