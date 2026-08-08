import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/nav.jsx';
import Home from './components/home/home.jsx';
import Education from './components/study/index.jsx';
import Projects from './components/project/index.jsx';
import Skills from './components/skills/index.jsx';
import Footer from './components/footer/index.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
