import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-5">
        <div className="col">
          <div className="login">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
              <div className="text-center my-2">
                <span>New to Tech Geeks? </span>
                <a href="#">Create New Account</a>
              </div>
              <div className="d-flex align-items-center my-4">
                <div className="line"></div>
                <div className="mx-2">or</div>
                <div className="line"></div>
              </div>
              <Button className="google-btn mt-3" type="submit">
                Continue With Google
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
