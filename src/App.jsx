
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
          name="مرحباً، أنا نبأ عدنان" 
          job="Front-End Developer" 
          desc="خريجة هندسة تقنيات الحاسوب & مطورة واجهات React" 
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
