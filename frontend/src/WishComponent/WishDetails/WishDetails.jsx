import React, { useEffect, useState } from 'react'
import Flex from '../../CommonComponent/Flex';
import { useSelector, useDispatch } from 'react-redux'
import { WishRemoveItem,WishGetTotal} from '../../Redux/WishSlice/WishSlice';
import { AllCartItem } from '../../Redux/CartSlice/CartSlice';


const WishDetails = () => {

const dispatch = useDispatch();
// const[wishData,setwishData]= useState([])

const{ WishItem} = useSelector((state) => state.Wish);


useEffect(() => {
    dispatch(WishGetTotal());
},[dispatch,WishItem])



// HandleRemove Function Start Here
const HandleRemove = (item) => {  
   dispatch(WishRemoveItem(item));
};

//HandleWishCart Function Start Here
const HandleWishCart = (item) => {
    dispatch(AllCartItem(item))
    dispatch(WishRemoveItem(item));
};


  return (
    <>
      <div className="bg-TopHColor py-20">
        <div className="container">
          <div className="bg-white p-4 w-3/4 pb-20">
            <div>
              <h2 className="font-Montserrat font-bold text-xl py-10">
                Wishlist
              </h2>
            </div>
            <Flex className={"items-center py-10 bg-slate-500"}>
              <div className="basis-1/3  pl-3 font-Montserrat font-semibold h-8">
                <h2 className="h-full flex items-center text-white text-xl">
                  Product
                </h2>
              </div>
              <div className="basis-1/4 pl-3 font-Montserrat font-semibold h-8 hidden md:block">
                <h2 className="h-full flex items-center text-white text-xl">
                  Unit Price
                </h2>
              </div>
              <div className="basis-1/4  pl-3 font-Montserrat font-semibold h-8 hidden md:block">
                <h2 className="h-full flex items-center text-white text-xl">
                  Stock Status
                </h2>
              </div>
              <div className="basis-1/4  pl-3 font-Montserrat font-semibold h-8 hidden md:block">
                <h2 className="h-full flex items-center text-white text-xl pl-6">
                  - -
                </h2>
              </div>
            </Flex>
            <div className="">
              {WishItem?.map((item) => (
                <Flex
                  className={
                    "items-center justify-between md:justify-start border-b-[1px] py-2"
                  }
                  key={item.id}
                >
                  <div className="flex items-center basis-1/3 pl-3 font-Montserrat font-semibold border-[1px] h-24 border-gray-500">
                    <picture className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.thumbnail}
                        className="w-10 h-10 md:w-16 md:h-16 border-2 shadow-lg cursor-pointer"
                      />
                      <p
                        className="absolute -top-4 -left-2 font-bold text-2xl cursor-pointer text-CommonColor hover:text-green-500"
                        onClick={() => HandleRemove(item)}
                      >
                        X
                      </p>
                    </picture>
                    <h2 className="font-Montserrat text-xs md:text-base pl-3">
                      {item.title
                        ? `${item.title.slice(0, 10)}..`
                        : "Title Missing"}
                    </h2>
                  </div>
                  <div className="basis-1/4 pl-3  hidden text-CommonColor md:block border-[1px] h-24 border-gray-500">
                    <p className="font-Montserrat font-semibold pl-3 flex items-center h-full">
                      {item.price
                        ? `$${
                            Math.round(item.price) -
                            Math.round(
                              (item.price *
                                Math.round(item.discountPercentage)) /
                                100
                            )
                          }`
                        : "$0"}
                    </p>
                  </div>

                  <div className="basis-1/4 pl-5 font-Montserrat font-semibold py-4 flex items-center gap-x-3 border-[1px] h-24 border-gray-500">
                    <h2>{item.stock ? "In Stock" : "Out Of Stock"}</h2>
                  </div>
                  <div className="basis-1/4 pl-3 md:font-semibold relative flex  border-[1px] h-24 border-gray-500">
                    <button className="font-Montserrat pl-5 font-thin text-md underline text-CommonColor" onClick={() => HandleWishCart(item)}>
                      Add To Cart
                    </button>
                  </div>
                </Flex>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishDetails
