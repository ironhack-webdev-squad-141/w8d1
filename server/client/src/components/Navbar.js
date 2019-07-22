import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="nav" bg="primary">
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link to="/projects">Projects</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
