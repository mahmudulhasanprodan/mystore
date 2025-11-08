import React, { useState } from 'react'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm';
import Flex from '../../CommonComponent/Flex';
import { FaShopware } from "react-icons/fa";
import { EmailValidation } from '../../../Utils/Utils';



const SignUp = () => {
const[loading,setloading] =useState(false);
  const[SignUpData,setSignUpData] = useState({
    FullName : "",
    EmailAddress : "",
    Password : "",
    RepeatPassword: "",
  });

    const[SignUpDataError,setSignUpDataError] = useState({
    FullNameError : "",
    EmailAddressError : "",
    PasswordError : "",
    RepeatPasswordError: "",
    PasswordNotMatch: "",
  });

//HandleSignUp Function start here
const HandleSignUp = (e) => {
  setSignUpData({
    ...SignUpData,
    [e.target.id] : e.target.value,
  })
  
};

// HandleSubmit Function Start Here
const HandleSubmit = (e) => {
  e.preventDefault();
  const { FullName, EmailAddress, Password, RepeatPassword } = SignUpData;
  if (!FullName) {
    setSignUpDataError({
      ...SignUpDataError,
      EmailAddressError: "",
      PasswordError: "",
      RepeatPasswordError: "",
      PasswordNotMatch: "",
      FullNameError: "Full Name Missing",
    });
  } else if (!EmailAddress || !EmailValidation(EmailAddress)) {
    setSignUpDataError({
      ...SignUpDataError,
      FullNameError: "",
      PasswordError: "",
      RepeatPasswordError: "",
      PasswordNotMatch: "",
      EmailAddressError: "Email not Valid",
    });
  } else if (!Password) {
    setSignUpDataError({
      ...SignUpDataError,
      FullNameError: "",
      EmailAddressError: "",
      RepeatPasswordError: "",
      PasswordNotMatch: "",
      PasswordError: "Password Missing",
    });
  } else if (!RepeatPassword) {
    setSignUpDataError({
      ...SignUpDataError,
      FullNameError: "",
      EmailAddressError: "",
      PasswordError: "",
      PasswordNotMatch: "",
      RepeatPasswordError: "Repeat Password Missing",
    });
  } else if (Password !== RepeatPassword) {
    setSignUpDataError({
      ...SignUpDataError,
      FullNameError: "",
      EmailAddressError: "",
      PasswordError: "",
      RepeatPasswordError: "",
      PasswordNotMatch: "",
      PasswordNotMatch: "Username or Password not Match",
    });
  } else {
    
  }
};

  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"py-20"}>
            <div className="w-full md:w-1/2 bg-white py-10 px-4 shadow-lg">
              <div className="pb-10 py-2">
                <h2 className="font-Montserrat font-bold text-2xl pb-1">
                  HELLO!
                </h2>
                <p className="font-Montserrat text-sm font-light text-gray-400">
                  Sign up to continue
                </p>
              </div>
              <form action="#">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Full Name"}
                      InputType={"text"}
                      InputPlaceholder={"John Doe"}
                      InputId={"FullName"}
                      ValueForm={SignUpData.FullName}
                      InputClass={`${
                        SignUpDataError.FullNameError
                          ? "border-b-[1px] w-96 py-1 border-red-500"
                          : "border-b-[1px] w-96 py-1"
                      }`}
                      OnChangeItem={HandleSignUp}
                    />
                    {SignUpDataError.FullNameError && (
                      <p className="text-CommonColor">
                        {SignUpDataError.FullNameError}
                      </p>
                    )}
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Email Address"}
                      InputType={"email"}
                      InputPlaceholder={"johndoe@gmail.com"}
                      InputId={"EmailAddress"}
                      ValueForm={SignUpData.EmailAddress}
                      InputClass={`${
                        SignUpDataError.EmailAddressError
                          ? "border-b-[1px] w-96 py-1 border-red-500"
                          : "border-b-[1px] w-96 py-1"
                      }`}
                      OnChangeItem={HandleSignUp}
                    />
                    {SignUpDataError.EmailAddressError && (
                      <p className="text-CommonColor">
                        {SignUpDataError.EmailAddressError}
                      </p>
                    )}
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Password"}
                      InputType={"password"}
                      InputPlaceholder={"Password"}
                      InputId={"Password"}
                      ValueForm={SignUpData.Password}
                      InputClass={`${
                        SignUpDataError.PasswordError
                          ? "border-b-[1px] w-96 py-1 border-red-500"
                          : "border-b-[1px] w-96 py-1"
                      }`}
                      OnChangeItem={HandleSignUp}
                    />
                    {SignUpDataError.PasswordError && (
                      <p className="text-CommonColor">
                        {SignUpDataError.PasswordError}
                      </p>
                    )}
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Repeat Password"}
                      InputType={"Password"}
                      InputPlaceholder={"Confirm Password"}
                      InputId={"RepeatPassword"}
                      ValueForm={SignUpData.RepeatPassword}
                      InputClass={`${
                        SignUpDataError.RepeatPasswordError
                          ? "border-b-[1px] w-96 py-1 border-red-500"
                          : "border-b-[1px] w-96 py-1"
                      }`}
                      OnChangeItem={HandleSignUp}
                    />
                    {SignUpDataError.RepeatPasswordError && (
                      <p className="text-CommonColor">
                        {SignUpDataError.RepeatPasswordError}
                      </p>
                    )}
                  </div>
                  <div>
                    {SignUpDataError.PasswordNotMatch && (
                      <p className="text-CommonColor">
                        {SignUpDataError.PasswordNotMatch}
                      </p>
                    )}
                  </div>
                  <div className="mt-4">
                    {loading ? (
                      <button
                        type="button"
                        className="bg-indigo-500 w-72 rounded-md py-2 flex items-center justify-center font-Montserrat text-white font-bold"
                      >
                        <svg
                          className="animate-spin h-5 w-5 mr-3 border-4 border-white border-b-4 border-b-red-500 rounded-full"
                          viewBox="0 0 24 24"
                        ></svg>
                        Processing...
                      </button>
                    ) : (
                      <button
                        className="w-72 py-2 bg-[#87A798] font-Montserrat text-white font-bold rounded-md"
                        onClick={HandleSubmit}
                      >
                        Sign Up
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="w-1/2 bg-[#87A798] shadow-lg hidden md:block">
              <div className="flex flex-col items-center justify-center h-full">
                <span className="font-bold text-5xl text-white">
                  <FaShopware />
                </span>
                <h2 className="font-Montserrat font-bold text-2xl text-white">
                  HatBazar
                </h2>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default SignUp
