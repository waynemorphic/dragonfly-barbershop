import React, { useEffect } from "react";
import "../home/Home.css";
import ImagesCarousel from "@components/bootstrap/ImagesCarousel";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Index = ({ handleWatchVideo, clicked }) => {
  useEffect(() => {
    document.title = "Home - DRAGONFLY BARBERSHOP";
  }, []);

  return (
    <div className="home">
      <div className="home-page">
        <h3 className="home-page__heading">
          The Best Barber Shop <span>for you</span>
        </h3>
        <p className="objective">
          Haircut Services For Men and Women. We will pamper your Hair, Scalp,
          Face and Body with the Best Services within Luxurious Facilities.
        </p>
        <div className="buttons">
          <Link to="/booking">
            <button className="booking-button" type="submit">
              Book Now
            </button>
          </Link>
          <button
            id="watchBtn"
            className="booking-button"
            type="click"
            onClick={handleWatchVideo}
            src="https://www.youtube.com/watch?v=Gg4wtsWgw5k"
          >
            {clicked ? "Close Video" : "Watch Video"}
          </button>
          {clicked ? (
            <div className="responsive-video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=Gg4wtsWgw5k"
                controls={true}
                playsinline={true}
              />
              <div className="closeBtnHolder">
                <Button
                  type="danger"
                  className="closeBtn"
                  aria-label="Close"
                  icon={<PoweroffOutlined onClick={handleWatchVideo} />}
                ></Button>
              </div>
            </div>
          ) : (
            <div className="responsive-video"></div>
          )}
        </div>

        <div className="details">
          <h4>
            <span>+20 </span> <br /> Years of Experience
          </h4>
          <h4 className="lines">
            <span>+15</span> <br /> Beauty Experts
          </h4>
          <h4 className="lines">
            <span>+20K</span> <br /> Happy Customers
          </h4>
        </div>
      </div>
      <ImagesCarousel />
    </div>
  );
};

export default Index;
