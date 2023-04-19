import React from "react";

const DetailPost = () => {
  return (
    <>
      <section className="post-full bg-light">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="content">
                <a href="blog-grid.html" className="categorie">
                  <i className="icon_circle-slelected"></i>Art & Design
                </a>
                <h3>
                  <a href="post-default.html">
                    Great design is a multi-layered relationship between human
                    life and its environment
                  </a>
                </h3>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus unde officia dolor, sapiente ipsa molestiae
                  voluptatem deserunt nisi. Facilis consequuntur suscipit
                  maiores magni repudiandae .
                </p>

                <div className="info">
                  <ul className="list-inline">
                    <li>
                      <a href="author.html">
                        <img src="assets/img/author/1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="author.html">Emma Dalia</a>
                    </li>
                    <li className="dot"></li>
                    <li>2 Months Ago</li>
                    <li className="dot"></li>
                    <li>5 min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="image">
                <img src="assets/img/blog/26.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPost;
