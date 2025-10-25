import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import axios from "axios"

const AdminComponent = () => {

  const [addproduct,setaddproduct] = useState(false);
  const [productData, setproductData] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });

  const[productPhoto,seproductPhoto] = useState(null);

//HandleAdd Function is here
const HandleAdd = () => {
     setaddproduct(!addproduct);
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
     alert(res.data.message)
    } catch (err) {
      console.error(err);
    }

};

  return (
    <>
      <div>
        <div className="container">
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
                <span className={`${addproduct ? "font-bold text-md text-lime-500" : "text-white font-bold text-md" }`}>
                  <FaCirclePlus />
                </span>
                <h1 className="font-Montserrat font-bold text-md text-white">
                  Add Products
                </h1>
              </div>
               <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                
              >
                <span className="text-white font-bold text-md">
                  <MdLocalGroceryStore />
                </span>
                <h1 className="font-Montserrat font-bold text-md text-white">
                  Products
                </h1>
              </div>
               <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                
              >
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
                        ></textarea>
                      </div>
                      <div>
                        <select
                          name="category"
                          id="category"
                          className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black cursor-pointer"
                          onChange={HandleChange}
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
                        />
                      </div>
                      <div>
                        <button type="submit" className="px-6 py-2 bg-lime-500 rounded-md font-Montserrat font-bold text-white" onClick={HandleSubmit}>
                          Add Product
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
 )}


export default AdminComponent
