import React from "react";
import "./navbar.css";

const Navbar = ({ toggleShowLogin, isLoggedIn }) => {
  return (
    <nav className="navbar navbar-light bg-light px-5 py-2 custom-navbar">
      <div className="navbar-brand">
        <img
          src="https://atghelp.wordpress.com/wp-content/uploads/2017/02/logo-in.png?w=774&h=178&crop=1"
          className="img-fluid"
          alt="Logo"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </div>

      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <span className="search_icon">
            <i className="fas fa-search"></i>
          </span>
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Search For Your Favourite groups in ATG"
          />
        </div>
      </div>

      {isLoggedIn ? (
        <div className="d-flex align-items-center gap-2">
          <img
            className="rounded-circle"
            src="https://dont-copy.netlify.app/assets/siddrath-t0piMZRc.jpg"
            width="48"
            height="48"
            alt="Profile"
          />
          <div>
            <div className="">Siddharth Goyal</div>
          </div>
          <span className="triangle"></span>
        </div>
      ) : (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <p className="mb-0 fw-bold">
            Create account.
            <span
              className="text-primary  ms-1 pe-auto"
              onClick={toggleShowLogin}
            >
              It's free!
            </span>
          </p>
          <span className="triangle"></span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
