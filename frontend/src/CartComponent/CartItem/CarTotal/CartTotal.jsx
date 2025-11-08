import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetTotal } from '../../../Redux/CartSlice/CartSlice';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const CartTotal = () => {
  const dispatch = useDispatch();

  const{CartProduct,TotalItem,TotalAmount}= useSelector((state) => state.Cart);

useEffect(() => {
  dispatch(GetTotal())
},[dispatch,CartProduct]);

  return (
    <>
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="font-Montserrat font-bold text-2xl">Cart Totals:</h2>
          <p className="font-Montserrat font-bold text-xl px-3 py-2 bg-gray-300 rounded-md text-CommonColor">
            {TotalItem}
          </p>
        </div>
        <div className="w-[300px] py-2 pb-10 flex flex-col justify-center items-center">
          <div className="flex items-center">
            <h2 className="border-[1px] w-32 pl-5 border-gray-400 py-2 font-Montserrat font-bold text-xl">
              SubTotal:
            </h2>
            <p className="border-[1px] w-48 pl-5 border-gray-400 py-2 font-Montserrat font-bold text-CommonColor">
              {TotalAmount ? `$${TotalAmount}` : "$30.00"}
            </p>
          </div>
          <div className="flex items-center border-2">
            <h2 className="border-[1px] w-32 pl-5 border-gray-400 py-2 font-Montserrat font-bold text-xl">
              Total:
            </h2>
            <p className="border-[1px] w-48 pl-5 border-gray-400 py-2 font-Montserrat font-bold text-CommonColor">
              {TotalAmount ? `$${TotalAmount}` : "$30.00"}
            </p>
          </div>
          <div className="mt-6">
            <Link to={"/checkout"}>
              <button className="px-8 py-2 bg-CommonColor font-Montserrat font-bold text-white text-xl rounded-sm active:bg-green-500 flex items-center gap-x-2">
                Proceed To Checkout
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotal
