export default function HairCuts({ selectedOption, booking }) {
  if (booking.length !== 0)
    return (
      <div id="#haircuts">
        <h3>Haircuts</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="1000" name={booking[0].name} />
            {booking[0].name} <span>KES {booking[0].price}</span>
            <br />
            <p className="time">{booking[0].time}</p>
            <p>Personalized haircut. Hot towel treatment and styling.</p>
          </label>
          <label>
            <input type="radio" value="1200" name={booking[1].name} />
            {booking[1].name} <span>KES {booking[1].price} </span>
            <br />
            <p className="time">{booking[1].time} </p>
            <p>Classic gentleman's haircut. Hot towel treatment and styling.</p>
          </label>
          <label>
            <input type="radio" value="500" name={booking[2].name} />
            {booking[2].name} <span>KES {booking[2].price} </span>
            <br />
            <p className="time">{booking[2].time}</p>
            <p>Personal trim for facial hair.</p>
          </label>
          <label>
            <input type="radio" value="1200" name={booking[3].name} />
            {booking[3].name} <span>KES {booking[3].price}</span>
            <br />
            <p className="time">{booking[3].time} </p>
            <p>
              Personalized haircut for ladies. Hot towel treatment and styling.
            </p>
          </label>
          <label>
            <input type="radio" value="300" name={booking[4].name} />
            {booking[4].name} <span>KES {booking[4].price} </span>
            <br />
            <p className="time">{booking[4].time}</p>
            <p>Personalized eye brows trim.</p>
          </label>
          <label>
            <input type="radio" value="500" name={booking[5].name} />
            {booking[5].name} <span>KES {booking[5].price} </span>
            <br />
            <p className="time">{booking[5].time} </p>
            <p>Personalized haircut for kids under 12 yrs.</p>
          </label>
        </div>
      </div>
    );
}
