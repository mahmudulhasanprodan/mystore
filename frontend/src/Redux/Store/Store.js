import { configureStore } from '@reduxjs/toolkit'
import  ProductSLice  from '../ProductSlice/ProductSlice'
import  CartSLice  from '../CartSlice/CartSlice'
import { GetTotal } from '../CartSlice/CartSlice'
import { WishGetTotal } from '../WishSlice/WishSlice'
import  WishSlice from '../WishSlice/WishSlice'


export const Store = configureStore({
  reducer: {
    Product : ProductSLice,
    Cart : CartSLice,
    Wish: WishSlice,
  },
})


Store.dispatch(GetTotal());
Store.dispatch(WishGetTotal());