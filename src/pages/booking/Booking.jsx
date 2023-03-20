import './Booking.css'

const Cart = () => {
  return(
    <div>
      <h3>Cart</h3>
    </div>
  )
}

const Navigator = () => {
  return(
    <div className='navigation'>
      <button>Haircuts</button>
      <button>Facials</button>
      <button>Hands & Feet</button>
    </div>
  )
}
const ManicureAndPedicure = () => {
  return(
    <div>
      <h3>Hands & Feet</h3>
      <form className="selection">
        <label>
          <input type="radio" value = "optional" />
          Signature Hand Treatment
        </label>
        <label>
          <input type="radio" value = "optional" />
          Signature Feet Treatment
        </label>
        <label>
          <input type="radio" value = "optional" />
          Reventon Hand Treatment
        </label>
        <label>
          <input type="radio" value = "optional" />
          Reventon Feet Treatment
        </label>
      </form>
    </div>
  )
}

const Facials = () => {
  return(
    <div>
      <h3>Facials</h3>
      <form className="selection">
        <label>
          <input type="radio" value = "optional" />
          Mini Facial
        </label>
        <label>
          <input type="radio" value = "optional" />
          Signature Facial
        </label>
        <label>
          <input type="radio" value = "optional" />
          Steam Facial
        </label>
      </form>
    </div>
  )
}

const HairCuts = () => {
  return(
    <div>
      <h3>Haircuts</h3>
      <form className="selection">
        <label>
          <input type = "radio" value = "optional" />
          Bespoke Cut <span>KES 1000</span><br />
          <p>1 Hr</p>
          <p>Personalized haircut. Hot towel treatment and styling.</p>
        </label>
        <label>
          <input type = "radio" value = "optional" />
          Gentleman's Cut <span>KES 1200</span><br />
          <p>1 Hr</p>
          <p>Classic gentleman's haircut. Hot towel treatment and styling.</p>
        </label>
        <label>
          <input type = "radio" value = "optional" />
          Beard/Mustache Trim <span>KES 500</span><br />
          <p>30 Minutes</p>
          <p>Personal trim for facial hair.</p>
        </label>
        <label>
          <input type = "radio" value = "optional" />
          Ladies Fresh Cut <span>KES 1200</span><br />
          <p>1 Hr</p>
          <p>Personalized haircut for ladies. Hot towel treatment and styling.</p>
        </label>
        <label>
          <input type = "radio" value = "optional" />
          Eye Brow Trim <span>KES 300</span><br />
          <p>1 Hr</p>
          <p>Personalized eye brows trim.</p>
        </label>
        <label>
          <input type = "radio" value = "optional" />
          Young Man's Trim <span>KES 500</span><br />
          <p>30 Minutes</p>
          <p>Personalized haircut for kids under 12 yrs.</p>
        </label>
      </form>
    </div>
  )
}

export default function Booking() {
  return (
    <div className='container-alignment'>
      <div>
        <Navigator />
      </div>
      <div>
        <HairCuts />
        <Facials />
        <ManicureAndPedicure />
      </div>
      <div>
        <Cart />
      </div>
      
    </div>
  )
}
