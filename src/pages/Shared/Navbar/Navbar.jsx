import React, { useState } from "react";
import LogoIcon from "../../../assets/icons/speedo_car_logo.png";
import { NavLink, Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const navlinks = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/all-toys", text: "All Toys" },
    { id: 5, path: "/blogs", text: "Blogs" },
  ];
  const privateLinks = [
    { id: 3, path: "/my-toys", text: "My Toys" },
    { id: 4, path: "/add-toys", text: "Add Toys" },
  ];

  const listItems = navlinks.map(({ id, path, text }) => (
    <li key={id}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `font-francoisOne ${isActive ? "bg-speedo-primary text-white" : ""}`
        }
      >
        {text}
      </NavLink>
    </li>
  ));
  const privateListItems = privateLinks.map(({ id, path, text }) => (
    <li key={id}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `font-francoisOne ${isActive ? "bg-speedo-primary text-white" : ""}`
        }
      >
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className="sticky top-0 left-0 right-0 p-3 bg-white shadow">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact gap-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
              {user && privateListItems}
              <li>
                <button className="btn bg-blue-500 font-francoisOne text-white border-blue-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl gap-3">
            <img src={LogoIcon} alt="logoicon" className="w-12" />
            <span className="font-francoisOne">
              Sp<span className="text-speedo-primary">ee</span>do
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {listItems}
            {user && privateListItems}
            <li>
              <button className="btn bg-blue-500 font-francoisOne text-white border-blue-500">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
          {user ? (
            <div className="avatar-container">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    title="Manoj Singh"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
              </div>
              <div className="absolute top-full right-0 p-5 py-3 border rounded-md shadow hidden avatar-container-hover">
                <p>Manoj Singh</p>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn font-francoisOne bg-speedo-primary text-white border-speedo-primary"
            >
              Login <FiLogIn className="ml-2" size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
