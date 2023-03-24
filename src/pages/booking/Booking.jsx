import { useState, useEffect } from "react";
import "./Booking.css";
import NavBar from "../navbar/NavBar";
import HairCuts from "./choices/HairCuts";
import Facials from "./choices/Facials";
import ManicureAndPedicure from "./choices/ManicureAndPedicure";
import Cart from "./checkout/Cart";
import axios from "axios";

// navigating between choices
const Navigator = () => {
  return (
    <div className="navigation">
      <button>Haircuts</button>
      <button>Facials</button>
      <button>Hands/Feet</button>
    </div>
  );
};

export default function Booking() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true)

  // fetch data from local json file
  useEffect(() => {
    axios
      .get("/db/db.json")      
      .then((res) => setBooking(res.data))
      .then(setLoading(false))
      .catch((err) => console.log(err));
      console.log("fire me once")
  }, []);

  if (booking.length !== 0 && !loading) console.log("booking data", booking[0].price)

  // handle price of selected option
  const handleOptionSelection = (event) => {
    setBooking((num) => [...num, event.target.value]);
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
          <Cart />
        </div>
      </div>
    </section>
  );
}
