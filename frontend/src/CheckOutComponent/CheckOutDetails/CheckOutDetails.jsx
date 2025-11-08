import React, { useState } from 'react'
import Flex from '../../CommonComponent/Flex'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm'
import OrderHistory from '../OrderHistory/OrderHistory'
import { CountryName,CityName,DistrictName } from '../../../JsonData/JsonData'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../Firebase/FirebaseSDK'
import { FireBaseDataToast } from '../../../Utils/Utils'
import { useNavigate } from 'react-router-dom'
import { EmailValidation } from '../../../Utils/Utils'

const CheckOutDetails = () => {

const[loading,setloading]= useState(false)
const Navigate = useNavigate();
const[signUpData,setsignUpData] = useState({
  FullName: "",
  EmailId: "",
  Number: "",
  CountryName: "",
  CityName : "",
  Address: "",
  DistrictName : "",
  PostalCode: "",
});

const[signUpDataError,setsignUpDataError] = useState({
  FullNameError: "",
  EmailIdError: "",
  NumberError: "",
  CountryNameError: "",
  AddressError: "",
  CityNameError : "",
  DistrictNameError : "",
  PostalCodeError: "",
});


// HandleInputChange Function start Here

const HandleInputChange = (e) => {
  setsignUpData({
    ...signUpData,
    [e.target.id]: e.target.value,
  })
};

// Handlesubmit Function Start here
const Handlesubmit = () => {
    const {
      FullName,
      EmailId,
      Number,
      CountryName,
      Address,
      CityName,
      DistrictName,
      PostalCode,
    } = signUpData;

   if(!FullName){
    setsignUpDataError({
      ...signUpDataError,
      EmailIdError: "",
      NumberError: "",
      CountryNameError: "",
      AddressError: "",
      CityNameError: "",
      DistrictNameError: "",
      PostalCodeError: "",
      FullNameError: "FullName Missing",
    }); 
   }else if(!EmailId || !EmailValidation(EmailId)){
     setsignUpDataError({
       ...signUpDataError,
       FullNameError: "",
       NumberError: "",
       CountryNameError: "",
       AddressError: "",
       CityNameError: "",
       DistrictNameError: "",
       PostalCodeError: "",
       EmailIdError: "Email is not valid",
     });
   }else if(!Number){
     setsignUpDataError({
       ...signUpDataError,
       FullNameError: "",
       EmailIdError: "",
       CountryNameError: "",
       AddressError: "",
       CityNameError: "",
       DistrictNameError: "",
       PostalCodeError: "",
       NumberError: "Number Missing",
     });
   }else if(!CountryName){
     setsignUpDataError({
       ...signUpDataError,
       FullNameError: "",
       EmailIdError: "",
       NumberError: "",
       AddressError: "",
       CityNameError: "",
       DistrictNameError: "",
       PostalCodeError: "",
       CountryNameError: "Country Missing",
     });
   }else if(!Address){
     setsignUpDataError({
       ...signUpDataError,
       FullNameError: "",
       EmailIdError: "",
       NumberError: "",
       CountryNameError: "",
       CityNameError: "",
       DistrictNameError: "",
       PostalCodeError: "",
       AddressError: "Address Missing",
     });
   }else if(!CityName){
    setsignUpDataError({
      ...signUpDataError,
      FullNameError: "",
      EmailIdError: "",
      NumberError: "",
      CountryNameError: "",
      AddressError: "",
      DistrictNameError: "",
      PostalCodeError: "",
      CityNameError: "City Missing",
    });
   }else if(!DistrictName){
    setsignUpDataError({
      ...signUpDataError,
      FullNameError: "",
      EmailIdError: "",
      NumberError: "",
      CountryNameError: "",
      AddressError: "",
      CityNameError: "",
      PostalCodeError: "",
      DistrictNameError: "District Missing",
    });
   }else if(!PostalCode){
    setsignUpDataError({
      ...signUpDataError,
      FullNameError: "",
      EmailIdError: "",
      NumberError: "",
      CountryNameError: "",
      AddressError: "",
      CityNameError: "",
      DistrictNameError: "",
      PostalCodeError: "Postal Code Missing",
    });
   }else{
    setsignUpDataError({
      ...signUpDataError,
      FullNameError: "",
      EmailIdError: "",
      NumberError: "",
      CountryNameError: "",
      AddressError: "",
      CityNameError: "",
      DistrictNameError: "",
      PostalCodeError: "",
    });
    setloading(true);
//  Data sending FireStore
    addDoc(collection(db, "Billing_Data"),signUpData).then((userCredentsial) => {
      // FireBaseDataToast(signUpData.FullName);
      Navigate("/ordercomplete")
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setsignUpData({
        FullName: "",
        EmailId: "",
        Number: "",
        CountryName: "",
        CityName: "",
        Address: "",
        DistrictName: "",
        PostalCode: "",
      });
      setloading(false)
    })
    
   }
    
};




  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"flex-col md:flex-row justify-between py-10"}>
            <div className="w-full md:w-[700px] bg-white">
              <div className="p-4">
                <h2 className="font-Montserrat text-2xl font-bold">CheckOut</h2>
              </div>
              <div className="p-4">
                <h2 className="font-Montserrat text-2xl font-bold text-gray-400">
                  Billing Details
                </h2>
              </div>
              <div className="px-5 pb-20">
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Full Name*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your full name"}
                    InputId={"FullName"}
                    ValueForm = {signUpData.FullName}
                    InputClass={` ${
                      signUpDataError.FullNameError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }`}
                  />
                  {signUpDataError.FullNameError && (
                    <p className="text-CommonColor">
                      {signUpDataError.FullNameError}
                    </p>
                  )}
                </div>
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Email"}
                    InputType={"email"}
                    InputPlaceholder={"Enter your email here"}
                    InputId={"EmailId"}
                    InputClass={` ${
                      signUpDataError.EmailIdError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }`}
                  />
                  {signUpDataError.EmailIdError && (
                    <p className="text-CommonColor">
                      {signUpDataError.EmailIdError}
                    </p>
                  )}
                </div>
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Number*"}
                    InputType={"number"}
                    InputPlaceholder={"Enter your number here"}
                    InputId={"Number"}
                    InputClass={` ${
                      signUpDataError.NumberError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }`}
                  />
                  {signUpDataError.NumberError && (
                    <p className="text-CommonColor">
                      {signUpDataError.NumberError}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Country"
                    className="font-Montserrat text-md font-bold"
                  >
                    Country/Region
                  </label>
                  <select
                    name="CountryName"
                    id="CountryName"
                    className={`${
                      signUpDataError.CountryNameError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4 mt-2"
                    }`}
                    onChange={HandleInputChange}
                  >
                    <option value="Select Country">Select Country</option>
                    {CountryName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                  {signUpDataError.CountryNameError && (
                    <p className="text-CommonColor">
                      {signUpDataError.CountryNameError}
                    </p>
                  )}
                </div>
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Address*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your Address here"}
                    InputId={"Address"}
                    InputClass={` ${
                      signUpDataError.AddressError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }`}
                  />
                  {signUpDataError.AddressError && (
                    <p className="text-CommonColor">
                      {signUpDataError.AddressError}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="Town"
                    className="font-Montserrat text-md font-bold"
                  >
                    Town/City
                  </label>
                  <select
                    name="CityName"
                    id="CityName"
                    className={`${
                      signUpDataError.CityNameError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4 mt-2"
                    }`}
                    onChange={HandleInputChange}
                  >
                    <option value="Select City">Select City</option>
                    {CityName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                  {signUpDataError.CityNameError && (
                    <p className="text-CommonColor">
                      {signUpDataError.CityNameError}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-Montserrat text-md font-bold"
                  >
                    District
                  </label>
                  <select
                    name="DistrictName"
                    id="DistrictName"
                    className={`${
                      signUpDataError.DistrictNameError
                        ? "w-full md:w-96border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4 mt-2"
                    }`}
                    onChange={HandleInputChange}
                  >
                    <option value="Select Country">Select District</option>
                    {DistrictName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                  {signUpDataError.DistrictNameError && (
                    <p className="text-CommonColor">
                      {signUpDataError.DistrictNameError}
                    </p>
                  )}
                </div>

                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Postal Code*"}
                    InputType={"number"}
                    InputPlaceholder={"Enter your postal code here"}
                    InputId={"PostalCode"}
                    InputClass={` ${
                      signUpDataError.AddressError
                        ? "w-full md:w-96 border-[1px] border-red-300 py-1 pl-3"
                        : "w-full md:w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }`}
                  />
                   {signUpDataError.PostalCodeError && (
                    <p className="text-CommonColor">
                      {signUpDataError.PostalCodeError}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-[500px] h-[500px] bg-white">
              <OrderHistory Onsubmit={Handlesubmit} Loader={loading}/>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default CheckOutDetails
