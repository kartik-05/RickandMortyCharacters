import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar-container">
      <div className="navbar-items">
        <Link to="/">
          <Button variant="contained">Pagination</Button>
        </Link>
        <Link to="/scroll">
          <Button variant="outlined">Load More on Scroll</Button>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
