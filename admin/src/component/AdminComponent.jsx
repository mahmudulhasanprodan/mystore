import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";


const AdminComponent = () => {
  const [addproduct,setaddproduct] = useState(false);
  const [fromdata, setfromdata] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    avatar: "",
  });

//HandleAdd Function is here
const HandleAdd = () => {
     setaddproduct(!addproduct);
};

// HandleChange Function is start here
const HandleChange = (e) => {
  setfromdata ({
     ...fromdata,
     [e.target.id] : e.target.value,
     
  })
}

// HandleSubmit function is start here
const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
       const res = await fetch("http://localhost:5000/product",{
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(fromdata)
       })

       const data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err.message)
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
                  <form onSubmit={HandleSubmit}>
                    <div className="flex flex-col gap-y-4">
                      <div>
                        <input
                          type="file"
                          id="avatar"
                          name="avatar"
                          className="cursor-pointer"
                          onChange={HandleChange}
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
                        <button type="submit" className="px-6 py-2 bg-lime-500 rounded-md font-Montserrat font-bold text-white">
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
