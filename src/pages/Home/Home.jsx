import React from "react";
import Banner from "./Banner/Banner";
import CategoryTabs from "./CategoryTabs/CategoryTabs";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <CategoryTabs />
    </div>
  );
};

export default Home;
