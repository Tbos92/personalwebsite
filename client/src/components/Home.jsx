import PortfolioHightlights from "./PortfolioHighlights.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="auto">
          <h1>Hello World!</h1>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-end">
        <Col xs={11} lg={6}>
          <PortfolioHightlights />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
