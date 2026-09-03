
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero 
          name="نبأ عدنان | Nabaa Adnan" 
          job="Front-End Web Developer" 
          degreeAr="خريجة دبلوم أنظمة تقنيات الحاسوب وبكالوريوس هندسة تقنيات الحاسوب"
          degreeEn="Diploma Graduate in Computer Systems Techniques & Bachelor’s Degree in Computer Engineering Techniques"
        />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
