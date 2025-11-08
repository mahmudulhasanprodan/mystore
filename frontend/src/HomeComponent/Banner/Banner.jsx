import React from 'react'
import BannerImage from "../../assets/HomeComponentpic/Banner.jpg"
const Banner = () => {
  return (
    <>
      <div className="bg-TopHColor py-4 hidden md:block">
        <div className="container">
            <div>
                <picture>
                    <img src={BannerImage} alt={BannerImage} />
                </picture>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
