import "./Cart.css";
import UserDetails from "./user/UserDetails";
import { useState, useRef } from "react";
import  emailjs from '@emailjs/browser'
import toast , { Toaster } from 'react-hot-toast'

export default function Cart({ prices }) {
  // state for offcanvas component and input elements
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);
  const [date, setDate] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  // console.log("date", date.$d)

  // handling input events in offcanvas form
  const handleFirstname = (event) => setFName(event.target.value);

  const handleLastname = (event) => setLName(event.target.value);

  const handleEmail = (event) => setEmail(event.target.value);

  const handlePhonenumber = (event) => setPhoneNumber(event.target.value);

  const handleLocation = (event) => setLocation(event.target.value);

  // handling offcanvas click events
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useRef hook for sending email form
  const refForm = useRef();

  // handling client email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c3esjqo',
      'template_9ibfm6q',
      refForm.current,
      'cT7m1BUzeN3cqxCs_',{date: date.$d} )
      .then((result) => {
        toast.success("Booking successful. Check email")
      }, (error) => {
        console.log(error.text);
      })
  }

  let totalCost = 0;

  if (prices.length !== 0) {
    return (
      <div>
        <h3>Cart</h3>
        <div className="cart">
          {prices.map((res) => (
            <p key={res.id}>
              {res.name} <span> {res.price}</span>
            </p>
          ))}
          {prices.forEach((element) => {
            totalCost += element.price;
          })}
          <p className="total">
            Total <span>KES {totalCost} /=</span>{" "}
          </p>
          <button onClick={handleShow} type="click" className="checkout-button">
            Check Out
          </button>
        </div>
        <UserDetails
          show={show}
          handleClose={handleClose}
          sendEmail={sendEmail}
          refForm={refForm}
          handleFirstname={handleFirstname}
          handleLastname={handleLastname}
          handleEmail={handleEmail}
          handlePhonenumber={handlePhonenumber}
          handleLocation={handleLocation}
          date={date}
          setDate={setDate}
          fname={fName}
          lname={lName}
          email={email}
          phonenumber={phoneNumber}
          location={location}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}
