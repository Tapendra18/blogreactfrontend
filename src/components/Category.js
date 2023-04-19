import React from "react";

const Category = () => {
  return (
    <>
      <div className="categorie-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="cat-list">
                <li>
                  <a className="item" href="blog-list.html">
                    <div className="image">
                      <img src="assets/img/cat/1.jpg" alt="" />
                    </div>
                    <p>Plants</p>
                  </a>
                </li>
                <li>
                  <a className="item" href="blog-grid.html">
                    <div className="image">
                      <img src="assets/img/cat/2.jpg" alt="" />
                    </div>
                    <p>Livestyle</p>
                  </a>
                </li>
                <li>
                  <a className="item" href="blog-list.html">
                    <div className="image">
                      <img src="assets/img/cat/3.jpg" alt="" />
                    </div>
                    <p>Food</p>
                  </a>
                </li>
                <li>
                  <a className="item" href="blog-list-2.html">
                    <div className="image">
                      <img src="assets/img/cat/4.jpg" alt="" />
                    </div>
                    <p>Interior</p>
                  </a>
                </li>

                <li>
                  <a className="item" href="blog-grid.html">
                    <div className="image">
                      <img src="assets/img/cat/5.jpg" alt="" />
                    </div>
                    <p>Fashion</p>
                  </a>
                </li>

                <li>
                  <a className="item" href="blog-grid-2.html">
                    <div className="image">
                      <img src="assets/img/cat/6.jpg" alt="" />
                    </div>
                    <p>Peaple</p>
                  </a>
                </li>

                <li>
                  <a className="item" href="blog-list-2.html">
                    <div className="image">
                      <img src="assets/img/cat/7.jpg" alt="" />
                    </div>
                    <p>Travel</p>
                  </a>
                </li>

                <li>
                  <a className="item" href="blog-grid-2.html">
                    <div className="image">
                      <img src="assets/img/cat/8.jpg" alt="" />
                    </div>
                    <p>Art & Design</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
