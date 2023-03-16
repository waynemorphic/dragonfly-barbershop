import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import './NavBar.css'

export default function NavBar () {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="pills" className="navbar">
      <Container>
        {/* <Navbar.Brand href="#home">Local Barbers</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Barbering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Salon
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spa & Massage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Manicure & Pedicure
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#booking">Book Now</Nav.Link> 
          </Nav>
          <Nav>                       
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter Location"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );  
}
