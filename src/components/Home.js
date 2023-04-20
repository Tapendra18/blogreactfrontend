import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [post, setPost] = useState();
  console.log(post, "imageee");
  const image = "http://localhost:8002/";

  const getAllPost = async () => {
    try {
      await axios
        .get("http://localhost:8002/api/v1/post/get")
        .then((response) => setPost(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  var settings = {
    infinite: true,
    adaptiveHeight: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    speed: 1000,
    fade: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    rows: 1,
    swipeToSlide: true,
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <>
      <Slider {...settings}>
        <div className="content">
          {post?.map((item, index) => (
            <div style={{ marginTop: "100px" }} key={index}>
              <img
                style={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "270px",
                  margin: "auto",
                }}
                src={`${image}${item.thumbnail}`}
                alt={item.title}
              />
              <p className="list-inline">{item.title}</p>
            </div>
          ))}
        </div>
      </Slider>
    </>
  );
};

export default Home;
