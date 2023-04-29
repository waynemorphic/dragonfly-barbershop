import Offcanvas from "react-bootstrap/Offcanvas";
import "./UserDetails.css";
import Calendar from "react-calendar";

export default function UserDetails({
  handleClose,
  show,
  handleSubmit,
  handleFirstname,
  handleLastname,
  handleEmail,
  handlePhonenumber,
  handleLocation,
  date,
  setDate,
  fname,
  lname, 
  email,
  phonenumber,
  location
}) {
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Enter Your Details</Offcanvas.Header>
        <Offcanvas.Body className="form-area">
          <form onSubmit={handleSubmit}>
            <label>
              First Name
              <input required onChange={handleFirstname} fname={fname} />
            </label>
            <label>
              Last Name
              <input required onChange={handleLastname} lname={lname} />
            </label>
            <label>
              Email Address
              <input
                type="email"
                required
                onChange={handleEmail}
                email={email}
              />
            </label>
            <label>
              Phone Number
              <input
                required
                placeholder="+254"
                onChange={handlePhonenumber}
                phonenumber={phonenumber}
              />
            </label>
            <label>
              Location
              <input required onChange={handleLocation} location={location} />
            </label>
            <label>
              Date
              <Calendar
                onChange={setDate}
                value={date}
                activeStartDate={new Date()}
                minDate={new Date()}
              />
            </label>
            <button type="submit" className="user-button">
              Book Now
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
