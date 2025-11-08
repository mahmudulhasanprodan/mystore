import { createSlice } from '@reduxjs/toolkit'
import { SuccessToast } from '../../../Utils/Utils';



const initialState = {
  WishItem: localStorage.getItem("wishProduct")
    ? JSON.parse(localStorage.getItem("wishProduct"))
    : [],
    WishTotalitem: 0,
};

export const WishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    WishCartItem: (state, action) => {
      const wishIndex = state.WishItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (wishIndex >= 0) {
        state.WishItem[wishIndex].CartQuantity += 1;
        localStorage.setItem("wishProduct", JSON.stringify(state.WishItem));
      } else {
        state.WishItem.push({ ...action.payload, CartQuantity: 1 });
        localStorage.setItem("wishProduct", JSON.stringify(state.WishItem));
        SuccessToast(`${action.payload.title} Added To Wish`);
      }
    },
    
    WishRemoveItem: (state, action) => {
      const wishRemove = state.WishItem.filter(
        (item) => item.id !== action.payload.id
      );

      (state.WishItem = wishRemove),
        localStorage.setItem("wishProduct", JSON.stringify(state.WishItem));
    },
     WishGetTotal: (state,action) => {  
     const TotalWishData = state.WishItem.reduce((previousitem,currentitem) => {
       const{CartQuantity} = currentitem;
        previousitem.WishTotalItem += Math.round(CartQuantity);     
        return previousitem;
      },
    {
      WishTotalItem: 0,
    })
     state.WishTotalitem = TotalWishData.WishTotalItem;
     
     }
  },
});





export const {WishCartItem,WishRemoveItem,WishGetTotal } = WishSlice.actions

export default WishSlice.reducer