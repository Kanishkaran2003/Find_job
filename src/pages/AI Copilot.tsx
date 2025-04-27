
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
// import Homehero from '../img/image.png';


const Aicopilot = () => {
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
              Git hub AI Copilat
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Online AI Copilot Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-bold text-center text-green-600 mb-8">ONLINE</h2>
        <div className="w-full max-w-3xl mx-auto bg-black text-white text-center py-4 mb-8">
          <h3 className="text-2xl font-bold">AI Copilot</h3>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <p className="mb-6 text-gray-700">
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>

      {/* GitHub Copilot Description */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img src="./src/img/Vector.png" alt="Copilot User" className="rounded-lg w-full" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              GitHub Copilot is an AI coding assistant created by GitHub and OpenAI. It helps you write code faster by giving smart suggestions, completing lines, and even generating entire functions based on comments or your existing code.
            </h2>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Key Features:</h2>
        <ul className="max-w-4xl mx-auto space-y-6">
          <li className="flex items-start">
            <span className="mr-2 text-2xl">✍️</span>
            <span className="text-xl">Autocomplete code while you're typing.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-2xl">🧠</span>
            <span className="text-xl">Understands your code and gives intelligent suggestions.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-2xl">💻</span>
            <span className="text-xl">Works with multiple programming languages (JavaScript, Python, HTML, CSS, Java, etc.).</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-2xl">📝</span>
            <span className="text-xl">Write a comment like // create a login form and it will generate the code for you.</span>
          </li>
        </ul>
      </div>

      {/* How to Use Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">How to Use GitHub Copilot</h2>
        <ol className="max-w-4xl mx-auto space-y-4 list-decimal pl-6">
          <li className="text-xl">Install Visual Studio Code (VS Code).</li>
          <li className="text-xl">Open VS Code → Go to Extensions (left bar) → Search for GitHub Copilot → Click Install.</li>
          <li className="text-xl">Sign in with your GitHub account.</li>
          <li className="text-xl">Start typing code – Copilot will automatically start suggesting!</li>
        </ol>
      </div>

      {/* Official Website */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          <span className="inline-block mr-2">🌍</span> Official Website:
        </h2>
        <a 
          href="https://github.com/features/copilot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-blue-600 hover:underline"
        >
          https://github.com/features/copilot
        </a>
      </div>

      {/* Business Illustration */}
      <div className="container mx-auto py-16 px-4">
        <img 
          src="../src/img/jon-png.png" 
          alt="Business Team" 
          className="w-full max-w-4xl mx-auto"
        />
      </div>

      {/* Partner Logos
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="Google" className="h-8" />
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="Microsoft" className="h-8" />
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="AWS" className="h-8" />
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="IBM" className="h-8" />
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="Infosys" className="h-8" />
            <img src="/lovable-uploads/7eb0b698-f044-4e28-aac0-59b0c0a2e898.png" alt="Oracle" className="h-8" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Aicopilot;
