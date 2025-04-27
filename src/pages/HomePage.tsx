import { relative } from "path";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FileX } from "lucide-react";
import { wrap } from "module";

const stats = [
  { count: "25,000", label: "Jobs", icon: "../src/img/job1.svg" },
  { count: "25,000", label: "Candidates", icon: "/lovable-uploads/3620bbe5-c45b-4cc4-a031-58c03d9ba1ab.png" },
  { count: "25,000", label: "Companies", icon: "/lovable-uploads/3620bbe5-c45b-4cc4-a031-58c03d9ba1ab.png" },
];
  
const companies = [
  { name: "wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/377px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png" },
  { name: "Zoho", logo: "https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg" },
  { name: "cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png" },
  { name: "tcs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/512px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944" },
];

const jobsCardData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/377px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443",
    company: "Wipro",
    desc: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/512px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944",
    company: "TCS",
    desc: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
  },
  {
    logo: "https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg",
    company: "Zoho",
    desc: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
  }
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % companies.length);
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval); // Cleanup
  }, [companies.length]);

  return (
    <div className="homepage">
      {/* Navbar
      <Navbar expand="lg" className="bg-transparent position-absolute w-100" style={{ zIndex: 10 }}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center gap-2 fw-bold fs-4 text-white">
            <img src="/lovable-uploads/3620bbe5-c45b-4cc4-a031-58c03d9ba1ab.png" alt="ZOLABZ Logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
            <span>ZOLABZ</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto text-white fw-bold" style={{ fontSize: "1.1rem" }}>
            <Nav.Link as={Link} to="/" className="mx-3 text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="mx-3 text-white">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3 text-white">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-3 text-white">Contacts Us</Nav.Link>
            <Nav.Link as={Link} to="/aicopilot" className="mx-3 text-white">AI</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <i className="bi bi-person"></i> Login
              </Nav.Link>
              <Button variant="success" className="ms-2 rounded-pill fw-bold px-3">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <div
        className="w-100 d-flex align-items-center"
        style={{
          background: `url('/lovable-uploads/3620bbe5-c45b-4cc4-a031-58c03d9ba1ab.png') center/cover no-repeat, url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047') center/cover no-repeat`,
          minHeight: 500,
          position: "relative",
        }}
      >
        <div
          className="w-100 h-100 position-absolute"
          style={{ background: "rgba(0,0,0,0.58)", top: 0, left: 0, zIndex: 2 }}
        />
        <Container className="position-relative z-2 pt-5 pb-3">
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <h1 className="display-4 fw-bold text-white mb-2 mt-4" style={{ textShadow: "2px 4px 22px #000" }}>
                Find Your Dream Jobs Today
              </h1>
              <h4 className="fw-semibold text-white mb-4">Your Gateway to Career Success</h4>

              {/* Search bar group */}
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center bg-white rounded-pill px-3 py-2 mx-auto shadow" style={{ maxWidth: 730 }}>
                <Form.Control placeholder="Job Title or Company" className="border-0 py-2 rounded-pill me-md-2" />
                <Form.Select className="border-0 py-2 rounded-pill me-md-2" defaultValue="">
                  <option value="">Select Category</option>
                  <option value="it">IT</option>
                  <option value="marketing">Marketing</option>
                  <option value="finance">Finance</option>
                </Form.Select>
                <Button
                  variant="success"
                  className="fw-bold py-2 px-4 rounded-pill d-flex align-items-center"
                  style={{ whiteSpace: "nowrap" ,backgroundColor:"#851D7B"}}
                >
                  <i className="bi bi-search me-2"></i> Search Job
                </Button>
              </div>
              {/* Stat Icons */}
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4">
                <Stat count="25,000" label="Jobs" />
                <Stat count="25,000" label="Candidates" />
                <Stat count="25,000" label="Companies" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="text-center py-5 overflow-hidden">
      <animateMotion
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            keyTimes="0; 1"
          >
            <mpath xlinkHref="#infinity-path" />
          </animateMotion>
      <Row className="justify-content-center slide align-items-center g-4" style={{ whiteSpace: "nowrap", transform: `translateX(-${index * 100}px)`,transition: "transform 5s linear" }}>
        {companies.map((c, i) => (
          <Col xs={6} sm={4} md={2} key={i} style={{ display: "inline-block" }}>
            <img
              src={c.logo}
              alt={c.name}
              style={{ maxHeight: 60, maxWidth: "100%", filter: "grayscale(1)", opacity: 0.8 }}
            />
          </Col>
        ))}
      </Row>
    </Container>

      {/* Recent Job Notification */}
      <Container className="py-4">
        <h3 className="fw-semibold mb-4">Recent job notification</h3>
        <Row className="gx-4 gy-4">
          <Col md={4}>
            <Card className="p-3">
              <div className="mb-2">
                <Form.Label>Location</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue="Chennai" />
                  <Button size="sm" variant="outline-secondary" className="rounded-pill ms-2" style={{ minWidth: 40 }}>
                    ×
                  </Button>
                </InputGroup>
              </div>
              <div className="mb-2">
                <Form.Check inline type="radio" name="jobtype" label="Full-Time" defaultChecked />
                <Form.Check inline type="radio" name="jobtype" label="Part-Time" />
              </div>
              <Form.Group className="mb-2">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="number" min={1} max={30} defaultValue={1} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Salary Range</Form.Label>
                <Form.Range min={0} max={100} defaultValue={30} />
                <div className="d-flex justify-content-between">
                  <span>$0</span>
                  <span>$0-100</span>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
            </Card>
          </Col>
          <Col md={8}>
            <Row className="g-4">
              {jobsCardData.map((j, i) => (
                <Col xs={12} key={i}>
                  <Card className="d-flex flex-row align-items-center px-3 py-3 mb-2">
                    <div className="me-4">
                      <img src={j.logo} alt={j.company} style={{ width: 60, height: 60, objectFit: "contain" }} />
                    </div>
                    <div className="flex-fill">
                      <h5 className="mb-2">{j.company}</h5>
                      <p className="mb-1 small text-muted">{j.desc}</p>
                      <Button size="sm" variant="outline-secondary" className="rounded-pill">Button</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <h3 className="text-center mb-5 pt-3 fw-bold text-block">About Us</h3>
<br />
      {/* About US Section */}
      <section className="w-100 mt-5 " style={{ background: "none", position: "relative", minHeight: 300 }}>
        <div
          style={{
            background: "#851D7B",
            borderRadius:100,
            width: "80%",
            display:"flex",
             
            height: 370,
            position: "absolute",
            left: 130,
            top: -100,
            zIndex: 1,
          }}
        />  
        <h3 className="text-center mb-4 pt-1 fw-bold text-white">About Us</h3>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center justify-content-center">
            <Col md={8} className="text-center">
              <div 
                className="text-white  " 
                style={{ 
                  fontFamily: "'Playfair Display', cursive", 
                  fontSize: "1.5rem", 
                  whiteSpace: "pre-line", 
                  maxWidth: "800px" 
                }}
              >
                Find your dream job or top talent with ease!
                <br />
                Apply, track, and manage jobs effortlessly.
                <br />
                Get personalized recommendations and alerts.
                <br />
                Your career journey starts here—Join now! 🚀
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center  mt-md-0">
              <img 
                src="./src/img/Group 4.png" 
                alt="About illustration" 
                className="img-fluid rounded-circle" 
                style={{ 
                  width: 160, 
                  height: 160, 
                  position:"absolute",
                  top:-230,
                  left:790,
                  objectFit: "cover", 
                  
 
                }} 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <Container>
          <Row className="mb-4">
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-3">
                <img src="/lovable-uploads/3620bbe5-c45b-4cc4-a031-58c03d9ba1ab.png" alt="logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
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
                <Form.Control type="email" placeholder="Email Address" className="bg-dark text-light border-secondary" />
                <Button variant="secondary" className="rounded-pill">Subscribe now</Button>
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
      </footer> */}
    </div>
  );
};

function Stat({ count, label }: { count: string; label: string }) {
  // You'd likely update these to icons of your choice
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mb-2" style={{ width: 56, height: 56 }}>
        <i className="bi bi-briefcase fs-4 text-success"></i>
      </div>
      <div>
        <span className="fw-bold text-white fs-5 d-block">{count}</span>
        <span className="text-white-50">{label}</span>
      </div>
    </div>
  );
}

export default HomePage;
