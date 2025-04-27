
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Companies from "./HomePage";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
const About = () => {
  // Sample job categories
  const categories = [
    { name: "Agriculture", jobs: "1234", icon: "🌱" },
    { name: "Metal Production", jobs: "978", icon: "🏭" },
    { name: "Commerce", jobs: "2487", icon: "🛒" },
    { name: "Construction", jobs: "1670", icon: "🏗️" },
    { name: "Hotels & Tourism", jobs: "1522", icon: "🏨" },
    { name: "Education", jobs: "1439", icon: "🎓" },
    { name: "Financial Services", jobs: "1079", icon: "💰" },
    { name: "Transport", jobs: "1244", icon: "🚚" }
  ];
  const companies = [
    { name: "wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/377px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png" },
    { name: "Zoho", logo: "https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg" },
    { name: "cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png" },
    { name: "tcs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/512px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944" },
  ];
  return (
    <div className="w-full">
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
              <Nav.Link href="/HomePage" className="mx-3 text-white">Home</Nav.Link>
              <Nav.Link href="/jobs" className="mx-3 text-white">Jobs</Nav.Link>
              <Nav.Link href="/about" className="mx-3 text-white">About Us</Nav.Link>
              <Nav.Link href="#" className="mx-3 text-white">Contacts Us</Nav.Link>
              <Nav.Link href="#" className="mx-3 text-white">AI</Nav.Link>
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
          backgroundImage: `url("./src/img/Hero.png")`, // NO import needed
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center",
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
                About Us
              </h1>
              

              
              
            
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="bg-pink-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center">
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.jobs} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Upload Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Upload Resume</h2>
        
        <div className="bg-red-400 max-w-xl mx-auto rounded-3xl p-12">
          <div className="bg-red-300 rounded-3xl p-12 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">Upload Resume</h3>
            <p className="text-center text-white text-sm mb-8">Supported formats are .pdf and .docx files</p>
            <p className="text-center mb-6">Click or drag files to upload the file</p>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Job Application Process */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-md p-6 text-center">
            <span className="inline-block text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <h3 className="font-medium mb-2">Create account</h3>
            <p className="text-sm text-gray-500">A quick free fast signup, sign in, and get started with us</p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-6 text-center">
            <span className="inline-block text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <h3 className="font-medium mb-2">Upload CV/Resume</h3>
            <p className="text-sm text-gray-500">Complete all steps, review, and apply. Your data stays private.</p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-6 text-center">
            <span className="inline-block text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <h3 className="font-medium mb-2">Find suitable job</h3>
            <p className="text-sm text-gray-500">Provides you thousands of job kinds from all sources available.</p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-6 text-center">
            <span className="inline-block text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            <h3 className="font-medium mb-2">Apply job</h3>
            <p className="text-sm text-gray-500">Complete all steps, review, apply. Your data stays private.</p>
          </div>
        </div>
      </div>

      {/* About Us Description */}
      <div className="container mx-auto py-16 px-4">
        <div className="bg-gray-100 p-8 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="./src/img/aboutimg.png" alt="Company illustration" className="w-full max-w-md mx-auto" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">About Us</h2>
              <p className="mb-4">We are a passionate and dedicated team focused on delivering quality solutions in the field of web development and IT services. With a strong background in programming, design, and modern technologies, we strive to build innovative and user-friendly digital experiences.</p>
              <p className="mb-4">Our goal is to help individuals and businesses grow online by providing efficient, customized, and creative tech solutions. From website development to full-stack applications, we take pride in turning ideas into reality.</p>
              <p className="mb-4">We believe in continuous learning, clear communication, and delivering work that exceeds expectations. Whether you're looking to start a project or collaborate, we're here to make things happen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Companies */}
      <Container className="text-center py-5">
        <Row className="justify-content-center align-items-center g-4">
          {companies.map((c, i) => (
            <Col xs={6} sm={4} md={2} key={i}>
              <img src={c.logo} alt={c.name} style={{ maxHeight: 60, maxWidth: "100%", filter: "grayscale(1)", opacity: 0.8 }} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
