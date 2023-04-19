import React from "react";

const Home = () => {
  return (
    <div>
      <section className="hero hero-1 hero-carousel d-flex align-items-center">
        <div className="container">
          <div className="owl-carousel">
            <div className="row">
              <div className="inner d-flex align-items-center">
                <div className="post">
                  <a href="blog-grid.html" className="categorie">
                    <i className="icon_circle-slelected"></i>Fashion
                  </a>
                  <h2>
                    <a href="post-default.html">
                      The biggest Spring/Summer 2021 trends for men
                    </a>
                  </h2>
                  <div className="info">
                    <ul className="list-inline">
                      <li>
                        <a href="author.html">Emma Dalia</a>
                      </li>
                      <li className="dot"></li>
                      <li>2 Months Ago</li>
                    </ul>
                  </div>
                </div>

                <div className="image m-auto">
                  <a href="post-default.html">
                    <img src="assets/img/blog/27.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="inner d-flex align-items-center">
                <div className="post">
                  <a href="blog-grid.html" className="categorie">
                    <i className="icon_circle-slelected"></i>Food
                  </a>
                  <h2>
                    <a href="post-default.html">
                      The Easiest loaf of Bread you'll ever bake
                    </a>
                  </h2>
                  <div className="info">
                    <ul className="list-inline">
                      <li>
                        <a href="author.html">Emma Dalia</a>
                      </li>
                      <li className="dot"></li>
                      <li>2 Months Ago</li>
                    </ul>
                  </div>
                </div>
                <div className="image m-auto">
                  <a href="post-default.html">
                    <img src="assets/img/blog/4.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="inner d-flex align-items-center">
                <div className="post">
                  <a href="blog-grid.html" className="categorie">
                    <i className="icon_circle-slelected"></i>Plants
                  </a>
                  <h2>
                    <a href="post-default.html">
                      How to Bring your Plants Indoors for the fall and winter
                    </a>
                  </h2>
                  <div className="info">
                    <ul className="list-inline">
                      <li>
                        <a href="author.html">Emma Dalia</a>
                      </li>
                      <li className="dot"></li>
                      <li>2 Months Ago</li>
                    </ul>
                  </div>
                </div>
                <div className="image m-auto">
                  <a href="post-default.html">
                    <img src="assets/img/blog/32.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
