/* eslint-disable react/prop-types */
import "../styles/NavBar.css";
import ThemeSwitcher from "../components/ThemeSwitcher";
import HambugerMenu from "./HambugerMenu";

function NavBar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MH.</div>

      <ul className="navbar-list">
        <li onClick={() => setCurrentPage("Home")} className="navbar-item">
          <img src="logo/home.svg" alt="Home Icon" className="navbar-icon" />
          Home
        </li>
        <li
          onClick={() => setCurrentPage("About")}
          className="navbar-item"
          aria-label="About page link"
        >
          <img
            src="logo/person.svg"
            alt="Person Info Icon"
            className="navbar-icon"
          />
          About
        </li>
        <li
          onClick={() => setCurrentPage("Portfolio")}
          className="navbar-item"
          aria-label="Portfolio page link"
        >
          <img src="logo/file.svg" alt="File Icon" className="navbar-icon" />
          Portfolio
        </li>
        <li
          onClick={() => setCurrentPage("Publication")}
          className="navbar-item"
          aria-label="Publication page link"
        >
          <img
            src="logo/article.svg"
            alt="Article Icon"
            className="navbar-icon"
          />
          Publication
        </li>
        <li
          onClick={() => setCurrentPage("Contact")}
          className="navbar-item"
          aria-label="Contact page link"
        >
          <img
            src="logo/contact.svg"
            alt="Contact Icon"
            className="navbar-icon"
          />
          Contact
        </li>
      </ul>

      <div className="navbar-actions">
        <HambugerMenu />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default NavBar;
