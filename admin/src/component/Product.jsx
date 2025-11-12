import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SuccessTost,ErrorTost } from '../utils/utils';


const Product = () => {

const [products, setProducts] = useState([]);
const [editModal,seteditModal] = useState(false)
const [editData,seteditData] = useState([])
const [updatadata,setupdatadata] = useState([]);
const [deletedata,setdeletedata] = useState("");
const[productPhoto,seproductPhoto] = useState(null);
// const filenputref =  useRef(null);

// Data fetching is here
useEffect(() => {
async function DataFetcher() {
    const res = await axios.get("http://localhost:5000/product")
     setProducts(res.data.data);
     };
     DataFetcher();
},[updatadata,deletedata]);

// update HandleEdit Funciton is start here
const HandleEdit = (item) => {
  seteditModal(!editModal)
  seteditData(item._id); 
  setupdatadata(item);
};

// update handleChange Function is  here
const handleChange = (e) => {
   const {id,value} = e.target
    setupdatadata((prev) => ({
       ...prev,
       [id] : value,   
      }))
};
 
// Update image Upload Function is here
const HandleChangeImg = (e) =>{
   seproductPhoto(e.target.files[0]);
};


// UpdateProduct Function is here
const UpdateProduct = async (e) => {
      e.preventDefault();
   const formData = new FormData();
       formData.append("name", updatadata.name);
       formData.append("title", updatadata.title);
       formData.append("description", updatadata.description);
       formData.append("category", updatadata.category);
       formData.append("price", updatadata.price);
       formData.append("stock", updatadata.stock);
     
  if (productPhoto) {
    formData.append("avatar", productPhoto);
  };
    
 try {
   const res = await axios.put(
     `http://localhost:5000/product/${editData}`,
     formData,
     {
       headers: { "Content-Type": "multipart/form-data" },
     }
   );
   SuccessTost(res.data.message, "top-center");

   // Close modal and clear form
   seteditModal(false);
   setupdatadata({});
   seproductPhoto(null);
 } catch (err) {
         console.log(err)
       }
};


// HandleDelete Function is here
const HandleDelete = async (item) => {
    try {
    const res = await axios.delete(`http://localhost:5000/product/${item._id}`);
    setdeletedata(res)
     ErrorTost(res.data.msg)
    } catch (err) {
       console.log(err)
    }
};



  return (
    <>
      <div className="container">
        <div className="flex relative items-center px-4 gap-x-6 flex-wrap gap-y-6 overflow-y-scroll h-[90vh] mt-10 ">
          {products?.map((item) => (
            <div
              className="w-[300px] h-[420px] bg-white shadow-md rounded-md"
              key={item._id}
            >
              <div className="pl-3">
                <div
                  className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => HandleDelete(item)}
                >
                  <p className="font-bold text-2xl text-red-600">X</p>
                </div>
              </div>
              <div className="px-4" onClick={() => HandleEdit(item)}>
                <picture>
                  <img
                    src={`http://localhost:5000/uploads/${item.avatar[0]}`}
                    alt={item.avatar}
                    className="w-full h-[250px] p-2 cursor-pointer"
                  />
                </picture>
              </div>
              <div className="mt-4 px-4">
                <h1 className="font-Montserrat font-bold text-xl text-center">
                  {item.title ? `${item.title.slice(0,20)}...` : "Title Missing"}
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-Montserrat font-semibold text-md text-green-600">
                    {item.price ? `$${item.price}` : "$10"}
                  </h3>
                  <p className="font-Montserrat font-semibold text-md text-red-600">
                    In Stock: {item.stock}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit modal is here */}
        <div>
          {editModal && (
            <div>
              <div className="absolute top-0 left-0 opacity-25 w-[100vw] h-[100vh] bg-slate-500"></div>
              <div className="absolute  top-10 bg-gray-400 m-auto p-6 rounded-md z-50 shadow-lg">
                <div>
                  <h2
                    className="flex items-center justify-end font-bold text-2xl text-red-600 cursor-pointer"
                    onClick={HandleEdit}
                  >
                    X
                  </h2>
                </div>
                <form>
                  <div className="flex flex-col gap-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Product Name"
                        id="name"
                        name="name"
                        className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        onChange={handleChange}
                        value={updatadata.name || ""}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        name="title"
                        className="w-[500px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        onChange={handleChange}
                        value={updatadata.title || ""}
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Description"
                        id="description"
                        name="description"
                        className="w-[600px] outline-green-700 min-h-24  rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        onChange={handleChange}
                        value={updatadata.description || ""}
                      ></textarea>
                    </div>
                    <div>
                      <select
                        name="category"
                        id="category"
                        className="w-[300px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black cursor-pointer"
                        onChange={handleChange}
                        value={updatadata.category || ""}
                      >
                        <option value="Select Catagory">Select Catagory</option>
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
                        className="w-[200px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        onChange={handleChange}
                        value={updatadata.price || ""}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Stock"
                        id="stock"
                        name="stock"
                        className="w-[200px] outline-green-700 rounded-md pl-3 py-1 bg-gray-100 border-[1px] border-black"
                        onChange={handleChange}
                        value={updatadata.stock || ""}
                      />
                    </div>
                    <div>
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        className="cursor-pointer"
                        onChange={HandleChangeImg}
                        // ref={filenputref}
                        multiple
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-lime-500 rounded-md font-Montserrat font-bold text-white"
                        onClick={UpdateProduct}
                      >
                        Update Product
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product
