import React from 'react'
import { GrBasket } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Flex from "../../CommonComponent/Flex"


const Card = ({FeatueImage,Title,Price,MainPrice,CartProduct,ProductDetails,WishProduct}) => {



  return (
    <>
      <div>
        <div className="w-[250px] h-[370px] bg-white shadow-lg">
          <div
            className="w-full h-[200px] cursor-pointer"
            onClick={ProductDetails}
          >
            <picture>
              <img
                src={FeatueImage}
                alt={FeatueImage}
                className="w-full h-[200px]"
              />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <h2 className="font-Montserrat font-light text-md">
              {Title ? Title : "Title Missing"}
            </h2>
            <p className="font-Montserrat text-md mt-2 text-CommonColor font-semibold">
              {Price}{" "}
              <del className="text-gray-400">
                {MainPrice ? MainPrice : "$30.00"}
              </del>
            </p>
          </div>
          <Flex className={"justify-center mt-4"}>
            <div>
              <button
                className="px-3 py-1 border-[1px] border-gray-400 flex items-center gap-x-2 font-Montserrat hover:bg-CommonColor hover:text-white"
                onClick={CartProduct}
              >
                <span>
                  <GrBasket />
                </span>
                Add To Cart
              </button>
            </div>
            <div>
              <button
                className="px-2 py-3 border-[1px] border-gray-400 flex items-center gap-x-2 font-Montserrat hover:bg-CommonColor hover:text-white"
                onClick={WishProduct}
              >
                <span>
                  <FaRegHeart />
                </span>
                Wish
              </button>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Card
