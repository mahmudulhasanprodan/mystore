import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiSkypeFill } from "react-icons/ri";
import Flex from '../../CommonComponent/Flex';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaShopware } from "react-icons/fa";
import Bkash from "../../assets/HomeComponentpic/Bkash.png"
import Rocket from "../../assets/HomeComponentpic/Rocket.png"
import MarterCard from "../../assets/HomeComponentpic/MasterCard.png"
import Paypal from "../../assets/HomeComponentpic/Paypal.png"
import Visa from "../../assets/HomeComponentpic/Visa.png"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 py-20">
        <div className="container">
          <Flex
            className={
              "justify-between flex-col md:flex-row gap-y-6 md:gap-y-0 px-4 md-px-0"
            }
          >
            <div>
              <span className="text-7xl text-yellow-600">
                <FaShopware />
              </span>
              <h2 className="font-Montserrat font-bold text-3xl text-CommonColor">
                HatBazar
              </h2>
            </div>

            <Flex className={"flex-col"}>
              <div className="mb-6">
                <h2 className="font-Montserrat font-bold text-xl text-slate-700 md:hidden lg:block">
                  We Accept
                </h2>
              </div>
              <div className="md:hidden lg:block">
                <div className="flex items-center gap-y-3 flex-wrap w-72 gap-x-3">
                  <div>
                    <picture>
                      <img
                        src={MarterCard}
                        alt={MarterCard}
                        className="w-20 h-12  rounded-lg shadow-md cursor-pointer"
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <img
                        src={Bkash}
                        alt={Bkash}
                        className="w-20 h-12 rounded-lg shadow-md cursor-pointer"
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <img
                        src={Rocket}
                        alt={Rocket}
                        className="w-20 h-12 rounded-lg shadow-md cursor-pointer"
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <img
                        src={Paypal}
                        alt={Paypal}
                        className="w-20 h-12 rounded-lg shadow-md cursor-pointer"
                      />
                    </picture>
                  </div>
                  <div>
                    <picture>
                      <img
                        src={Visa}
                        alt={Visa}
                        className="w-20 h-12 rounded-lg shadow-md cursor-pointer"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </Flex>
            <div className="flex flex-col">
              <div className="mb-6">
                <h2 className="font-Montserrat font-bold text-xl text-slate-700">
                  Shop Location
                </h2>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                  <span className="text-iconColor">
                    <FaLocationDot />
                  </span>
                  <p className="font-Montserrat text-md font-light">
                    669/2,Middle Monipur,Dhaka-1260
                  </p>
                </div>
                <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                  <span className="text-iconColor">
                    <FaPhone />
                  </span>
                  <p className="font-Montserrat text-sm font-light">
                    01316625624
                  </p>
                </div>
                <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                  <span className="text-iconColor">
                    <IoMdMail />
                  </span>
                  <p className="font-Montserrat text-sm font-light">
                    mahmudulhasan8627@gmail.com
                  </p>
                </div>
                <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                  <span className="text-iconColor">
                    <RiSkypeFill />
                  </span>
                  <p className="font-Montserrat text-sm font-light">
                    mahmudulhasan
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="font-Montserrat text-center md:text-start font-bold text-xl pb-4">
                Get In Touch
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-x-3">
                <Link to={"https://www.facebook.com/share/1Duhy3A2xh/"}>
                  <span className="text-2xl cursor-pointer text-iconColor hover:text-CommonColor">
                    <FaFacebookSquare />
                  </span>
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/in/mahmudul-hasan-788019168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                >
                  <span className="text-2xl cursor-pointer text-iconColor hover:text-CommonColor">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link to={"https://github.com/mahmudulhasanprodan"}>
                  <span className="text-2xl cursor-pointer text-iconColor hover:text-CommonColor">
                    <FaGithubSquare />
                  </span>
                </Link>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Footer
