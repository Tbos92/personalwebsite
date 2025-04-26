import PortfolioHighlights from "./PortfolioHighlights.jsx";
import Resume from "./Resume.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={11} lg={6}></Col>
        <Col xs={11} lg={6}>
          <h2 className="mt-5">Selected Projects</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={11} lg={6}>
          <Resume />
        </Col>
        <Col xs={11} lg={6}>
          <PortfolioHighlights />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
