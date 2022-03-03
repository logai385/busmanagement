import React, { useContext } from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import { AuthContext } from "../../services/AuthContext";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  
  let body;
  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
        
      </div>
    );
  } else if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else body = <>{authRoute === "login" ? <LogIn /> : <Register />};</>;
  return (
    <>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>Learn It</h1>
            <h4>Keep tracking what you are learing</h4>
            {body}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
