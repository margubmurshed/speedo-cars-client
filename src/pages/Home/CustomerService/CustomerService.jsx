import React from "react";
import { BsHeadphones, BsFillChatLeftDotsFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const CustomerService = () => {
  return (
    <div className="mt-10">
      <h2 className="font-francoisOne text-3xl text-center mb-5">
        We support our customers
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="border flex flex-col items-center text-center space-y-5 p-5 rounded-md">
          <div className="w-12 h-12 flex justify-center items-center bg-speedo-primary rounded-full text-white">
            <BsHeadphones size={30} />
          </div>
          <h3 className=" font-francoisOne text-3xl">Visual Reciptionist</h3>
          <p>
            Our visual receptionist welcomes you to our toy store with a
            friendly smile, guiding you through a magical shopping journey.
          </p>
        </div>
        <div className="border flex flex-col items-center text-center space-y-5 p-5 rounded-md">
          <div className="w-12 h-12 flex justify-center items-center bg-speedo-primary rounded-full text-white">
            <BsFillChatLeftDotsFill size={20} />
          </div>
          <h3 className=" font-francoisOne text-3xl">Live Chat</h3>
          <p>
            Connect with our live chat support for instant assistance, toy
            recommendations, and a personalized shopping experience. We're here
            to help!
          </p>
        </div>
        <div className="border flex flex-col items-center text-center space-y-5 p-5 rounded-md">
          <div className="w-12 h-12 flex justify-center items-center bg-speedo-primary rounded-full text-white">
            <IoCallSharp size={30} />
          </div>
          <h3 className=" font-francoisOne text-3xl">Call Directly</h3>
          <p>
            Give us a call directly to speak with our friendly toy experts, get
            personalized advice, and make your shopping experience
            extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
