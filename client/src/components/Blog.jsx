import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogDetailView from "./BlogDetailView";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import blogImg from "../assets/blog.png";

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  const dummyBlog = {
    title: "Card Title",
    summary:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    content: "Full detailed content goes here...",
    img: blogImg,
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={11} lg={6}>
          <BlogCard blog={dummyBlog} onOpen={handleOpen} />
        </Col>
      </Row>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBlog && <BlogDetailView blog={selectedBlog} />}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Blog;
