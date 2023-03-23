export default function HairCuts ({ selectedOption , booking}) {
     console.log("data id", typeof booking)

    return (
      <div>
        <h3>Haircuts</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="1000" />
            Bespoke Cut <span>KES 1000</span>
            <br />
            <p className="time">1 Hr</p>
            <p>Personalized haircut. Hot towel treatment and styling.</p>
          </label>
          <label>
            <input type="radio" value="1200" />
            Gentleman's Cut <span>KES 1200</span>
            <br />
            <p className="time">1 Hr</p>
            <p>Classic gentleman's haircut. Hot towel treatment and styling.</p>
          </label>
          <label>
            <input type="radio" value="500" />
            Beard/Mustache Trim <span>KES 500</span>
            <br />
            <p className="time">30 Minutes</p>
            <p>Personal trim for facial hair.</p>
          </label>
          <label>
            <input type="radio" value="1200" />
            Ladies Fresh Cut <span>KES 1200</span>
            <br />
            <p className="time">1 Hr</p>
            <p>
              Personalized haircut for ladies. Hot towel treatment and styling.
            </p>
          </label>
          <label>
            <input type="radio" value="300" />
            Eye Brow Trim <span>KES 300</span>
            <br />
            <p className="time">1 Hr</p>
            <p>Personalized eye brows trim.</p>
          </label>
          <label>
            <input type="radio" value="500" />
            Young Man's Trim <span>KES 500</span>
            <br />
            <p className="time">30 Minutes</p>
            <p>Personalized haircut for kids under 12 yrs.</p>
          </label>
        </div>
      </div>
    );
  };
