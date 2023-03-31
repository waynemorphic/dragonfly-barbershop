import Offcanvas from "react-bootstrap/Offcanvas";
import "./UserDetails.css";

export default function UserDetails({ handleClose, show }) {
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Enter Your Details</Offcanvas.Header>
        <Offcanvas.Body className="form-area">
          <form >
            <label>
              First Name
              <input />
            </label>
            <label>
              Last Name
              <input />
            </label>
            <label>
              Email Address
              <input />
            </label>
            <label>
              Phone Number
              <input />
            </label>
            <label>
              Location
              <input />
            </label>
            <label>
              Time
              <input />
            </label>
            <label>
              Date
              <input />
            </label>
            <button type="submit" onClick={""} className="user-button">Book Now</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
