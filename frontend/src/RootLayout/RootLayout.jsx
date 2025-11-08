import React from 'react'
import TopHeader from '../HomeComponent/TopHeader/TopHeader'
import Header from '../HomeComponent/Header/Header'
import Menu from '../HomeComponent/Menu/Menu'
import Footer from '../HomeComponent/Footer/Footer'
import BottomFooter from '../HomeComponent/BottomFooter/BottomFooter'
import { Outlet } from 'react-router-dom'




const RootLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Menu />
      <Outlet />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default RootLayout
