import React, { useContext } from "react";
import photo from "../../assets/login/image1.jpg";
import successToastify from "../../toastifies/success/success";
import failedToastify from "../../toastifies/failedToastify/failed";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginWithEmailPass, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPass(email, password)
      .then(() => {
        navigate(from);
        successToastify("Logged In Successfully");
      })
      .catch((err) => {
        failedToastify(err.message);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        navigate(from);
        successToastify("Logged In Successfully");
      })
      .catch((err) => {
        failedToastify(err.message);
      });
  };

  return (
    <div className="grid md:grid-cols-2">
      <Helmet>
        <title>Speedo Cars | Login</title>
      </Helmet>
      <img
        src={photo}
        alt="login_reg_photo"
        className="hidden md:block w-full h-full object-cover"
      />
      <div className="p-5 py-10">
        <div className="text-center w-3/4 mx-auto space-y-2">
          <h3 className="font-francoisOne text-4xl">Hello Again!</h3>
          <p className="font-thin">
            Welcome back! Please log in to access your account and explore all
            the exciting features we have to offer.
          </p>
        </div>
        <div className="md:w-3/4 md:mx-auto">
          <form onSubmit={handleLogin} className="font-francoisOne">
            <div className="mb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-speedo-primary border-speedo-primary hover:bg-red-500 hover:border-red-500 font-francoisOne font-light"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <button
            className="btn bg-transparent text-gray-700 border-gray-700 hover:text-white flex gap-3 font-thin w-full"
            onClick={handleLoginWithGoogle}
          >
            <FcGoogle />
            <span className="font-francoisOne">Sign In with Google</span>
          </button>
          <p className="mt-5 text-center font-thin">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-speedo-primary font-francoisOne font-thin"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
