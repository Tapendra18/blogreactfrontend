import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Admin = () => {
  const [input, setInput] = useState({
    author: "",
    title: "",
    description: "",
    meta_title: "",
    meta_description: "",
  });

  const [file, setFile] = useState();
  const [file2, setFile2] = useState();
  let navigate = useNavigate();

  const handleChange = (e) => {
    setInput((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    console.log(file, "file");
    setFile(e.target.files[0]);
  };

  const handleImage2 = (e) => {
    console.log(file2, "fileee");
    setFile2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thumbnail", file);
    formData.append("features", file2);
    formData.append("author", input.author);
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("meta_description", input.meta_description);
    formData.append("meta_title", input.meta_title);

    try {
      await axios.post("http://localhost:8000/api/v1/post/add", formData);
      navigate("/");
    } catch (err) {
      console.log(err, "errr");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group"></div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="author"
                id="author"
                className="form-control"
                placeholder="author*"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="title*"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                placeholder="description"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="meta_title"
                id="meta_title"
                className="form-control"
                placeholder="meta_title"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                className="form-control"
                placeholder="thumbnail"
                onChange={handleImage}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="file"
                name="features"
                id="features"
                className="form-control"
                placeholder="features"
                onChange={handleImage2}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                name="meta_description"
                id="meta_description"
                className="form-control"
                placeholder="meta_description"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <button type="submit" name="submit" className="btn-custom">
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="col-lg-12">
        {/* <button type="button" className="btn-custom">
          <link to="/deletepost"></link>
          Delete Post
        </button> */}
        <Link className="btn-custom" to="/deletepost">
          delete Post
        </Link>
      </div>
    </div>
  );
};

export default Admin;
