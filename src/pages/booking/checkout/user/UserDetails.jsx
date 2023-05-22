import Offcanvas from "react-bootstrap/Offcanvas";
import "./UserDetails.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from "@mui/x-date-pickers";

export default function UserDetails({
  handleClose,
  show,
  sendEmail,
  handleFirstname,
  handleLastname,
  handleEmail,
  refForm,
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
      <Offcanvas show={show} onHide={handleClose} className="form-area">
        <Offcanvas.Header closeButton>Enter Your Details</Offcanvas.Header>
        <Offcanvas.Body >
          <form onSubmit={sendEmail} ref={refForm}>
            <label>
              First Name
              <input required onChange={handleFirstname} name="fname" fname={fname} />
            </label>
            <label>
              Last Name
              <input required onChange={handleLastname} name="lname" lname={lname} />
            </label>
            <label>
              Email Address
              <input
                type="email"
                required
                onChange={handleEmail}
                email={email}
                name="email"
              />
            </label>
            <label>
              Phone Number
              <input
                required
                placeholder="+254"
                onChange={handlePhonenumber}
                phonenumber={phonenumber}
                name="phonenumber"
              />
            </label>
            <label>
              Location
              <input required onChange={handleLocation} name="location" location={location} />
            </label>
            <label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker name="date" value={date} onChange={setDate} views={['year', 'month', 'day', 'hours', 'minutes']}/>
              </LocalizationProvider>
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
