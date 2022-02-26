import React from 'react'
import { Form,FormGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <Form className="form mt-5">
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Enter User Name"
          name="username"
          required
        />
        <Form.Control
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          className="mt-3"
        />
        <Form.Control
          type="password"
          placeholder="Confirm your Password"
          name="confirmPassword"
          required
          className="mt-3"
        />


        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </FormGroup>
    </Form>
    <p className="mt-4">
      <span className="mx-2">Already have an account?</span>
      <Link to="/login">
        <Button variant="info" size="sm">
          Log In
        </Button>
      </Link>
    </p>
  </>
  )
}

export default Register