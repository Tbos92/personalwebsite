import BlogCard from "./BlogCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Blog = () => {
  return (
    <Container>
      <h1>Blog Page</h1>
      <Row className="justify-content-center">
        <Col xs={11} lg={6}>
          <BlogCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
