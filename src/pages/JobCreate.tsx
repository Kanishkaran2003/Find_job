
// import React from "react";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";

import React from "react";

const JobCreate = () => {
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

      {/* Job Creation Form */}
      <div className="container mx-auto py-12 px-4">
        <div className="bg-gray-200 py-4">
          <h2 className="text-2xl font-bold text-center">Create a Job</h2>
        </div>

        <form className="py-8 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="companyName" className="block mb-2 font-medium">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Name"
              />
            </div>
            
            <div>
              <label htmlFor="companyWebsite" className="block mb-2 font-medium">Company Website</label>
              <input
                type="url"
                id="companyWebsite"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Website Link"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="jobTitle" className="block mb-2 font-medium">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="jobCategory" className="block mb-2 font-medium">Job Category</label>
              <input
                type="text"
                id="jobCategory"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Technology"
              />
            </div>
            
            <div>
              <label htmlFor="jobType" className="block mb-2 font-medium">Job Type</label>
              <input
                type="text"
                id="jobType"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Full Time"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="jobLocation" className="block mb-2 font-medium">Job Location</label>
              <input
                type="text"
                id="jobLocation"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Location"
              />
            </div>
            
            <div>
              <label htmlFor="salaryRange" className="block mb-2 font-medium">Salary Range</label>
              <input
                type="text"
                id="salaryRange"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Salary Range"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="experience" className="block mb-2 font-medium">Experience</label>
              <input
                type="text"
                id="experience"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Experience"
              />
            </div>
            
            <div>
              <label htmlFor="qualification" className="block mb-2 font-medium">Qualification</label>
              <input
                type="text"
                id="qualification"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Qualification"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="applicationDeadline" className="block mb-2 font-medium">Application Deadline</label>
            <input
              type="text"
              id="applicationDeadline"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Job application deadline"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="applicationLink" className="block mb-2 font-medium">Job Application Link</label>
            <input
              type="url"
              id="applicationLink"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Job application link url"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="jobDescription" className="block mb-2 font-medium">Job Description</label>
            <textarea
              id="jobDescription"
              rows={6}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Job Description"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-800 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobCreate;
