import React from "react";
import image1 from "../../../assets/home/grid-1.jpg";
import image2 from "../../../assets/home/grid-2.jpg";
import image3 from "../../../assets/home/grid-3.jpg";
import image4 from "../../../assets/home/grid-4.jpg";
import image5 from "../../../assets/home/grid-5.jpg";
import image6 from "../../../assets/home/grid-6.webp";
import { FaInstagram } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Discount = () => {
  return (
    <section className="container mx-auto">
      <div className="lg:flex gap-5">
        <div className="lg:w-1/4 mb-5 lg:mb-0 flex flex-col text-center items-center lg:block lg:text-left">
          <FaInstagram size={30} className="mb-3"/>
          <p>
            Remember to show off your new purchase on insta by tagging us and
            get <b>500 Taka</b> off your next order. Some conditions apply.
          </p>
          <a href="#" className="mt-3 uppercase font-francoisOne underline flex items-center gap-3">Follow us on instagram <BsArrowRight /></a>
        </div>
        <div className="lg:w-3/4 grid grid-cols-3 lg:grid-cols-6 gap-5">
            <img src={image1} alt="image1" className="rounded-md h-full object-cover"/>
            <img src={image2} alt="image2" className="rounded-md h-full object-cover"/>
            <img src={image3} alt="image3" className="rounded-md h-full object-cover"/>
            <img src={image4} alt="image4" className="rounded-md h-full object-cover"/>
            <img src={image5} alt="image5" className="rounded-md h-full object-cover"/>
            <img src={image6} alt="image6" className="rounded-md h-full object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Discount;
