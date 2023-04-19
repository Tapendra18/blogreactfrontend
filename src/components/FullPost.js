import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FullPost = () => {
  const slug = useParams().slug;
  const [blog, setBlog] = useState([]);
  const [like, setLike] = useState();
  const [unlike, setUnlike] = useState();
  const [comment, setComment] = useState();
  const [getcomment, setgetComment] = useState([]);

  const getAllComment = async () => {
    await axios
      .get("http://localhost:8000/api/v1/comment/get")
      .then((response) => setgetComment(response.data.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/v1/comment/add", comment);
    if (DataTransfer.success) {
      alert("successs");
    }
  };

  const handleChange = (e) => {
    setComment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getPostDetails = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/v1/post/get/${slug}`)
        .then((response) => setBlog(response.data))
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    await axios
      .post("http://localhost:8000/api/v1/likeunlike/likeadd")
      .then((response) => setLike(response.data))
      .catch((err) => console.log(err));
  };

  const getlike = async () => {
    await axios
      .get("http://localhost:8000/api/v1/likeunlike/get")
      .then((response) => console.log(response));
  };

  const handleUnlike = async () => {
    await axios
      .post("http://localhost:8000/api/v1/likeunlike/unlikeadd")
      .then((response) => setUnlike(response.data))
      .catch((err) => console.log(err));
  };
  const image = "http://localhost:8000/";

  useEffect(() => {
    getPostDetails();
    getAllComment();
    getlike();
  }, []);
  return (
    <>
      <section className="post-single">
        <div className="container">
          <div className="row">
            <ThumbUpIcon
              onClick={handleLike}
              style={{ cursor: "pointer", height: "50px", width: "50px" }}
            />
            <h6>{like?.likes}</h6>
            <ThumbDownIcon
              style={{ cursor: "pointer", height: "50px", width: "50px" }}
              onClick={handleUnlike}
            />
            {/* {unlike?.likes} */}
            <div className="col-lg-9 m-auto">
              <div className="post-single-body">
                <div className="content">
                  <h5>{blog.title}</h5>
                  <p className="text-center">
                    <img
                      src={`${image}${blog.features}`}
                      alt=""
                      className="image-right"
                      style={{ height: "288px", width: "288px" }}
                    />
                  </p>
                  <p>{blog.description}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="author box bg-light">
                    <div className="image">
                      <a href="author.html" className="image">
                        <img src="assets/img/author/1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <span>Hi, I'm Emma Dalia</span>
                      </h5>
                      <a href="author.html" className="link">
                        View Articles
                      </a>
                      <p className="max-width-500">
                        Etiam vitae dapibus rhoncus. Eget etiam aenean nisi
                        montes felis pretium donec veni. Pede vidi condimentum
                        et aenean hendrerit. Quis sem justo nisi varius.
                      </p>
                      <div className="social-icones">
                        <ul className="list-inline">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-100">
                <h5 className="mb-30">Comments</h5>
                {getcomment?.map((data, index) => (
                  <ul className="comments">
                    <li className="comment-item">
                      <div className="content">
                        <ul className="info list-inline">
                          <li>{data.name}</li>
                        </ul>
                        <p>{data.description}</p>
                        <a href="/" className="link">
                          <i className="arrow_left"></i> Reply
                        </a>
                      </div>
                    </li>
                  </ul>
                ))}

                <h5 className="mb-30">Leave a Reply</h5>
                <form
                  onSubmit={handleSubmit}
                  className="form"
                  action="#"
                  method="POST"
                  id="main_contact_form"
                >
                  <p>
                    Your email adress will not be published ,Requied fileds are
                    marked*.
                  </p>
                  <div
                    className="alert alert-success contact_msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="description"
                          onChange={handleChange}
                          id="description"
                          cols="30"
                          rows="5"
                          className="form-control"
                          placeholder="description*"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name*"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email*"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          className="form-control"
                          placeholder="mobile"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-20">
                        <input name="name" type="checkbox" value="1" />
                        <label htmlFor="name">
                          <span>
                            save my name , email and website in this browser for
                            the next time I comment.
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        name="submit"
                        className="btn-custom"
                      >
                        Send Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullPost;
