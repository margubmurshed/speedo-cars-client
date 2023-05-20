import React from "react";
import photo from "../../assets/login/image1.jpg";
import successToastify from "../../toastifies/success/success";
import failedToastify from "../../toastifies/failedToastify/failed";

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        successToastify("You logged In Successfully");
        failedToastify("You logged In Successfully");
    }
  return (
    <div className="grid md:grid-cols-2">
      <img src={photo} alt="login_reg_photo" className="hidden md:block w-full h-full object-cover" />
      <div className="p-5">
        <div className="text-center w-3/4 mx-auto space-y-2">
          <h3 className="font-francoisOne text-4xl">Hello Again!</h3>
          <p className="font-thin">
            Welcome back! Please log in to access your account and explore all
            the exciting features we have to offer.
          </p>
        </div>
        <form onSubmit={handleLogin} className="font-francoisOne">
          <div className="card flex-shrink-0 bg-base-100 md:w-3/4 mx-auto">
            <div className="card-body">
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
                <button type="submit" className="btn bg-speedo-primary border-speedo-primary hover:bg-red-500 hover:border-red-500 font-francoisOne font-light">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
