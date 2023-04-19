import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

                {/* <ul className="dropdown-menu fade-up">
                  <li>
                    <a className="dropdown-item" href="blog-list.html">
                      Blog list
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-list-2.html">
                      Blog list 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-grid.html">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-grid-2.html">
                      Blog Grid 2
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Posts Features
                </a>
                <ul className="dropdown-menu fade-up">
                  <li>
                    <a className="dropdown-item" href="post-default.html">
                      Post Default
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="post-right-sidebar.html">
                      Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="post-left-sidebar.html">
                      Left Sidebar
                    </a>
                  </li>
                </ul>
              </li> */}

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
      <Carousel>
        <section class="hero hero-1 hero-carousel d-flex align-items-center">
          <div class="container">
            <div class="owl-carousel">
              <div class="row">
                <div class="inner d-flex align-items-center">
                  <div class="post">
                    <a href="blog-grid.html" class="categorie">
                      <i class="icon_circle-slelected"></i>Fashion
                    </a>
                    <h2>
                      <a href="post-default.html">
                        The biggest Spring/Summer 2021 trends for men
                      </a>
                    </h2>
                    <div class="info">
                      <ul class="list-inline">
                        <li>
                          <a href="author.html">Emma Dalia</a>
                        </li>
                        <li class="dot"></li>
                        <li>2 Months Ago</li>
                      </ul>
                    </div>
                  </div>

                  <div class="image m-auto">
                    <a href="post-default.html">
                      <img src="assets/img/blog/27.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="inner d-flex align-items-center">
                  <div class="post">
                    <a href="blog-grid.html" class="categorie">
                      <i class="icon_circle-slelected"></i>Food
                    </a>
                    <h2>
                      <a href="post-default.html">
                        The Easiest loaf of Bread you'll ever bake
                      </a>
                    </h2>
                    <div class="info">
                      <ul class="list-inline">
                        <li>
                          <a href="author.html">Emma Dalia</a>
                        </li>
                        <li class="dot"></li>
                        <li>2 Months Ago</li>
                      </ul>
                    </div>
                  </div>
                  <div class="image m-auto">
                    <a href="post-default.html">
                      <img src="assets/img/blog/4.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="inner d-flex align-items-center">
                  <div class="post">
                    <a href="blog-grid.html" class="categorie">
                      <i class="icon_circle-slelected"></i>Plants
                    </a>
                    <h2>
                      <a href="post-default.html">
                        How to Bring your Plants Indoors for the fall and winter
                      </a>
                    </h2>
                    <div class="info">
                      <ul class="list-inline">
                        <li>
                          <a href="author.html">Emma Dalia</a>
                        </li>
                        <li class="dot"></li>
                        <li>2 Months Ago</li>
                      </ul>
                    </div>
                  </div>
                  <div class="image m-auto">
                    <a href="post-default.html">
                      <img src="assets/img/blog/32.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
};

export default Header;
