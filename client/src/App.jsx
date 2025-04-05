import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Blog from "./components/Blog.jsx";
import BlogDetailView from "./components/BlogDetailView.jsx";
import Contact from "./components/Contact.jsx";
import ContactForm from "./components/ContactForm.jsx";
import PortfolioHighlights from "./components/PortfolioHighlights.jsx";

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <div id="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog_detail_view" element={<BlogDetailView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/highlights" element={<PortfolioHighlights />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
