import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {< About />} />
            <Route path="/projects" element = {< Projects />} />
            <Route path="/experience" element = {< Experience />} />
            <Route path="/contact" element = {< Contact />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
