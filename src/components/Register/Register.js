import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="register">
            <header className="text-center mb-5">
              <h2>Please Register</h2>
            </header>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="register-btn" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
