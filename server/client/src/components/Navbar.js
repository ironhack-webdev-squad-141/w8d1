import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const CustomNavbar = props => {
  return (
    <Navbar className="nav" bg="primary">
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      {props.user ? (
        <Navbar.Brand>
          <Link to="/projects">Projects</Link>
        </Navbar.Brand>
      ) : (
        //   <React.Fragment>
        <>
          <Navbar.Brand>
            <Link to="/signup">Signup</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/login">Login</Link>
          </Navbar.Brand>
        </>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
