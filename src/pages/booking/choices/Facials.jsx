
export default function Facials ({ selectedOption }) {
    return (
      <div>
        <h3>Facials</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="500" />
            Mini Facial <span>KES 500</span>
            <br />
            <p className="time">15 Minutes</p>
            <p>
              Quick cleanse, coffee & honey exfoliation ,hydrating enzyme masque,
              hot steamed towel finished with a moisturizer.
            </p>
          </label>
          <label>
            <input type="radio" value="900" />
            Signature Facial <span>KES 900</span>
            <br />
            <p className="time">30 Minutes</p>
            <p>
              Vitamin C cleanse, coffee & honey exfoliation ,hydrating enzyme
              masque, hot steamed towel finished with a moisturizer.
            </p>
          </label>
          <label>
            <input type="radio" value="1000" />
            Steam Facial <span>KES 1000</span>
            <br />
            <p className="time">45 Minutes</p>
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
