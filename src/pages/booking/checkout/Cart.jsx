import React from "react";

export default function Cart({ prices }) {
  let totalCost =0;
  totalCost += parseInt(prices.price);

  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        {console.log(prices)}
        <ul>
          <li>{prices.name}: {prices.price}</li>
  
        </ul>
        <p>Total: {totalCost}</p>

        <button type="submit">Check Out</button>
      </div>
    );
  }
}
