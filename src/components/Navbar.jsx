import{useState} from "react";
function Navbar(){
  const [darkMode, setDarkMode] = useState(false);
    return(
        <nav className="navbar">
      <div className="logo">
        <h2>Nabaa Ad</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#hero"> الرىسية</a></li>
        <li><a href="#about"> عني</a></li>
        <li><a href="#skills"> مهاراتي </a></li>
        <li><a href="#projects"> مشاريعي</a></li>
        <li><a href="#contact"> التواصل </a></li>
        </ul>

        

    <button
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️" : "🌙"}
</button>
    </nav>
    );
} 
export default Navbar;