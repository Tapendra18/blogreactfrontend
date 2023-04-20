import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const TagDelete = () => {
  const [pdelete, setpDelete] = useState();
  const [tupdate, setUpdate] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const updateData = (e) => {
  //   setUdata((preState) => ({
  //     ...preState,
  //     [e.target.name]: e.target.value,
  //   }));
  //   setpDelete({
  //     keyword: e.target.value,
  //   });
  // };

  // const updateData = (e) => {
  //   const { name, value } = e.target;
  //   setUdata((prevState) => ({ ...prevState, [name]: value }));
  // };
  const getPost = async () => {
    await axios
      .get("http://localhost:8000/api/v1/tag/get")
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
      .delete(`http://localhost:8002/api/v1/tag/delete/${_id}`)
      .then((response) => {
        setpDelete(pdelete.filter((item) => item.id !== _id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateItem = async (_id) => {
    await axios
      .patch(`http://localhost:8002/api/v1/tag/update/${_id}`)
      .then((response) => {
        setUpdate(tupdate.filter((item) => item.id !== _id));
      })
      .catch((err) => {
        console.log(err);
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
                    <EditIcon style={{ cursor: "pointer" }} />
                    <Button onClick={handleOpen}>Edit data</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      <Box sx={{ ...style, width: 500 }}>
                        <TextField
                          sx={{ width: "400px" }}
                          id="child-modal-title"
                          name="keyword"
                          value={data.keyword}
                          // onChange={updateData}
                        ></TextField>

                        <TextField
                          sx={{ width: "400px" }}
                          id="child-modal-description"
                          value={data.description}
                        ></TextField>
                        <TextField
                          sx={{ width: "400px" }}
                          id="child-modal-description"
                          value={data.name}
                        ></TextField>
                        <TextField
                          sx={{ width: "400px" }}
                          id="child-modal-description"
                          value={data.word}
                        ></TextField>
                        <Button
                          type="submit"
                          name="submit"
                          variant="text"
                          onClick={() => updateItem(data._id)}
                        >
                          update
                        </Button>
                      </Box>
                    </Modal>
                    <a className="categorie">{data.keyword}</a>
                    <a className="categorie">{data.title}</a>
                    <a className="categorie">{data.description}</a>
                    <a className="categorie">{data.name}</a>

                    <div className="meta">
                      <ul className="list-inline">
                        <li>
                          <a href="/">{data.word}</a>
                        </li>
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

export default TagDelete;
