import React from 'react'
import Flex from '../../CommonComponent/Flex'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiSkypeFill } from "react-icons/ri";
import { RiAccountBox2Fill } from "react-icons/ri";
import { IoLogInSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <>
      <div className="bg-TopHColor hidden md:block px-4">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <Flex className={"items-center gap-x-3"}>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <span className="text-iconColor text-md">
                  <FaLocationDot />
                </span>
                <p className="font-Montserrat text-xs font-normal">
                  669/2,Middle Monipur,Dhaka-1260
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span className="text-iconColor text-md">
                    <FaPhone />
                  </span>
                  <p className="font-Montserrat text-xs font-normal">
                    01316625624
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <span className="text-iconColor text-md">
                  <IoMdMail />
                </span>
                <p className="font-Montserrat text-xs font-normal">
                  mahmudulhasan8627@gmail.com
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span className="text-iconColor text-base">
                    <RiSkypeFill />
                  </span>
                  <p className="font-Montserrat text-xs font-normal">
                    mahmudulhasan
                  </p>
                </div>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-3"}>
              <Link to={"/myaccount"}>
                <div className="flex items-center cursor-pointer gap-x-1 font-Montserrat text-sm">
                  <span className="text-iconColor text-md">
                    <RiAccountBox2Fill />
                  </span>
                  <p>My Account</p>
                </div>
              </Link>
              <Link to={"/login"}>
                <div className="flex items-center cursor-pointer gap-x-1 font-Montserrat text-sm">
                  <span className="text-iconColor text-md">
                    <IoLogInSharp />
                  </span>
                  <p>Login</p>
                </div>
              </Link>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader
