import React from 'react'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import RootLayout from './RootLayout/RootLayout';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './ProductDetailComponent/ProductDetails/ProductDetails';
import CheckOut from './Pages/CheckOut/CheckOut';
import OrderComplete from './Pages/OrderComplete/OrderComplete';
import Login from './Pages/Login/Login';
import Myaccount from './Pages/MyAccount/Myaccount';
import WishList from './Pages/WishList/WishList';
import SignUp from './Pages/SignUp/SignUp';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
     <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/productdetails/:ProductId" element={<ProductDetails />}></Route>
    <Route path="/checkout" element={<CheckOut />}></Route>
    <Route path="/ordercomplete" element={<OrderComplete />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/myaccount" element={<Myaccount />}></Route>
    <Route path="/wishlist" element={<WishList />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
   </Route>
   )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
};

export default App
