import React, { useEffect, useState } from 'react'
import img from  "../assets/Essence Mascara.jpg"
import axios from 'axios';


const Product = () => {

const [products, setProducts] = useState([]);
// Data fetching is here
useEffect(() => {
async function DataFetcher() {
    const res = await axios.get("http://localhost:5000/product")
     setProducts(res.data.data);
     };
     DataFetcher();
},[]);

console.log(products)
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center gap-x-4 flex-wrap gap-y-4">
          {products?.map((item) => (
            <div
              className="w-[300px] h-[400px] bg-white shadow-md rounded-md"
              key={item._id}
            >
              <div className="px-4">
                <picture>
                  <img src={img} alt={img} className="w-full h-[250px]" />
                </picture>
              </div>
              <div className="mt-4 px-4">
                <h1 className="font-Montserrat font-bold text-xl text-center">
                  {item.title ? item.title : "Title Missing"}
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
      </div>
    </>
  );
}

export default Product
