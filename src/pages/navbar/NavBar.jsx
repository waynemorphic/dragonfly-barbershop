import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import logo from "./../../assets/logo.png";

export default function NavBar() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="xl" variant="pills" className="navbar">
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
              <NavDropdown title="Services" id="collasible-nav-dropdown" className="dropdowns">
                <NavDropdown.Item href="/booking#haircuts" id="haircuts">Haircuts</NavDropdown.Item>
                <NavDropdown.Item href="/booking#facials" id="facials">
                  Facial Skincare
                </NavDropdown.Item>
                <NavDropdown.Item href="/booking#manipedi">
                  Manicure & Pedicure
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/booking">Book Now</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
