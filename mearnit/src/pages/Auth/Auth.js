import React from "react";
import LogIn from "./LogIn";
import Register from "./Register";

const Auth = (props) => {
  let { authRoute } = props;
  let body;
  body = <>{authRoute === "login" ? <LogIn /> : <Register />};</>;
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
