
import { Card, Badge, Button } from "react-bootstrap";
import { BookmarkIcon, MapPinIcon } from "lucide-react";
import { JobType } from "../types/jobTypes";

interface JobListingProps {
  job: JobType;
}

const JobListing = ({ job }: JobListingProps) => {
  return (
    <Card className="mb-3 job-card border-0 shadow-sm">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="company-logo me-3">
              <div 
                className="rounded-circle" 
                style={{
                  width: "50px", 
                  height: "50px",
                  backgroundColor: job.logoBackground || "#f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}
              >
                {job.companyLogo ? (
                  <img 
                    src={job.companyLogo} 
                    alt={job.company} 
                    className="img-fluid" 
                    style={{ maxWidth: "30px", maxHeight: "30px" }}
                  />
                ) : (
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {job.company.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h5 className="mb-1">{job.title}</h5>
              <p className="text-muted mb-2">{job.company}</p>
            </div>
          </div>
          <div>
            <Button variant="light" className="btn-sm border-0">
              <BookmarkIcon size={16} />
            </Button>
          </div>
        </div>
        
        <div className="job-tags d-flex flex-wrap mt-3 mb-2">
          {job.type && (
            <Badge bg="light" text="dark" className="me-2 mb-2 py-2 px-3 rounded-pill">
              {job.type}
            </Badge>
          )}
          {job.category && (
            <Badge bg="light" text="dark" className="me-2 mb-2 py-2 px-3 rounded-pill">
              {job.category}
            </Badge>
          )}
          {job.salary && (
            <Badge bg="light" text="dark" className="me-2 mb-2 py-2 px-3 rounded-pill">
              {job.salary}
            </Badge>
          )}
          {job.location && (
            <Badge bg="light" text="dark" className="mb-2 py-2 px-3 rounded-pill d-flex align-items-center">
              <MapPinIcon size={14} className="me-1" />
              {job.location}
            </Badge>
          )}
        </div>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-muted small">Posted {job.postedTime} ago</span>
          <Button variant="primary" size="sm" className="px-3 rounded-pill">Job Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobListing;
