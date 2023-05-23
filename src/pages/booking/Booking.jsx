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
  const [booking, setBooking] = useState([]);
  const [prices, setPrices] = useState([]);

  // fetch data from local json file
  useEffect(() => {
    axios
      .get("dist/db/db.json")
      .then((res) => setBooking(res.data))
      .catch((err) => console.log(err));
  }, []);

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
