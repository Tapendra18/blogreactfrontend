import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Admin = () => {
  const [input, setInput] = useState({
    author: "",
    title: "",
    description: "",
    meta_title: "",
    meta_description: "",
  });
  const [category, setCategory] = useState({
    name: "",
    description: "",
    metatitle: "",
    meta_description: "",
    word: "",
  });

  const [tag, setTag] = useState({
    name: "",
    description: "",
    meta_description: "",
    keyword: "",
  });

  const handleTag = (e) => {
    setTag((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategory = (e) => {
    setCategory((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };
  const [value, setValue] = useState("1");
  const handleChang = (e, newValue) => {
    setValue(newValue);
  };

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
      await axios.post("http://localhost:8002/api/v1/post/add", formData);
      navigate("/");
    } catch (err) {
      console.log(err, "errr");
    }
  };

  const submitCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8002/api/v1/category/add", category);
    } catch (err) {
      console.log(err);
    }
  };

  const submitTag = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8002/api/v1/tag/add", tag);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="Tabs example" onChange={handleChang}>
              <Tab label="Tag " value="1" />
              <Tab label="Category" value="2" />
              <Tab label="Post" value="3" />
              <Tab />
              <Tab />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form onSubmit={submitTag}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group"></div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="name*"
                      onChange={handleTag}
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
                      onChange={handleTag}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="keyword"
                      id="keyword"
                      className="form-control"
                      placeholder="keyword"
                      onChange={handleTag}
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
                      onChange={handleTag}
                    />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="word"
                      id="word"
                      className="form-control"
                      placeholder="word"
                      onChange={handleCategory}
                    />
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <button type="submit" name="submit" className="btn-custom">
                    Send
                  </button>
                </div>
              </div>
            </form>
            <div className="col-lg-12">
              <Link className="btn-custom" to="/tagdelete">
                tag delete
              </Link>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <form onSubmit={submitCategory}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group"></div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="name*"
                      onChange={handleCategory}
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
                      onChange={handleCategory}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="metatitle"
                      id="metatitle"
                      className="form-control"
                      placeholder="metatitle"
                      onChange={handleCategory}
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
                      onChange={handleCategory}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="word"
                      id="word"
                      className="form-control"
                      placeholder="word"
                      onChange={handleCategory}
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
              <Link className="btn-custom" to="/categorydelete">
                category delete
              </Link>
            </div>
          </TabPanel>
          <TabPanel value="3">
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
              <Link className="btn-custom" to="/deletepost">
                delete Post
              </Link>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Admin;
