import React from 'react'
import Flex from '../../CommonComponent/Flex'
import pic from "../../assets/HomeComponentpic/featurepic.jpg"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux'
import { RemoveItem,Increment,Decrement } from '../../Redux/CartSlice/CartSlice';

const CartProducts = (CartImage,CartTitle,Price,) => {
const dispatch = useDispatch();


const {CartProduct}= useSelector((state) => state.Cart);


// HandleRemove Function Start Here
const HandleRemove = (item) => {
 dispatch(RemoveItem(item))
};

// HandleIncrement Function Start Here
const HandleIncrement = (item) => {
    dispatch(Increment(item))
       
};
// HandleDecrement Function Start Here
const HandleDecrement = (item) => {
  dispatch(Decrement(item))
}

  return (
    <>
      <div className="pb-4">
        {CartProduct?.map((item) => (
          <div key={item.id}>
            <Flex
              className={
                "md:items-center flex-col md:flex-row justify-between md:justify-start border-b-[1px] py-2"
              }
            >
              <div className="flex items-center basis-1/3 pl-3 font-Montserrat font-semibold relative">
                <picture>
                  <img
                    src={item.thumbnail}
                    alt={item.thumbnail}
                    className="w-16 h-16 border-2 shadow-lg cursor-pointer"
                  />
                   <p
                  className="absolute -top-3 left-1 text-xl font-bold text-CommonColor hover:text-green-500 cursor-pointer md:hidden"
                  onClick={() => HandleRemove(item)}
                >
                  X
                </p>
                </picture>
                <h2 className="font-Montserrat text-xs  md:text-base pl-3">
                  {item.title ? item.title : "Title Missing"}
                </h2>
              </div>
              <div className="basis-1/4 pl-3  hidden text-CommonColor md:block">
                <p className="font-Montserrat font-semibold pl-3">
                  {item.price
                    ? `$${Math.round(
                        item.price -
                          Math.round(item.price * item.discountPercentage) / 100
                      )}`
                    : "$30.00"}
                </p>
              </div>

              <div className="basis-1/4 pl-3 font-Montserrat font-semibold py-4 flex items-center md:justify-start justify-center gap-x-3">
                <span
                  className="cursor-pointer  md:font-bold border-2 md:px-2 md:py-1 border-gray-500 active:bg-CommonColor active:text-white"
                  onClick={() => HandleDecrement(item)}
                >
                  <FaMinus />
                </span>
                <p className="font-Montserrat font-bold text-green-600 md:text-black text-md md:text-xl">
                  {item.CartQuantity}
                </p>
                <span
                  className="cursor-pointer font-bold border-2 md:px-2 md:py-1 border-gray-500 active:bg-CommonColor active:text-white"
                  onClick={() => HandleIncrement(item)}
                >
                  <FaPlus />
                </span>
              </div>
              <div className="basis-1/4 pl-3 md:font-semibold relative flex">
                <h3 className="font-Montserrat pl-5 font-bold text-md text-green-600 md:text-black">{`$${Math.round(
                  `${Math.round(
                    item.price -
                      Math.round(item.price * item.discountPercentage) / 100
                  )}` * item.CartQuantity
                )}`}</h3>
                <p
                  className="absolute right-3 cursor-pointer text-red-500 text-xl hidden md:block"
                  onClick={() => HandleRemove(item)}
                >
                  X
                </p>
              </div>
            </Flex>
          </div>
        ))}
      </div>
    </>
  );
}

export default CartProducts
