
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/lovable-uploads/b7041eca-3795-4ba2-beec-1b78ec131037.png" 
            alt="Zoblos Logo" 
            className="d-none"
          />
          <span className="fw-bold text-primary fs-4">
            <span className="text-primary">Z</span>oblos
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="mx-2 fw-bold">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button variant="outline-primary" className="me-2">Login</Button>
            <Button variant="primary">Explore</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
