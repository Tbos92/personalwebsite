import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function BlogCard({ blog, onOpen }) {
  return (
    <Card style={{ width: "40rem" }}>
      <Container className="text-center">
        <Card.Img
          style={{ maxWidth: "60%", height: "auto" }}
          variant="top"
          src={blog.img}
        />
      </Container>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.summary}</Card.Text>
        <Button variant="primary" onClick={() => onOpen(blog)}>
          Read more...
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
