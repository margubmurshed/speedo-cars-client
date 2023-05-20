import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const PrimaryLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
