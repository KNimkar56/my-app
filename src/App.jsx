import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import English from "./components/pages/courses/English";
import Math from "./components/pages/courses/Math";
import Science from "./components/pages/courses/Science";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/english" element={<English />} />
          <Route path="/courses/math" element={<Math />} />
          <Route path="/courses/science" element={<Science />} />
        </Routes>
      </main>

      <footer className="footer text-center p-3 bg-light">
        <small>&copy; {new Date().getFullYear()} My Website. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
