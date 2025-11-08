import React from 'react'
import { CatagoriesData } from '../../../JsonData/JsonData'
const ShopRight = ({OnCatagoritem,selectedCategory}) => {
  
  
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <div className="w-[300px] h-[400px] bg-white p-4">
            <div className="text-center border-[1px] border-gray-400 bg-gray-200">
              <h2 className="font-Montserrat text-2xl font-bold">
                Product categories
              </h2>
            </div>

            <div className="mt-4">
              {CatagoriesData?.map((item) => (
                <div key={item.id} onClick={() => OnCatagoritem(item)}>
                  <p
                    className={`py-2 shadow-sm  pl-3 font-Montserrat font-bold  ${
                      selectedCategory === item.catagory
                        ? "bg-CommonColor text-white cursor-pointer"
                        : "hover:bg-CommonColor hover:text-white text-slate-500 cursor-pointer "
                    }`}
                  >
                    {item.catagory}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopRight
