/**
 * Navbar component
 */

import { useState } from "react";

const NavBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.className = isDarkTheme ? "" : "dark-theme";
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Daily Planner</div>
      <div className="navbar-buttons">
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Light Theme" : "Dark Theme"}
        </button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
