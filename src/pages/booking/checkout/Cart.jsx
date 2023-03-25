export default function Cart({ prices }) {
  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        <ul>
          {/* {prices.forEach((val) => {
              return (
                <li key={prices.indexOf(val)}>
                  `{console.log("values", val)}`
                </li>
              );
            })} */}

            {/* This is terrible syntax */}
          <li key = {prices.indexOf(...prices)}>{...prices}</li>
        </ul>
        <button type="submit">Check Out</button>
      </div>
    );
  }
}
