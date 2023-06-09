import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import failedToastify from "../toastifies/failedToastify/failed";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#d8413c"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );

  if (user) return children;
  else {
    failedToastify("You first have to login to access the page")
    return <Navigate to="/login" state={{ from: location }} />
  };
};

export default PrivateRoute;
