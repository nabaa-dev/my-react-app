
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App(){
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : "light"}>
    <Navbar/>
    <button onClick={() => setDarkMode(!darkMode)}>
   {darkMode ? "☀️ نهاري" : "🌙 ليلي"}
   </button>

    <Hero name="مرحبا انا نباً عدنان" jop="Frontend Devloper" desc="React Devloper"/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
