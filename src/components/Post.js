import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  console.log(post, "posttt");
  const image = "http://localhost:8000/";

  const getAllPost = async () => {
    try {
      await axios
        .get("http://localhost:8000/api/v1/post/get")
        .then((response) => setPost(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);
  // $(".owl-carousel").owlCarousel();
  return (
    <>
      <section className="mt-100 mb-70">
        <div className="container">
          <div className="row">
            {post.length > 0 &&
              post.map((data, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="post-round">
                    <div className="image">
                      <a href="/">
                        <img
                          src={`${image}${data.thumbnail}`}
                          alt={data.thumbnail}
                          style={{ height: "288px", width: "288px" }}
                        />
                      </a>
                    </div>
                    <div className="content">
                      <a className="categorie">
                        <i className="icon_circle-slelected"></i>
                        {data.meta_title}
                      </a>
                      <h5>
                        <Link to={`/detailpost/${data.slug}`}>
                          {data.title}
                        </Link>
                      </h5>

                      <div className="meta">
                        <ul className="list-inline">
                          <li>
                            <a href="author.html">{data.author}</a>
                          </li>
                          <li className="dot"></li>
                          {/* <li>{format(data.createdAt, "yyyy/mm/dd")}</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
