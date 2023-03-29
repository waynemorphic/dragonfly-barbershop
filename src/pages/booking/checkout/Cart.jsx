import React from "react";

export default function Cart({ prices }) {
  let totalCost = 0;

  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        <ul>
          {prices.map((res) => (
            <li key={res.id}>
              {res.name}: {res.price}
            </li>
          ))}
        </ul>
        {prices.forEach((element) => {
          totalCost += element.price;
        })}
        <p>Total: {totalCost}</p>

        <button type="submit">Check Out</button>
      </div>
    );
  }
}
