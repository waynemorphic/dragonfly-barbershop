import Offcanvas from "react-bootstrap/Offcanvas";
import "./UserDetails.css";
import Calendar from "react-calendar";
import { useState } from "react";

export default function UserDetails({ handleClose, show }) {
   const [value, onChange] = useState(new Date())
   const [details, setDetails] = useState([])
   const [fName, setFName] = useState()
   const [lName, setLName] = useState()
   const [email, setEmail] = useState()
   const [phoneNumber, setPhoneNumber] = useState()
   const [location, setLocation] = useState()

   const handleSubmit = (event) => {
      event.preventDefault()

      const detailsObject = {
         fName: fName,
         lName: lName,
         email: email,
         phoneNumber: phoneNumber,
         location: location
      }  
      setDetails(details.concat(detailsObject));
   }

   const handleFirstname = (event) => setFName(event.target.value)

   const handleLastname = (event) => setLName(event.target.value)

   const handleEmail = (event) => setEmail(event.target.value)

   const handlePhonenumber = (event) => setPhoneNumber(event.target.value)

   const handleLocation = (event) => setLocation(event.target.value)


  return (
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Enter Your Details</Offcanvas.Header>
        <Offcanvas.Body className="form-area">
          <form onSubmit={handleSubmit}>
            <label>
              First Name
              <input required onChange={handleFirstname} firstName = {fName} />
            </label>
            <label>
              Last Name
              <input required onChange={handleLastname} lastName = {lName} />
            </label>
            <label>
              Email Address
              <input type="email" itemType="email" required onChange={handleEmail} email = {email}/>
            </label>
            <label>
              Phone Number
              <input required placeholder="+254" onChange={handlePhonenumber} phoneNumber = {phoneNumber} />
            </label>
            <label>
              Location
              <input required onChange={handleLocation} location = {location} />
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
