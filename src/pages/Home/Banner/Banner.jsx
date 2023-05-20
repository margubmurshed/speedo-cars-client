import React from "react";
import image from "../../../assets/home/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative rounded-md">
      <img src={image} alt="banner_img" className="rounded-md md:h-[500px] w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black text-white p-5 pl-10 md:pl-16 flex flex-col justify-center gap-5 rounded-md">
        <h2 className="text-4xl md:text-6xl flex flex-col gap-3 font-bold font-francoisOne">
          <span>Best Online</span> <span>Toy Cars Store</span>
        </h2>
        <Link className="btn w-fit bg-blue-500 font-francoisOne hover:bg-speedo-primary">Discover More</Link>
      </div>
    </div>
  );
};

export default Banner;
