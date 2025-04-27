
import { Row, Col, Card } from "react-bootstrap";

const TopCompanies = () => {
  const companies = [
    {
      name: "Instagram",
      logo: "https://commons.wikimedia.org/wiki/File:Wipro_Primary_Logo_Color_RGB.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue phasellus sed.",
      jobCount: 24
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
      description: "At consectetur lorem donec massa sapien faucibus et molestie. Sit amet cursus sit amet.",
      jobCount: 36
    },
    {
      name: "McDonald's",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
      description: "Dolor etiam erat vetibus. Fasellus et lorem et tempus. Fasellus id massa.",
      jobCount: 12
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      description: "Et odio ante adpiscing tellus phasellus egestas tellus rutrum. Nunc lobortis.",
      jobCount: 9
    }
  ];

  return (
    <Row>
      {companies.map((company, index) => (
        <Col key={index} md={6} lg={3} className="mb-4">
          <Card className="h-100 border-0 shadow-sm text-center">
            <Card.Body className="p-4">
              <div className="company-icon mb-3 mx-auto" style={{ width: "60px", height: "60px" }}>
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="img-fluid" 
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <Card.Title className="mb-3">{company.name}</Card.Title>
              <Card.Text className="text-muted small mb-3">
                {company.description}
              </Card.Text>
              <p className="text-primary mb-0">{company.jobCount} open jobs</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TopCompanies;
