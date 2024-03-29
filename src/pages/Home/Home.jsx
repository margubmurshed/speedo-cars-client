import React from "react";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import { Helmet } from "react-helmet";
import ImageGallary from "./ImageGallary/ImageGallary";
import Satisfaction from "./Satisfaction/Satisfaction";
import CustomerService from "./CustomerService/CustomerService";
import Discount from "./Discount/Discount";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>Speedo Cars | Home</title>
      </Helmet>
      <Banner />
      <ImageGallary />
      <CategoryTabs />
      <Satisfaction />
      <Discount />
      <CustomerService />
    </div>
  );
};

export default Home;
