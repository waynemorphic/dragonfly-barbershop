import RadioButton from "./RadioButton";

export default function Facials ({ toggleBooking, bookings, prices }) {
  if (bookings.length !== 0)
    return (
      <div id = "facials">
        <h3>Facials</h3>
        <div className="selection">
          {bookings.map((b) => {
            const { desc, name, time, price } = b;
            const isInCart = prices.find(b => b.name === name)
            return (
              <RadioButton
                key={name}
                desc={desc}
                name={name}
                time={time}
                price={price}
                toggleBooking={toggleBooking}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      </div>
    );
  };
