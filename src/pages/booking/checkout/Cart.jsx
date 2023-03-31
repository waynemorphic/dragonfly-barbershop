import "./Cart.css";
import UserDetails from "./user/UserDetails";
import { useState } from "react";

export default function Cart({ prices }) {
  // state for offcanvas component
  const [show, setShow] = useState(false);

  // handling offcanvas click events
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let totalCost = 0;

  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        <div className="cart">
          {prices.map((res) => (
            <p key={res.id}>
              {res.name} <span> {res.price}</span>
            </p>
          ))}
          {prices.forEach((element) => {
            totalCost += element.price;
          })}
          <p className="total">
            Total <span>KES {totalCost} /=</span>{" "}
          </p>
          <button onClick={handleShow} type="click">
            Check Out
          </button>
        </div>        
        <UserDetails show = {show} handleClose = {handleClose} />
      </div>
    );
  }
}
