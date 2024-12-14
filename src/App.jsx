import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Publication from "./pages/Publication";
import "./styles/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Publication":
        return <Publication />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <NavBar setCurrentPage={setCurrentPage} />
      <main id="main-page">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
