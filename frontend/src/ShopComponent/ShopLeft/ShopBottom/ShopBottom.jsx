import React, { useEffect, useState } from 'react'
import Card from "../../../CommonComponent/Card/Card"
import Flex from '../../../CommonComponent/Flex';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { FeatureProduct } from '../../../Redux/ProductSlice/ProductSlice';
import Loading from '../../../CommonComponent/Loading/Loading';
import { FaChevronCircleRight,FaChevronCircleLeft} from "react-icons/fa";
import { AllCartItem } from '../../../Redux/CartSlice/CartSlice';
import { WishCartItem } from '../../../Redux/WishSlice/WishSlice';



const ShopBottom = ({pageValue,catItem}) => {
 
  
console.log(catItem);

const dispatch = useDispatch()
const[allData,setallData] = useState([]);
const[page,setpage]= useState(1);
const dataLength = allData?.length ?? 0;
const Value = pageValue;
const Navigate = useNavigate();






useEffect(() => {
    dispatch(FeatureProduct("https://dummyjson.com/products"));  
},[])

const{CartItem,Status}= useSelector((state) => state.Product);


useEffect(() => {
   if(Status === "IDLE"){
    setallData(CartItem. products)
   }
},[Status,CartItem.products])

// HandlePagination Function Start Here
const HandlePagination = (pageNumber) => {
  if(pageNumber > 0 && pageNumber <= Math.floor(dataLength/Value) + 1){
    setpage(pageNumber)
  } 
};

// HandleCart Function Start Here
const HandleCart = (item) => {  
   dispatch(AllCartItem(item));
};

// HandleshopDetails Function is Start Here
const HandleshopDetails = (item) => {
  Navigate(`/productdetails/${item.id}`)
};

// HandleWish Fuction Start Here
const HandleWish = (item) => {
  dispatch(WishCartItem(item));
};

  return (
    <>
      <div>
        <div className="absolute top-24 hidden md:block">
          <p className="font-Montserrat text-sm font-light">
            Showing {page * Value - Value + 1}-{Value} of {dataLength} results
          </p>
        </div>
        <div>
          {Status === "LOADING" ? (
            <p>
              <Loading
                className={"flex items-center justify-center md:justify-start flex-wrap gap-y-4 gap-x-4"}
                LoadItem={pageValue}
              />
            </p>
          ) : (
            <Flex
              className={
                "items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-6"
              }
            >
              {catItem
                ? catItem?.slice(page * Value - Value, page * Value).map((item) => (
                    <div key={item.id}>
                      <Card
                        ProductDetails={() => HandleshopDetails(item)}
                        CartProduct={() => HandleCart(item)}
                        WishProduct={() => HandleWish(item)}
                        FeatueImage={item.thumbnail}
                        Title={`${item.title.slice(0, 16)}....`}
                        MainPrice={`$${Math.round(item.price)}`}
                        Price={`${
                          Math.round(item.price) -
                          Math.round(item.price) *
                            (Math.round(item.discountPercentage) / 100)
                        }`}
                      />
                    </div>
                  ))
                : allData
                    ?.slice(page * Value - Value, page * Value)
                    .map((item) => (
                      <div key={item.id}>
                        <Card
                          ProductDetails={() => HandleshopDetails(item)}
                          CartProduct={() => HandleCart(item)}
                          WishProduct={() => HandleWish(item)}
                          FeatueImage={item.thumbnail}
                          Title={`${item.title.slice(0, 16)}....`}
                          MainPrice={`$${Math.round(item.price)}`}
                          Price={`${
                            Math.round(item.price) -
                            Math.round(item.price) *
                              (Math.round(item.discountPercentage) / 100)
                          }`}
                        />
                      </div>
                    ))}
            </Flex>
          )}

          {/* Pagination is here */}
          <div>
            <div className="flex items-center justify-end gap-x-3 py-10 w-[90%]">
              <div>
                <span
                  className="text-3xl cursor-pointer text-CommonColor active:text-green-500"
                  onClick={() => HandlePagination(page - 1)}
                >
                  <FaChevronCircleLeft />
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                {[
                  ...new Array(
                    Math.floor(
                      Math.floor(dataLength / Value) <= dataLength / Value
                        ? Math.floor(dataLength / Value) + 1
                        : Math.floor(dataLength / Value)
                    )
                  ),
                ].map((_, index) => (
                  <div key={index}>
                    <p
                      className={`w-10 h-10  cursor-pointer  flex rounded-sm items-center justify-center text-white font-bold text-xl ${
                        page === index + 1 ? "bg-[#B71B1B]" : "bg-black"
                      }`}
                      onClick={() => HandlePagination(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <span
                  className="text-3xl cursor-pointer text-CommonColor active:text-green-500"
                  onClick={() => HandlePagination(page + 1)}
                >
                  <FaChevronCircleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBottom
