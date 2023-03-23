export default function ManicureAndPedicure ({ selectedOption }) {
    return (
      <div>
        <h3>Hands/Feet</h3>
        <div className="selection" onChange={selectedOption}>
          <label>
            <input type="radio" value="800" />
            Signature Hand Treatment <span>KES 800</span>
            <br />
            <p className="time">15 Minutes</p>
            <p>
              Quick trimming and shaping of the nails, cuticle care, callus
              removal and hot towel wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="800" />
            Signature Feet Treatment <span>KES 800</span>
            <br />
            <p className="time">15 Minutes</p>
            <p>
              Quick trimming and shaping of the nails, cuticle care, callus
              removal and hot towel wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="1000" />
            Reventon Hand Treatment <span>KES 1000</span>
            <br />
            <p className="time">30 Minutes</p>
            <p>
              Trimming and shaping of the nails, cuticle care, callus removal and
              sea salt skin exfoliation. Hot water soak, massage and hot towel
              wrap.
            </p>
          </label>
          <label>
            <input type="radio" value="1200" />
            Reventon Feet Treatment <span>KES 1200</span>
            <br />
            <p className="time">45 Minutes</p>
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
