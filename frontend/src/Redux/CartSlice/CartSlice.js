import { createSlice } from '@reduxjs/toolkit'
import { SuccessToast } from '../../../Utils/Utils';
import { ErrorToast } from '../../../Utils/Utils';

const initialState = {
  CartProduct: localStorage.getItem("Cartitem")
    ? JSON.parse(localStorage.getItem("Cartitem"))
    : [],
  TotalItem: 0,
  TotalAmount: 0,
};

export const CartSLice = createSlice({
  name: "counter",
  initialState,
  reducers:{
     AllCartItem: (state,action) => {
       const FindValue = state.CartProduct.findIndex((item)=>{
          return item.id === action.payload.id
       })
       if(FindValue >= 0){
        state.CartProduct[FindValue].CartQuantity += 1;
        localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));
          SuccessToast(`${action.payload.title} Again Added`,"top-left");
       }else{
         state.CartProduct.push({ ...action.payload, CartQuantity: 1 });
          localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));
          SuccessToast(`${action.payload.title} Added To Cart`);
       }
     },
     RemoveItem: (state,action) => {
         const remove = state.CartProduct.filter(
           (item) => item.id !== action.payload.id
         );
        (state.CartProduct = remove),
          localStorage.setItem("Cartitem", JSON.stringify(state.CartProduct));  
          ErrorToast(`${action.payload.title} Item Removed From Cart`, "top-center")

     },
     Increment: (state,action)=> {
       const InDex = state.CartProduct.findIndex(
         (item) => item.id === action.payload.id
       );         
       state.CartProduct[InDex].CartQuantity += 1
       localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));  
       SuccessToast(`${action.payload.title} Increment`,"bottom-right")  
     },
     Decrement: (state,action) => {
        const DecrementInDex = state.CartProduct.findIndex(
         (item) => item.id === action.payload.id
       ); 
       if(state.CartProduct[DecrementInDex].CartQuantity > 1){
         state.CartProduct[DecrementInDex].CartQuantity -= 1;
         localStorage.setItem("Cartitem", JSON.stringify(state.CartProduct)); 
          ErrorToast(`${action.payload.title} Decrement`, "bottom-right")
      }  
     },
     GetTotal: (state,action) => {  
     const TotalcartData = state.CartProduct.reduce((previousitem,currentitem) => {
       const{price,CartQuantity,discountPercentage} = currentitem;
       const TotalPrice = CartQuantity * `${price-(price*discountPercentage)/100}`;
        
        previousitem.CartTotalamount += Math.round(TotalPrice)     
        previousitem.CartTotalItem += Math.round(CartQuantity)     
        return previousitem;
      },
    {
      CartTotalItem: 0,
      CartTotalamount: 0,
    })
     state.TotalItem = TotalcartData.CartTotalItem;
     state.TotalAmount = TotalcartData.CartTotalamount;
     }
     
  }
});



export const { AllCartItem,RemoveItem,Increment,Decrement,GetTotal} = CartSLice.actions

export default CartSLice.reducer