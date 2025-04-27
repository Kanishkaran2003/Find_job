
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
const Jobs = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Technical Support Specialist",
      company: "Google Inc.",
      location: "New Delhi, India",
      jobType: "PART-TIME",
      salary: "20,000 INR - 25,000 INR",
      logo: "/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png"
    },
    {
      id: 2,
      title: "Senior UI/UX Designer",
      company: "Apple",
      location: "Boston, USA",
      jobType: "FULL-TIME",
      salary: "$30,000 - $55,000",
      logo: "/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png"
    },
    {
      id: 3,
      title: "Marketing Officer",
      company: "Intel Corp",
      location: "Bangalore, India",
      jobType: "PART-TIME",
      salary: "15,000 INR - 35,000 INR",
      logo: "/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png"
    }
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
              <Nav.Link href="/home" className="mx-3 text-white">Home</Nav.Link>
              <Nav.Link href="/jobs" className="mx-3 text-white">Jobs</Nav.Link>
              <Nav.Link href="/about" className="mx-3 text-white">About Us</Nav.Link>
              <Nav.Link href="/contact" className="mx-3 text-white">Contacts Us</Nav.Link>
              <Nav.Link href="/aicopilot" className="mx-3 text-white">AI</Nav.Link>
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
               Jobs
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      

      {/* Featured Jobs Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Featured Jobs</h2>
        <p className="text-center text-gray-600 mb-12">Choose jobs from the top employers and apply for the same.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className={`text-sm ${job.jobType === "PART-TIME" ? "text-green-600" : "text-purple-600"} font-medium mt-1`}>
                      {job.jobType}
                    </div>
                    <div className="text-gray-500 mt-1">Salary: {job.salary}</div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center mt-4">
                  <img className="h-10 w-10 rounded-full" src={job.logo} alt={job.company} />
                  <div className="ml-3">
                    <div className="font-medium">{job.company}</div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {job.location}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    View details
                  </button>
                  <button className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/all-jobs" className="text-purple-600 font-medium hover:text-purple-800">
            View all
          </Link>
        </div>
      </div>

      {/* Job Posting Options */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Job Opening</h2>
        <h3 className="text-5xl font-bold text-center mb-12">
          <span className="text-red-600">Post a</span> <span className="text-blue-600">Job opening</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Jobs */}
          <div className="bg-pink-100 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-center mb-4">FREE JOBS</h3>
            <p className="text-center mb-8">For Smaller Companies looking to get some Potential candidates</p>
            
            <h4 className="text-6xl font-bold text-center text-green-600 mb-8">$0</h4>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="bg-black text-white rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-blue-600 font-semibold">10-20 Candidates</span>
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-blue-600 font-semibold">No Featured Badge</span>
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-blue-600 font-semibold">Slow Approval</span>
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-blue-600 font-semibold">Published for 15 days</span>
              </li>
              <li className="flex items-center">
                <span className="bg-black text-white rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-blue-600 font-semibold">No Verfied Company</span>
              </li>
            </ul>

            <button className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-purple-700 transition-colors font-medium">
              Apply now
            </button>
          </div>

          {/* Featured Jobs */}
          <div className="bg-purple-800 text-white rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-center mb-4">FEATURED JOBS</h3>
            <p className="text-center mb-8">For Smaller Companies looking to get as exposure as Possible</p>
            
            <h4 className="text-6xl font-bold text-center text-yellow-400 mb-8">$299</h4>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="bg-white text-purple-800 rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-yellow-400 font-semibold">20-30 +Candidates</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-purple-800 rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-yellow-400 font-semibold">Featured Badge</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-purple-800 rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-yellow-400 font-semibold">Instant Approval</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-purple-800 rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-yellow-400 font-semibold">Published for 60 days</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-purple-800 rounded-full p-1 mr-3">✓</span>
                <span className="text-xl text-yellow-400 font-semibold">Verfied Company Page</span>
              </li>
            </ul>

            <button className="w-full bg-white text-purple-800 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
