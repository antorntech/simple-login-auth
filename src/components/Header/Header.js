import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="box-shadow">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">My-App</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/about">About</Link>
            <Link to="/register">Register</Link>
            <span style={{ fontWeight: "bold" }}>
              {user?.displayName && user.displayName}
            </span>
            {user?.uid ? (
              <Button onClick={handleSignOut} className="signout-btn">
                Sign Out
              </Button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
<Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>;
