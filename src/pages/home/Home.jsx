import React, { useEffect } from 'react';
import "../home/Home.css";
import ImagesCarousel from "@components/bootstrap/ImagesCarousel";
import NavBar from "@pages/navbar/NavBar";
import { Link } from "react-router-dom";
import Footer from "@pages/footer/Footer";
import { useState } from "react";
import ReactPlayer from "react-player";
import Services from "@pages/services/Services";

const Index = ({ handleWatchVideo, clicked }) => {
  useEffect(() => {
    document.title = 'Home - DRAGONFLY BARBERSHOP';
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
            id='watchBtn'
            className="booking-button"
            type="click"
            onClick={handleWatchVideo}
            src="https://www.youtube.com/watch?v=Gg4wtsWgw5k"
          >
            {clicked ? "Close Video" : "Watch Video"}
          </button>
          {clicked ? (
            <div className="responsive-video">
              <ReactPlayer url="https://www.youtube.com/watch?v=Gg4wtsWgw5k" controls={true} playsinline={true} />
              <button type="button" className="btn-close mx-2" aria-label="Close" onClick={handleWatchVideo}></button>
            </div>
          ) :
            <div className="responsive-video">

            </div>
          }
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

export default function Home() {
  // handle watch video
  const [clicked, isClicked] = useState(false);

  const handleWatchVideo = () => isClicked(prevValue => !prevValue);

  const responsiveVideoDiv = document.querySelector('.responsive-video')
  const watchBtn = document.querySelector('#watchBtn')
  document.addEventListener('click', e => {
    if (clicked && e.target !== watchBtn) {
      if (e.target !== responsiveVideoDiv) {
        isClicked(false)
      }
    }
  })

  return (
    <div>
      <NavBar />
      <Index handleWatchVideo={handleWatchVideo} clicked={clicked} />
      <Services />
      <Footer />
    </div>
  );
}
