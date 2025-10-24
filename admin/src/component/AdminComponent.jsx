import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";


const AdminComponent = () => {
  const [addproduct,setaddproduct] = useState(false);8

//HandleAdd Function is here
const HandleAdd = () => {
     setaddproduct(!addproduct);
};

// HandleSubmit function is start here
const HandleSubmit = (e) => {
    e.preventDefault()
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
                <span className={`text-white font-bold text-lg ${addproduct && "text-lime-500"}`}>
                  <FaCirclePlus />
                </span>
                <h1 className="font-Montserrat font-bold text-lg text-white">
                  Add Products
                </h1>
              </div>
               <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                
              >
                <span className="text-white font-bold text-lg">
                  <MdLocalGroceryStore />
                </span>
                <h1 className="font-Montserrat font-bold text-lg text-white">
                  Products
                </h1>
              </div>
               <div
                className="flex items-center gap-x-1 cursor-pointer px-4 mt-4"
                
              >
                <span className="text-white font-bold text-lg">
                  <FaChalkboardUser />
                </span>
                <h1 className="font-Montserrat font-bold text-lg text-white">
                  Order
                </h1>
              </div>
            </div>
            <div className="w-5/6 h-[100vh] bg-slate-200">
              {/* From Data is here */}
              {addproduct && (
                <div className="px-4 mt-10">
                  <form action="" onSubmit={HandleSubmit}>
                    <div className="flex flex-col gap-y-4">
                      <div>
                        <input
                          type="file"
                          id="avatar"
                          name="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Product Name"
                          id="pname"
                          name="pname"
                          className="w-[200px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Title"
                          id="title"
                          name="title"
                          className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        />
                      </div>
                      <div>
                        <textarea
                          type="text"
                          placeholder="Description"
                          id="description"
                          name="description"
                          className="w-[350px] outline-green-700 min-h-24  rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        ></textarea>
                      </div>
                      <div>
                        <select
                          name="category"
                          id="category"
                          className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black cursor-pointer"
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
                          type="text"
                          placeholder="Price"
                          id="price"
                          name="price"
                          className="w-[100px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Stock"
                          id="stock"
                          name="stock"
                          className="w-[100px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        />
                      </div>
                      <div>
                        <button className="px-6 py-2 bg-lime-500 rounded-md font-Montserrat font-bold text-white">
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
  );
}

export default AdminComponent
