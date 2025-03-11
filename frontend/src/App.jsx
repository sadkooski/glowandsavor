import React from "react";
import './App.css';
import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
// import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
