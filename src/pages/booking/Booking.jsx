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
  const [prices, setPrices] = useState([])

  // fetch data from local json file
  useEffect(() => {
    axios
      .get("/db/db.json")      
      .then((res) => setBooking(res.data))
      .catch((err) => console.log(err));
  }, []);


  // handle, click event of selected option and retrieve the price 
  const handleOptionSelection = (event) => {
    setPrices((num) => [...num, event.target.value]);    
  };

  console.log("choices", prices)

  return (
    <section>
      <NavBar />
      <div className="container-alignment">
        <div>
          <Navigator />
        </div>
        <div>
          <HairCuts selectedOption={handleOptionSelection} booking = {booking} />
          <Facials selectedOption={handleOptionSelection} booking = {booking} />
          <ManicureAndPedicure
            selectedOption = {handleOptionSelection}
            booking = {booking}
          />
        </div>
        <div>
          <Cart prices = {prices}/>
        </div>
      </div>
    </section>
  );
}
