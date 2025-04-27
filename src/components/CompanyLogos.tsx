
import { Container, Row, Col } from "react-bootstrap";

const CompanyLogos = () => {
  const logos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
  ];

  return (
    <Container className="py-4 company-logos">
      <Row className="justify-content-center align-items-center">
        {logos.map((company, index) => (
          <Col key={index} xs={4} sm={4} md={2} className="text-center mb-3 mb-md-0">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="img-fluid company-logo" 
              style={{ maxHeight: "40px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyLogos;
