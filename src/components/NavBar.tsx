/**
 * Navbar component
 */

import useTheme from "../hooks/useTheme";

const NavBar = () => {
  // Access useTheme hook in order to set theme and use toggle function

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Daily Planner</div>
      <div className="navbar-buttons">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Light Theme" : "Dark Theme"}
        </button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
