import React from "react";
import LogIn from "./LogIn";
import Register from "./Register";

const Auth = (props) => {
  let { authRoute } = props;
  let body;
  body = (
    <>
      <h2>Learn It</h2>
      <h3>Keep tracking what you are learing</h3>
      {authRoute === "login" ? <LogIn /> : <Register />};
    </>
  );
  return (
    <>
      <div className="Landing">
        <div className="dark-overlay">
          <div className="landing-inner">{body}</div>
        </div>
      </div>
    </>
  );
};

export default Auth;
