import "../styles/Home.css";

function HomePage() {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">
            <p>Hi There&#129306;</p>
            I&apos;M MIAOCHUAN
          </h1>

          <p className="home-subtitle">
            Software Developer &#128433; | Hardware Engineer &#128421; | 3D
            Printing &#128391; | ...
          </p>

          <p className="home-description">
            Welcome to my website! I specialize in full-stack software
            developing and hardware development. Explore my portfolio to see my
            latest projects.
          </p>
          <p className="home-description">
            At least I learnt something from university and work.
          </p>
        </div>

        <div className="home-imageFrame">
          <img
            src="/myself2.png"
            alt="2D style profile img"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
