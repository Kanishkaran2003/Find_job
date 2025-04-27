
import React from "react";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
const companies = [
  { name: "wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/377px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png" },
  { name: "Zoho", logo: "https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg" },
  { name: "cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png" },
  { name: "tcs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/512px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944" },
];
const Contact = () => {
  return (
    <div className="w-full">
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
                Contact Us
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
  {/* Contact Form */}
  <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">You Will Grow, You Will Succeed. We Promise That</h2>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-purple-800 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                  
                  <div>
                    <div className="text-purple-800 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">info@zolabz.com</p>
                  </div>
                  
                  <div>
                    <div className="text-purple-800 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM to 5PM</p>
                  </div>
                  
                  <div>
                    <div className="text-purple-800 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-1">Location</h3>
                    <p className="text-gray-600">123 Business Ave, New York</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Contact Info</h2>
              
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter the Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Mobile No</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter the Mobile No"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter the Email"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Our Offices Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our offices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="./src/img/image1.png" 
              alt="Office" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
             src="./src/img/image2.png" 
              alt="Office" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
             src="./src/img/image3.png"  
              alt="Office" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="./src/img/image4.png"  
              alt="Office" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="./src/img/images (1).png" 
              alt="Office" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
             src="./src/img/images (2).png" 
              alt="Office" 
              className="w-full h-64 object-cover"
            />
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

export default Contact;
