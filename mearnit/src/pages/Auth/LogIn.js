import React from "react";

import { Button, Form, FormGroup } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
const LogIn = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;
  const { loginUser } = useContext(AuthContext);
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  return (
    <>
      <Form className="form mt-5" onSubmit={login}>
        <FormGroup>
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            name="username"
            value={username}
            required
            onChange={handleChange}
          />
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            className="mt-3"
            value={password}
            onChange={handleChange}
          />

          <Button variant="primary" type="submit" className="mt-3">
            Log In
          </Button>
        </FormGroup>
      </Form>
      <p className="mt-4">
        <span className="mx-2">Don't you have an account?</span>
        <Link to="/register">
          <Button variant="info" size="sm">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LogIn;
