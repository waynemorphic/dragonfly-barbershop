import Offcanvas from "react-bootstrap/Offcanvas";
import "./UserDetails.css";
import Calendar from "react-calendar";
import { useState } from "react";

export default function UserDetails({ handleClose, show }) {
   const [value, onChange] = useState(new Date())

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Enter Your Details</Offcanvas.Header>
        <Offcanvas.Body className="form-area">
          <form>
            <label>
              First Name
              <input required/>
            </label>
            <label>
              Last Name
              <input required/>
            </label>
            <label>
              Email Address
              <input type="email" itemType="email" required/>
            </label>
            <label>
              Phone Number
              <input required placeholder="+254"/>
            </label>
            <label>
              Location
              <input required/>
            </label>            
            <label>
              Date
              <Calendar onChange={onChange} value={value} activeStartDate = {new Date()} minDate = {new Date()}/>
            </label>
            <button type="submit" onClick={""} className="user-button">Book Now</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
