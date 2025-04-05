import React from "react";
import './App.css';
import "./index.css";

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Ebook from "./pages/Ebook.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <Router basename="/glowandsavor">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Domyślna strona Home */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;