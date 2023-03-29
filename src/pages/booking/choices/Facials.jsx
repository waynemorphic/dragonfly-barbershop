
export default function Facials ({ selectedOption, booking }) {
  if (booking.length !== 0)
    return (
      <div id = "facials">
        <h3>Facials</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="500" name = {booking[6].name}/>
            {booking[6].name} <span>KES {booking[6].price}</span>
            <br />
            <p className="time">{booking[6].time}</p>
            <p>
              Quick cleanse, coffee & honey exfoliation ,hydrating enzyme masque,
              hot steamed towel finished with a moisturizer.
            </p>
          </label>
          <label>
            <input type="radio" value="900" name = {booking[7].name} />
            {booking[7].name} <span>KES {booking[7].price}</span>
            <br />
            <p className="time">{booking[7].time}</p>
            <p>
              Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme
              masque, hot steamed towel finished with a moisturizer.
            </p>
          </label>
          <label>
            <input type="radio" value="1000" name = {booking[8].name} />
            {booking[8].name} <span>KES {booking[8].price}</span>
            <br />
            <p className="time">{booking[8].time}</p>
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
