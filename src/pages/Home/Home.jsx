import React from "react";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Speedo Cars | Home</title>
      </Helmet>
      <Banner />
      <CategoryTabs />
    </div>
  );
};

export default Home;
