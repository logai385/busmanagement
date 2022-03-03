import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
function ProtectRoute(props) {
  const { component: Component, ...rest } = props;
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <>            
            <Component {...routeProps} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectRoute;
