import React, { useEffect, useRef, useState } from 'react'
import Card from '../../CommonComponent/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import Flex from '../../CommonComponent/Flex'
import { FeatureProduct } from '../../Redux/ProductSlice/ProductSlice'
import { AllCartItem } from '../../Redux/CartSlice/CartSlice'
import Loading from '../../CommonComponent/Loading/Loading'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { WishCartItem} from '../../Redux/WishSlice/WishSlice'
import { useContext } from "react";
import { CatagoriContex } from '../../Pages/Home/Home'


const BestSellingProduct = () => {
  const dispatch = useDispatch();
  const[featureData,setfeatureData] =useState([]);
  const Navigate = useNavigate();
  const CatValue = useContext(CatagoriContex);
  
  
  
   
  

  useEffect(() => {
    dispatch(FeatureProduct("https://dummyjson.com/products"));
  },[])

  
const{CartItem,Status} = useSelector((state) => state.Product);



useEffect(() => {
  if(Status === "IDLE"){
    setfeatureData(CartItem.products)
  }
},[Status,CartItem.products])




// HandleCart Function Start Here
const HandleCart = (item) => {
  dispatch(AllCartItem(item));
};

//HandleProduct Function Start Here
const HandleProduct = (item) => {
  Navigate(`/productdetails/${item.id}`);
};

//HandleWish Function Start Here
const HandleWish = (item) => {
  dispatch(WishCartItem(item))
};





  return (
    <>
      <div className="bg-TopHColor py-10 pb-40">
        <div className="container">
          <div className="px-4 xl:px-0">
            <div className="py-6">
              <h2 className="font-Montserrat text-2xl font-bold text-center md:text-start">
                Best Selling Products
              </h2>
            </div>
            {Status === "LOADING" ? (
              <p>
                <Loading
                  className={
                    "flex items-center flex-wrap gap-x-4 md:gap-x-0 gap-y-4 justify-center xl:justify-between"
                  }
                />
              </p>
            ) : (
              <Flex
                className={
                  "items-center flex-wrap justify-center xl:justify-between gap-y-4 gap-x-4 xl:gap-x-0"
                }
              >
                {CatValue
                  ? CatValue?.map((item) => (
                      <div key={item.id}>
                        <div>
                          <Card
                            ProductDetails={() => HandleProduct(item)}
                            CartProduct={() => HandleCart(item)}
                            WishProduct={() => HandleWish(item)}
                            FeatueImage={item.thumbnail}
                            Title={`${item.title.slice(0, 16)}....`}
                            MainPrice={`$${Math.round(item.price)}`}
                            Price={`$${
                              Math.round(item.price) -
                              Math.round(item.price) *
                                (Math.round(item.discountPercentage) / 100)
                            }`}
                          />
                        </div>
                      </div>
                    ))
                  : featureData?.map((item) => (
                      <div key={item.id}>
                        <div>
                          <Card
                            ProductDetails={() => HandleProduct(item)}
                            CartProduct={() => HandleCart(item)}
                            WishProduct={() => HandleWish(item)}
                            FeatueImage={item.thumbnail}
                            Title={`${item.title.slice(0, 16)}....`}
                            MainPrice={`$${Math.round(item.price)}`}
                            Price={`$${
                              Math.round(item.price) -
                              Math.round(item.price) *
                                (Math.round(item.discountPercentage) / 100)
                            }`}
                          />
                        </div>
                      </div>
                    ))}
              </Flex>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellingProduct
