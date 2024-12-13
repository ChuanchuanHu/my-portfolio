import { useState } from "react";
import "../styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="submenu-content">
      <button
        className="hamburger"
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
          }
        }}
        aria-label="Hamburger menu Button"
      >
        &#9776;
      </button>

      <div className={`side-menu ${isOpen ? "side-menu-on" : ""}`}>
        <div className="submenu-brand">MH.</div>
        <ul className="submenu-links">
          <li onClick={toggleMenu} aria-label="Close the menu button">
            <img src="\logo\close.svg" />
            <a>Close</a>
          </li>
          <li>
            <img src="\logo\resume.svg" />
            <a
              href="https://drive.google.com"
              target="_blank"
              aria-label="Download my resume button"
            >
              Download Resume
            </a>
          </li>
          <li>
            <img src="\logo\donate.svg" />
            <a
              href="https://paypal.com"
              target="_blank"
              aria-label="Donate to me through Paypal link"
            >
              Donate Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
