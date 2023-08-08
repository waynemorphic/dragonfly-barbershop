import { useEffect, useState } from "react";
import "./../Booking.css";

const RadioButton = ({ name, price, time, desc, toggleBooking, isInCart }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(Boolean(isInCart))
  }, [isInCart])

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    toggleBooking(name);
  };

  return (
    <label htmlFor={name}>
      <div className="radio-btn-box">
        <input
          className="radio-input"
          id={name}
          type="checkbox"
          checked={isChecked}
          name={name}
          onChange={handleChange}
        />

        <span className="radio-btn"></span>
        <div className="name">
          {name}
        </div>
      </div>
      <br />
      <p className="time">{time}</p>
      <p className="desc">{desc}</p>
      <p className="price">KES {price}/=</p>
    </label>
  );
};

export default RadioButton;
