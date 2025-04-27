
// import React from "react";
import { Link } from "react-router-dom";

import React from "react";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";

const JobNotifications = () => {
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

      {/* Job Notifications Cards */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium py-1 px-2 rounded-md mb-2">
                  PART-TIME
                </span>
                <h3 className="text-lg font-semibold">Networking</h3>
                <p className="text-gray-500 text-sm">Intel Corp</p>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Singapore, SGP
                </div>
              </div>
              <button className="text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">View details</button>
              <button className="px-4 py-2 bg-purple-800 text-white rounded-md text-sm hover:bg-purple-700">Apply now</button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium py-1 px-2 rounded-md mb-2">
                  FULL-TIME
                </span>
                <h3 className="text-lg font-semibold">Senior UX Designer</h3>
                <p className="text-gray-500 text-sm">Apple</p>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Boston, USA
                </div>
              </div>
              <button className="text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">View details</button>
              <button className="px-4 py-2 bg-purple-800 text-white rounded-md text-sm hover:bg-purple-700">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobNotifications;
