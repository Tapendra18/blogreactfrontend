import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img
                src="assets/img/logo-dark.png"
                alt=""
                className="logo-dark"
              />
              <img
                src="assets/img/logo-white.png"
                alt=""
                className="logo-white"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/admin">
                  admin
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/blog">
                 blog
                </a> */}
                <Link className="nav-link dropdown-toggle" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <ul className="dropdown-menu fade-up"></ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-right ml-auto">
            <div className="social-icones">
              <ul className="list-inline">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <span className="slider">
                  <i className="far fa-sun icon-light"></i>
                  <i className="far fa-moon icon-dark"></i>
                </span>
              </label>
            </div>

            <div className="search-icon">
              <i className="far fa-search"></i>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
