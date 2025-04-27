import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // (You imported it, but not used yet!)
import { Container, Navbar as BootstrapNavbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap"; 
// Renamed imported Navbar to BootstrapNavbar to avoid name clash
// import { Link } from "react-router-dom";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <BootstrapNavbar expand="lg" className="bg-transparent position-absolute w-100" style={{ zIndex: 10 }}>
        <Container>
          <BootstrapNavbar.Brand className="d-flex align-items-center fw-bold fs-4  text-white">
            <img src="./src/img/logo.svg" alt="ZOLABZ Logo" style={{ width: 50, height: 36, objectFit: "cover",paddingTop: 5}} />
            <span>ZOLABZ</span>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="main-navbar-nav" style={{ backgroundColor: '#851D7B',borderRadius:'50' }} />
          <BootstrapNavbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto text-white fw-bold" style={{ fontSize: "1.1rem" }}>
              <Nav.Link as={Link} to="/" className="mx-3 text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/jobs" className="mx-3 text-white">Jobs</Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-3 text-white">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3 text-white">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/aicopilot" className="mx-3 text-white">AI</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login" className="text-white d-flex align-items-center">
                <i className="bi bi-person"></i> Login</Nav.Link>
                <Link to="/register" className="btn btn-success ms-2 rounded-pill fw-bold px-3" style={{ backgroundColor: "#851D7B" }}>Register</Link>
              </Nav>

          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;
