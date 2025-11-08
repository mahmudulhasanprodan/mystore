import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const ApiStatus = {
  Idle: "IDLE",
  Loading: "LOADING",
  Error: "ERROR"
}

const initialState = {
  CartItem: [],
  Status: ApiStatus.Idle,
}

export const ProductSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ProductData: (state, action) => {
      state.CartItem = action.payload;
    },
    Setstatus: (state, action) => {
      state.Status = action.payload;
    },
    
  },
});

// Writing The Thunk Function
export const FeatureProduct = (apiData) => {
   return async function GetProduct (dispatch,getState) {
     try {
      dispatch(Setstatus(ApiStatus.Loading))
       const response = await axios.get(apiData);
       dispatch(ProductData(response.data));
       dispatch(Setstatus(ApiStatus.Idle))
       
     } catch (error) {
      dispatch(Setstatus(ApiStatus.Error))
      console.log(error);
      
     }
   }
};

export const { ProductData,Setstatus,ProductIncrement} = ProductSLice.actions

export default ProductSLice.reducer