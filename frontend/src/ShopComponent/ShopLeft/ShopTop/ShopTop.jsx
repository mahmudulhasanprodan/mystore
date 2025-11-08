import React, { useEffect, useState } from 'react'
import Flex from "../../../CommonComponent/Flex"
import ShopBottom from '../ShopBottom/ShopBottom';
import ShopRight from '../../ShopRight/ShopRight';
import { DropdownShowData } from '../../../../JsonData/JsonData';
import { useSelector } from 'react-redux';




const ShopTop = () => {

const[catItem,setcatItem] = useState("");
const [selectedCategory, setSelectedCategory] = useState(null);
const [allData, setallData] = useState([]); 
const[pageItemValue,setpageItemValue] = useState(9)

  //HandleValue Function Start here
  const HandleValue = (e) => {
    setpageItemValue(e.target.value); 
  };

const{CartItem,Status}= useSelector((state) => state.Product);





useEffect(() => {
  if (Status === "IDLE") {
    setallData(CartItem.products);
  }
}, [Status, CartItem.products]);
  
// HandleCatItem Function Start Here


const HandleCatagoritItem = (item) => {

 if(selectedCategory === item.catagory){
    setSelectedCategory(null);
    setcatItem(allData)
 }else{
   const filterData = allData.filter(
     (Cat) => Cat.category.toLowerCase() === item.catagory.toLowerCase()
   );
   setcatItem(filterData);
   setSelectedCategory(item.catagory)
 }
 
};

  
  
  return (
    <>
      <div className="bg-TopHColor pt-10 pb-10 relative">
        <div className="container">
          <Flex className={"justify-between"}>
            <div className="w-full md:w-[930px] bg-TopHColor md:bg-white px-4 pt-4 pb-4">
              <div>
                <h2 className="font-Montserrat font-semibold text-2xl text-center md:text-start mb-4 md:mb-0">
                  Shop
                </h2>
              </div>
              <Flex
                className={
                  "flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-start md:justify-end"
                }
              >
                <div>
                  <select
                    name="ProductShorting"
                    id="ProductShorting"
                    className="w-56 border-[1px] cursor-pointer border-gray-400 py-1"
                    onClick={HandleValue}
                  >
                    <option
                      value="9"
                      className="font-Montserrat text-sm font-light"
                    >
                      Show Item
                    </option>
                    {DropdownShowData?.map((item) => (
                      <option
                       key={item.id}
                        value={item.product}
                        className="font-Montserrat text-sm font-light"
                        
                      >
                       {item.product}
                      </option>
                    ))}
                  </select>
                </div>
              </Flex>
              <div className="mt-16 w-full 2xl:w-[914px]">
                <ShopBottom pageValue={pageItemValue} catItem={catItem}/> 
              </div>
            </div>
            <div className="hidden xl:block">
              <ShopRight OnCatagoritem={HandleCatagoritItem} selectedCategory={selectedCategory}/>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopTop
