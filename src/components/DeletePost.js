import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DeletePost = () => {
  const [pdelete, setpDelete] = useState();
  console.log(pdelete, "deleteeee");

  const getPost = async () => {
    await axios
      .get("http://localhost:8000/api/v1/post/get")
      .then((response) => setpDelete(response.data.data));
  };

  // const handleDelete = async () => {
  //   await axios
  //     .delete(`http://localhost:8000/api/v1/post/delete/id`)
  //     .then((response) => console.log(response.id))
  //     .catch((err) => console.log(err));
  // };

  const deleteItem = (_id) => {
    axios
      .delete(`http://localhost:8000/api/v1/post/delete/${_id}`)
      .then((response) => {
        setpDelete(pdelete.filter((item) => item.id !== _id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <section className="mt-100 mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {pdelete?.map((data, index, _id) => (
                <div key={data.id} className="post-round">
                  <div className="content">
                    <DeleteForeverIcon
                      onClick={() => deleteItem(data._id)}
                      style={{ cursor: "pointer" }}
                    />

                    <a className="categorie">
                      <i className="icon_circle-slelected"></i>
                      {data.meta_title}
                    </a>
                    <a className="categorie">{data.title}</a>
                    <a className="categorie">{data.description}</a>
                    <a className="categorie">{data.meta_description}</a>

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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeletePost;
