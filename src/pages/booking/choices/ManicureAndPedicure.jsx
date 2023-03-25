export default function ManicureAndPedicure ({ selectedOption, booking }) {
  if (booking.length !== 0)
    return (
      <div>
        <h3>Hands/Feet</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="800" />
            {booking[9].name} <span>KES {booking[9].price} </span>
            <br />
            <p className="time">{booking[9].price}</p>
            <p>
              Quick trimming and shaping of the nails, cuticle care, callus
              removal and hot towel wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="800" />
            {booking[10].name}  <span>KES {booking[10].price} </span>
            <br />
            <p className="time">{booking[10].time}</p>
            <p>
              Quick trimming and shaping of the nails, cuticle care, callus
              removal and hot towel wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="1000" />
            {booking[11].name}  <span>KES {booking[11].price} </span>
            <br />
            <p className="time">{booking[11].time} </p>
            <p>
              Trimming and shaping of the nails, cuticle care, callus removal and
              sea salt skin exfoliation. Hot water soak, massage and hot towel
              wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="1200" />
            {booking[12].name}<span>KES {booking[12].price} </span>
            <br />
            <p className="time">{booking[12].time}</p>
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
