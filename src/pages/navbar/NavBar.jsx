import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import logo from "./../../assets/logo.png";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" variant="pills" className="navbar">
      <Container>
        <Navbar.Brand href="/" id="brand">
          <span>
            <img src={logo} className="logo" />
          </span>
          DragonFly Barbers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Haircuts</NavDropdown.Item>
              <NavDropdown.Item id="facials">
                Facial Skincare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Manicure & Pedicure
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/booking">Book Now</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
