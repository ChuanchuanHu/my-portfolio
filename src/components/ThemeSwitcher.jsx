import { useState } from "react";
import "../styles/ThemeSwitcher.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "light" ? (
        <img src="logo/off.svg" alt="Switch to dark theme" />
      ) : (
        <img src="logo/on.svg" alt="Switch to dark theme" />
      )}
    </button>
  );
}

export default ThemeSwitcher;
