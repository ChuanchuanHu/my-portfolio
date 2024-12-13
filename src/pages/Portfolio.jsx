import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-gallery">
        <div className="portfolio-card">
          <img
            src="project1.png"
            alt="A Java, JavaFX, and Azure Cloud project"
          />
          <h3>AeroPortal Airport Management System</h3>
          <h4>A Java, JavaFX, and Azure Cloud project</h4>
          <p>
            A management system that streamlined airport&apos;s daily
            operations.
          </p>
          <a
            href="https://github.com/MiaochuanHu/Airport-Management-System"
            target="_blank"
            aria-label="Clikcable link to project github repository"
          >
            Project Github Link
          </a>
        </div>
        <div className="portfolio-card">
          <img src="project2.png" alt="A PyQT and OpenCV project" />
          <h3>Parking path planning tool</h3>
          <h4>A PyQT and OpenCV project</h4>
          <p>Generated parking path based on raw building map.</p>
          <p>
            Not public due to{" "}
            <a
              href="https://www.stevens-bolton.com/site/insights/articles/software-created-by-employees-who-owns-the-copyright"
              target="_blank"
              aria-label="Clikcable link to a legal article"
            >
              company requirement
            </a>
          </p>
        </div>
        <div className="portfolio-card">
          <img src="project3.png" alt="A Qt and C++ project" />
          <h3>Mine intelligence - fleet monitoring</h3>
          <h4>A Qt and C++ project</h4>
          <p>
            Enabling live tracking of vehicle locations and battery status
            across multiple service regions.
          </p>
          <p>
            Not public due to{" "}
            <a
              href="https://www.stevens-bolton.com/site/insights/articles/software-created-by-employees-who-owns-the-copyright"
              target="_blank"
              aria-label="Clikcable link to a legal article"
            >
              company requirement
            </a>
          </p>
        </div>
        <div className="portfolio-card">
          <img src="project4.png" alt="A Python project" />
          <h3>Color Correction Module</h3>
          <h4>A Python project</h4>
          <p>
            Ensure consistency and accuracy in crop imaging, integrating images
            from multiple cameras.
          </p>
          <p>
            Not public due to{" "}
            <a
              href="https://www.stevens-bolton.com/site/insights/articles/software-created-by-employees-who-owns-the-copyright"
              target="_blank"
              aria-label="Clikcable link to a legal article"
            >
              company requirement
            </a>
          </p>
        </div>
        <div className="portfolio-card">
          <img src="project5.png" alt="A hardware project" />
          <h3>NATCAR</h3>
          <h4>A hardware project</h4>
          <p>
            Design, build and race autonomous vehicles on a track marked by
            1″-wide white tape.
          </p>
          <a
            href="https://ece.ucdavis.edu/natcar"
            target="_blank"
            aria-label="Clikcable link to UCD natcar project website"
          >
            Project Video Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
