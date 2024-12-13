import "../styles/HeaderFooter.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>Copyright 2024 MH. All rights reserved.</p>
        </div>

        <div>
          <p>Designed by Miaochuan Hu</p>
        </div>

        <div className="footer-link">
          <ul className="footer-links">
            <li>
              <a href="https://www.linkedin.com/in/miaochuan-h-9a260518a/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.github.com">GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
