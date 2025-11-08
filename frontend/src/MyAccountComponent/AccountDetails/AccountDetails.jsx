import React, { useState } from 'react'
import Flex from '../../CommonComponent/Flex'

const AccountDetails = () => {

  const[profileOpen,setprofileOpen] = useState(false);
//HandleProfile Function Start here
const HandleProfile  = () => {
   setprofileOpen(!profileOpen);
};

  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"py-20"}>
            <div className="w-1/3 h-[500px]">
              <div>
                <h3 className="font-Montserrat text-xs mb-4">
                  Welcome to mahmudul hasan
                </h3>
              </div>
              <div>
                <h1 className="font-Montserrat font-bold text-lg">
                  Manage My Account
                </h1>
                <p
                  className="font-Montserrat text-sm font-bold text-slate-500 cursor-pointer pl-20 mt-2 active:text-green-500"
                  onClick={HandleProfile}
                >
                  My Profile
                </p>
                <h3 className="font-Montserrat text-sm font-bold text-slate-500 cursor-pointer pl-20 mt-2">Order History</h3>
              </div>
            </div>
            {profileOpen && (
              <div className="w-2/3 h-[500px]  bg-white shadow-lg">
                <div className="flex items-center gap-x-16 p-10">
                  <div>
                    <h2 className="font-Montserrat font-bold text-xl text-slate-700 mb-2">Full Name</h2>
                    <p  className="font-Montserrat font-light text-sm">Mahmudul Hasan</p>
                  </div>
                  <div>
                    <h2 className="font-Montserrat font-bold text-xl text-slate-700 mb-2">Email</h2>
                    <p className="font-Montserrat font-light text-sm">mahmudulhasan8627@gmail.com</p>
                  </div>
                </div>
              </div>
            )}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default AccountDetails
