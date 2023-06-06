import { useState, useEffect } from "react";
import "./Booking.css";
import NavBar from "../navbar/NavBar";
import HairCuts from "./choices/HairCuts";
import Facials from "./choices/Facials";
import ManicureAndPedicure from "./choices/ManicureAndPedicure";
import Cart from "./checkout/Cart";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

// navigating between choices
const Navigator = () => {
  return (
    <div className="navigation">
      <Link to="#haircuts" smooth>
        <button>Haircuts</button>
      </Link>
      <Link to="#facials" smooth>
        <button href="#facials">Facials</button>
      </Link>
      <Link to="#manipedi" smooth>
        <button>Hands/Feet</button>
      </Link>
    </div>
  );
};

export default function Booking() {
  const [prices, setPrices] = useState([]);
  const booking = [
    {
      "id": 1,
      "name": "Bespoke Cut",
      "time": "1 Hr",
      "price": 1000,
      "type": "Haircut"
    },
    {
      "id": 2,
      "name": "Gentleman's Cut",
      "time": "1 Hr",
      "price": 1200,
      "type": "Haircut"
    },
    {
      "id": 3,
      "name": "Beard/Mustache Trim",
      "time": "30 Minutes",
      "price": 500,
      "type": "Haircut"
    },
    {
      "id": 4,
      "name": "Ladies Fresh Cut",
      "time": "1 Hr",
      "price": 1200,
      "type": "Haircut"
    },
    {
      "id": 5,
      "name": "Eye Brow Trim",
      "time": "1 Hr",
      "price": 300,
      "type": "Haircut"
    },
    {
      "id": 6,
      "name": "Young Man's Trim",
      "time": "30 Minutes",
      "price": 500,
      "type": "Haircut"
    },
    {
      "id": 7,
      "name": "Mini Facial",
      "time": "15 Minutes",
      "price": 500,
      "type": "Facial"
    },
    {
      "id": 8,
      "name": "Signature Facial",
      "time": "30 Minutes",
      "price": 900,
      "type": "Facial"
    },
    {
      "id": 9,
      "name": "Steam Facial",
      "time": "45 Minutes",
      "price": 1000,
      "type": "Facial"
    },
    {
      "id": 10,
      "name": "Signature Hand Treatment",
      "time": "15 Minutes",
      "price": 800,
      "type": "HandsAndFeet"
    },
    {
      "id": 11,
      "name": "Signature Feet Treatment",
      "time": "15 Minutes",
      "price": 800,
      "type": "HandsAndFeet"
    },
    {
      "id": 12,
      "name": "Reventon Hand Treatment",
      "time": "30 Minutes",
      "price": 1000,
      "type": "HandsAndFeet"
    },
    {
      "id": 13,
      "name": "Reventon Feet Treatment",
      "time": "45 Minutes",
      "price": 1200,
      "type": "HandsAndFeet"
    }
  ]

  // handle, click event of selected option and retrieve the price
  const handleOptionSelection = (event) => {
    booking.forEach((singleValue) => {
      if (event.target.name === singleValue.name) {
        setPrices(prices.concat(singleValue));
      }
    });
  };

  return (
    <section>
      <NavBar />
      <div className="container-alignment">
        <div>
          <Navigator />
        </div>
        <div>
          <HairCuts selectedOption={handleOptionSelection} booking={booking} />
          <Facials selectedOption={handleOptionSelection} booking={booking} />
          <ManicureAndPedicure
            selectedOption={handleOptionSelection}
            booking={booking}
          />
        </div>
        <div>
          <Cart prices={prices} />
        </div>
      </div>
    </section>
  );
}
