import { useNavigate } from 'react-router-dom';

import facial from "../../assets/facial.png";
import haircut from "../../assets/haircut.png";
import pedicure from "../../assets/pedicure.png";


import "./Services.css";

export default function Services() {

  const navigate = useNavigate()

  return (
    <div className="services">
      {/* <span className="leading-text">Our Services</span> */}
      <h2>Our Barber <span>Services</span></h2>
      <div className="service-card-container">
        <div className="service-card"
          onClick={() => navigate("/booking#haircuts")}>
          <figure>
            <img
              src={haircut}
              alt="Haircuts" />
          </figure>
          <h3>Haircuts</h3>
          <p>
            Full style and cut to suit your face shape, proffessionally styled
          </p>
        </div>
        <div className="service-card"
        onClick={() => navigate("/booking#facials")}>
          <figure>
            <img
              src={facial}
              alt="Facial Skincare" />
          </figure>
          <h3>Facial Skincare</h3>
          <p>
            Full style and cut to suit your face shape, proffessionally styled
          </p>
        </div>
        <div className="service-card"
         onClick={() => navigate("/booking#manipedi")}>
          <figure>
            <img
              src={pedicure}
              alt="Manicure & Pedicure" />
          </figure>
          <h3>Manicure & Pedicure</h3>
          <p>
            Full style and cut to suit your face shape, proffessionally styled
          </p>
        </div>
      </div>
    </div>
  );
}
