import { useState, useEffect } from "react";
import "./Booking.css";
import NavBar from "../navbar/NavBar";
import HairCuts from "./choices/HairCuts";
import Facials from "./choices/Facials";
import ManicureAndPedicure from "./choices/ManicureAndPedicure";
import Cart from "./checkout/Cart";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";


const bookings = [
  {
    id: 1,
    name: "Bespoke Cut",
    time: "1 Hr",
    price: 1000,
    type: "Haircut",
    desc: "Personalized haircut. Hot towel treatment and styling."
  },
  {
    id: 2,
    name: "Gentleman's Cut",
    time: "1 Hr",
    price: 1200,
    type: "Haircut",
    desc: "Classic gentleman's haircut. Hot towel treatment and styling."
  },
  {
    id: 3,
    name: "Beard/Mustache Trim",
    time: "30 Minutes",
    price: 500,
    type: "Haircut",
    desc: "Personal trim for facial hair."
  },
  {
    id: 4,
    name: "Ladies Fresh Cut",
    time: "1 Hr",
    price: 1200,
    type: "Haircut",
    desc: "Personalized haircut for ladies. Hot towel treatment and styling."
  },
  {
    id: 5,
    name: "Eye Brow Trim",
    time: "1 Hr",
    price: 300,
    type: "Haircut",
    desc: "Personalized eye brows trim."
  },
  {
    id: 6,
    name: "Young Man's Trim",
    time: "30 Minutes",
    price: 500,
    type: "Haircut",
    desc: "Personalized haircut for kids under 12 yrs."
  },
  {
    id: 7,
    name: "Mini Facial",
    time: "15 Minutes",
    price: 500,
    type: "Facial",
    desc: " Quick cleanse, coffee & honey exfoliation ,hydrating enzyme masque, hot steamed towel finished with a moisturizer."
  },
  {
    id: 8,
    name: "Signature Facial",
    time: "30 Minutes",
    price: 900,
    type: "Facial",
    desc: "Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme masque, hot steamed towel finished with a moisturizer."
  },
  {
    id: 9,
    name: "Steam Facial",
    time: "45 Minutes",
    price: 1000,
    type: "Facial",
    desc: " Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme masque, steam infusion finished with a moisturizer and a neck & scalp massage."
  },
  {
    id: 10,
    name: "Signature Hand Treatment",
    time: "15 Minutes",
    price: 800,
    type: "HandsAndFeet",
    desc: "Quick trimming and shaping of the nails, cuticle care, callus removal and hot towel wrap."
  },
  {
    id: 11,
    name: "Signature Feet Treatment",
    time: "15 Minutes",
    price: 800,
    type: "HandsAndFeet",
    desc: "Quick trimming and shaping of the nails, cuticle care, callus removal and hot towel wrap."
  },
  {
    id: 12,
    name: "Reventon Hand Treatment",
    time: "30 Minutes",
    price: 1000,
    type: "HandsAndFeet",
    desc: "Trimming and shaping of the nails, cuticle care, callus removal and sea salt skin exfoliation. Hot water soak, massage and hot towel wrap."
  },
  {
    id: 13,
    name: "Reventon Feet Treatment",
    time: "45 Minutes",
    price: 1200,
    type: "HandsAndFeet",
    desc: "Trimming and shaping of the nails, cuticle care, callus removal and sea salt skin exfoliation. Hot water soak, massage and hot towel wrap."
  },
];


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

  // handle, click event of selected option and retrieve the price
  const toggleBooking = (name) => {
    const isAlreadyBooked = prices.find((b) => b.name === name);
    if (isAlreadyBooked) {
      setPrices((prev) => prev.filter((b) => b.id !== isAlreadyBooked.id));
      return;
    }

    const newBooking = bookings.find((b) => b.name === name);
    setPrices((prev) => [newBooking, ...prev]);
  };

  const removeBooking = (name) => {
    setPrices((prev) => prev.filter((b) => b.name !== name));
  }

  return (
    <section>
      <NavBar />
      <div className="container-alignment">
        <div>
          <Navigator />
        </div>
        <div>
          <HairCuts toggleBooking={toggleBooking} bookings={bookings.slice(0, 6)} prices={prices}/>
          <Facials toggleBooking={toggleBooking} bookings={bookings.slice(6, 9)} prices={prices}/>
          <ManicureAndPedicure
            toggleBooking={toggleBooking}
            bookings={bookings.slice(9)}
            prices={prices}
          />
        </div>
        <div>
          <Cart prices={prices} removeBooking={removeBooking}/>
        </div>
      </div>
    </section>
  );
}
