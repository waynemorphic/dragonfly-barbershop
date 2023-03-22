import { useState } from "react";
import "./Booking.css";
import NavBar from "../navbar/NavBar";

const Cart = () => {
  return (
    <div>
      <h3>Cart</h3>
    </div>
  );
};

const Navigator = () => {
  return (
    <div className="navigation">
      <button>Haircuts</button>
      <button>Facials</button>
      <button>Hands/Feet</button>
    </div>
  );
};
const ManicureAndPedicure = ({ selectedOption }) => {
  return (
    <div>
      <h3>Hands/Feet</h3>
      <div className="selection" onChange={selectedOption}>
        <label>
          <input type="radio" value="800" />
          Signature Hand Treatment <span>KES 800</span>
          <br />
          <p className="time">15 Minutes</p>
          <p>
            Quick trimming and shaping of the nails, cuticle care, callus
            removal and hot towel wrap.
          </p>
        </label>
        <label>
          <input type="radio" value="800" />
          Signature Feet Treatment <span>KES 800</span>
          <br />
          <p className="time">15 Minutes</p>
          <p>
            Quick trimming and shaping of the nails, cuticle care, callus
            removal and hot towel wrap.
          </p>
        </label>
        <label>
          <input type="radio" value="1000" />
          Reventon Hand Treatment <span>KES 1000</span>
          <br />
          <p className="time">30 Minutes</p>
          <p>
            Trimming and shaping of the nails, cuticle care, callus removal and
            sea salt skin exfoliation. Hot water soak, massage and hot towel
            wrap.
          </p>
        </label>
        <label>
          <input type="radio" value="1200" />
          Reventon Feet Treatment <span>KES 1200</span>
          <br />
          <p className="time">45 Minutes</p>
          <p>
            Trimming and shaping of the nails, cuticle care, callus removal and
            sea salt skin exfoliation. Hot water soak, massage and hot towel
            wrap.
          </p>
        </label>
      </div>
    </div>
  );
};

const Facials = ({ selectedOption }) => {
  return (
    <div>
      <h3>Facials</h3>
      <div className="selection" onChange={selectedOption}>
        <label>
          <input type="radio" value="500" />
          Mini Facial <span>KES 500</span>
          <br />
          <p className="time">15 Minutes</p>
          <p>
            Quick cleanse, coffee & honey exfoliation ,hydrating enzyme masque,
            hot steamed towel finished with a moisturizer.
          </p>
        </label>
        <label>
          <input type="radio" value="900" />
          Signature Facial <span>KES 900</span>
          <br />
          <p className="time">30 Minutes</p>
          <p>
            Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme
            masque, hot steamed towel finished with a moisturizer.
          </p>
        </label>
        <label>
          <input type="radio" value="1000" />
          Steam Facial <span>KES 1000</span>
          <br />
          <p className="time">45 Minutes</p>
          <p>
            Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme
            masque, steam infusion finished with a moisturizer and a neck &
            scalp massage.
          </p>
        </label>
      </div>
    </div>
  );
};

const HairCuts = ({ selectedOption, price }) => {
  return (
    <div>
      <h3>Haircuts</h3>
      <div className="selection" onChange={selectedOption}>
        <label>
          <input type="radio" value="1000" />
          Bespoke Cut <span>KES 1000</span>
          <br />
          <p className="time">1 Hr</p>
          <p>Personalized haircut. Hot towel treatment and styling.</p>
        </label>
        <label>
          <input type="radio" value="1200" />
          Gentleman's Cut <span>KES 1200</span>
          <br />
          <p className="time">1 Hr</p>
          <p>Classic gentleman's haircut. Hot towel treatment and styling.</p>
        </label>
        <label>
          <input type="radio" value="500" />
          Beard/Mustache Trim <span>KES 500</span>
          <br />
          <p className="time">30 Minutes</p>
          <p>Personal trim for facial hair.</p>
        </label>
        <label>
          <input type="radio" value="1200" />
          Ladies Fresh Cut <span>KES 1200</span>
          <br />
          <p className="time">1 Hr</p>
          <p>
            Personalized haircut for ladies. Hot towel treatment and styling.
          </p>
        </label>
        <label>
          <input type="radio" value="300" />
          Eye Brow Trim <span>KES 300</span>
          <br />
          <p className="time">1 Hr</p>
          <p>Personalized eye brows trim.</p>
        </label>
        <label>
          <input type="radio" value="500" />
          Young Man's Trim <span>KES 500</span>
          <br />
          <p className="time">30 Minutes</p>
          <p>Personalized haircut for kids under 12 yrs.</p>
        </label>
      </div>
    </div>
  );
};

export default function Booking() {
  const [price, setPrice] = useState([]);

  // handle price of selected option
  const handleOptionSelection = (event) => {
    setPrice((num) => [...num, event.target.value]);
  };

  console.log("prices", price);
  return (
    <section>
      <NavBar />
      <div className="container-alignment">
        <div>
          <Navigator />
        </div>
        <div>
          <HairCuts selectedOption={handleOptionSelection} />
          <Facials selectedOption={handleOptionSelection} />
          <ManicureAndPedicure selectedOption={handleOptionSelection} />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </section>
  );
}
