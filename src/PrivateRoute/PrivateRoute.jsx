/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 1-second delay before setting loading to false
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts
    };
  }, []);

  if (loading) {
    // Display a loading indicator during the delay
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return authUser?.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;