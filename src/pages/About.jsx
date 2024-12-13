import { useState } from "react";
import "../styles/About.css";

function About() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="about">
      <div className="about-educationInfo">
        <h3>Education Info</h3>
        <ul>
          <li>
            <img src="/logo/neu.svg" alt="Home Icon" className="navbar-icon" />
            Northeastern University | MsC Information System
          </li>
          <li>
            <img src="/logo/ucd.png" alt="Home Icon" className="navbar-icon" />
            Universityu of California, Davis | Bs Electrical Engineering
          </li>
        </ul>
      </div>

      <section className="skills-section">
        <h3>Tech Skill | Tools</h3>

        <div className="filter-buttons">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`filter-btn ${
              selectedCategory === "all" ? "selected" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Languages")}
            className={`filter-btn ${
              selectedCategory === "Languages" ? "selected" : ""
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setSelectedCategory("Libraries")}
            className={`filter-btn ${
              selectedCategory === "Libraries" ? "selected" : ""
            }`}
          >
            Libraries
          </button>
          <button
            onClick={() => setSelectedCategory("Tools")}
            className={`filter-btn ${
              selectedCategory === "Tools" ? "selected" : ""
            }`}
          >
            Tools and Platforms
          </button>
          <button
            onClick={() => setSelectedCategory("Methodologies")}
            className={`filter-btn ${
              selectedCategory === "Methodologies" ? "selected" : ""
            }`}
          >
            Methodologies
          </button>
          <button
            onClick={() => setSelectedCategory("Hardware")}
            className={`filter-btn ${
              selectedCategory === "Hardware" ? "selected" : ""
            }`}
          >
            Hardware
          </button>
        </div>

        <div
          className={`skills-category ${
            selectedCategory === "Languages" || selectedCategory === "all"
              ? "selected"
              : ""
          }`}
        >
          <h4>Languages</h4>
          <div className="skills-grid">
            <div className="skill-badge">
              <span>Python</span>
            </div>
            <div className="skill-badge">
              <span>C/C++</span>
            </div>
            <div className="skill-badge">
              <span>Java</span>
            </div>
            <div className="skill-badge">
              <span>Bash/Shell</span>
            </div>
            <div className="skill-badge">
              <span>HTML</span>
            </div>
            <div className="skill-badge">
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        <div
          className={`skills-category ${
            selectedCategory === "Libraries" || selectedCategory === "all"
              ? "selected"
              : ""
          }`}
        >
          <h4>Libraries</h4>
          <div className="skills-grid">
            <div className="skill-badge">
              <span>OpenCV</span>
            </div>
            <div className="skill-badge">
              <span>PyQt</span>
            </div>
            <div className="skill-badge">
              <span>Django</span>
            </div>
            <div className="skill-badge">
              <span>Flask</span>
            </div>
            <div className="skill-badge">
              <span>SpringBoot</span>
            </div>
            <div className="skill-badge">
              <span>React</span>
            </div>
          </div>
        </div>

        <div
          className={`skills-category ${
            selectedCategory === "Tools" || selectedCategory === "all"
              ? "selected"
              : ""
          }`}
        >
          <h4>Tools and Platforms</h4>
          <div className="skills-grid">
            <div className="skill-badge">
              <span>Unix</span>
            </div>
            <div className="skill-badge">
              <span>Linux</span>
            </div>
            <div className="skill-badge">
              <span>Docker</span>
            </div>
            <div className="skill-badge">
              <span>AWS</span>
            </div>
            <div className="skill-badge">
              <span>Azure</span>
            </div>
            <div className="skill-badge">
              <span>Kubernetes</span>
            </div>
            <div className="skill-badge">
              <span>Git</span>
            </div>
            <div className="skill-badge">
              <span>CI/CD</span>
            </div>
          </div>
        </div>

        <div
          className={`skills-category ${
            selectedCategory === "Methodologies" || selectedCategory === "all"
              ? "selected"
              : ""
          }`}
        >
          <h4>Methodologies</h4>
          <div className="skills-grid">
            <div className="skill-badge">
              <span>Jira</span>
            </div>
            <div className="skill-badge">
              <span>Jenkins</span>
            </div>
            <div className="skill-badge">
              <span>Agile Development</span>
            </div>
            <div className="skill-badge">
              <span>System Integration</span>
            </div>
          </div>
        </div>

        <div
          className={`skills-category ${
            selectedCategory === "Hardware" || selectedCategory === "all"
              ? "selected"
              : ""
          }`}
        >
          <h4>Hardware</h4>
          <div className="skills-grid">
            <div className="skill-badge">
              <span>Debugging / Testing</span>
            </div>
            <div className="skill-badge">
              <span>Embedded System</span>
            </div>
            <div className="skill-badge">
              <span>Arduino</span>
            </div>
            <div className="skill-badge">
              <span>FPGA</span>
            </div>
            <div className="skill-badge">
              <span>Verilog HDL</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
