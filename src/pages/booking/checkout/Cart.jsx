import "./Cart.css";

export default function Cart({ prices }) {
  let totalCost = 0;

  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        <div className="cart">
          {prices.map((res) => (
            <p key={res.id} >
              {res.name} <span> {res.price}</span>
            </p>
          ))}
          {prices.forEach((element) => {
            totalCost += element.price;
          })}
          <p className="total">
            Total <span>KES {totalCost} /=</span>{" "}
          </p>

          <button type="submit">Check Out</button>
        </div>
      </div>
    );
  }
}
