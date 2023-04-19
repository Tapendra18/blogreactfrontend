import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bottom">
        <div className="container">
          <div className="instagram">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list">
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/1.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/2.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/3.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/4.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/5.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/6.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/7.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="image" href="#">
                      <img src="assets/img/instagram/8.jpg" alt="" />
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="newslettre">
            <div className="newslettre-width">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 m-auto">
                  <div className="newslettre-info">
                    <h3>Get the best blog stories into your inbox !</h3>
                    <p>
                      Sign up for free and be the first to get notified about
                      new posts.
                    </p>
                  </div>
                  <form action="#" className="newslettre-form">
                    <div className="form-flex">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email Adress"
                          required="required"
                        />
                      </div>
                      <button className="submit-btn" type="submit">
                        <i className="fas fa-paper-plane"></i>
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright">
                  <p>© 2020 Being - Personal Blog Html Template.</p>
                  <p>
                    Design by
                    <a href="#">AssiaGroupe</a>- All rights reserved.
                  </p>
                </div>
                <div className="back">
                  <a href="#" className="back-top">
                    <i className="far fa-angle-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-10 m-auto">
              <div className="search-width">
                <button type="button" className="close">
                  <i className="far fa-times"></i>
                </button>
                <form className="search-form" action="#">
                  <input
                    type="search"
                    value=""
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="search-btn">
                    <i className="far fa-search"></i>
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
