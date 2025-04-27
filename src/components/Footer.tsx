
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
   {/* Footer */}
   <footer className="bg-dark text-white pt-5 pb-3 mt-5">
   <Container>
     <Row className="mb-4">
       <Col xs={12} md={3} className="mb-4 mb-md-0">
         <div className="d-flex align-items-center mb-3">
           <img src="./src/img/logo.svg" alt="logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
           <span className="fw-bold fs-4 ms-2">Zolabz</span>
         </div>
         <p className="text-light small mb-4">
           Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
         </p>
       </Col>
       <Col xs={6} md={3} className="mb-4 mb-md-0">
         <h6 className="mb-3 text-uppercase">Company</h6>
         <ul className="list-unstyled">
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Our Team</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Partners</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">For Candidates</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">For Employers</a></li>
         </ul>
       </Col>
       <Col xs={6} md={3} className="mb-4 mb-md-0">
         <h6 className="mb-3 text-uppercase">Job Categories</h6>
         <ul className="list-unstyled">
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Telecommunications</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Hotels & Tourism</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Construction</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Education</a></li>
           <li className="mb-2"><a href="#" className="text-light text-decoration-none">Financial Services</a></li>
         </ul>
       </Col>
       <Col xs={12} md={3}>
         <h6 className="mb-3 text-uppercase">Newsletter</h6>
         <p className="text-light small mb-3">
           Eu nunc pretium vitae platea. Non netus elementum vulputate
         </p>
         <Form className="d-flex flex-column gap-2">
           <Form.Control type="email" placeholder="Email Address" className="border-secondary" />
           <Button variant="secondary" className="rounded-pill" style={{ backgroundColor: "#851D7B" }}>Subscribe now</Button>
         </Form>
       </Col>
     </Row>
     <hr className="border-secondary" />
     <div className="d-md-flex justify-content-between pt-3">
       <p className="text-muted small">© Copyright Job Portal 2025. Designed by Figma.mohan</p>
       <div>
         <a href="#" className="text-muted small me-3 text-decoration-none">Privacy Policy</a>
         <a href="#" className="text-muted small text-decoration-none">Terms & Conditions</a>
       </div>
     </div>
   </Container>
 </footer>
 </div>
  );
};

export default Footer;
