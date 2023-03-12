import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import useLocalStorage from "use-local-storage";
import "./app.scss";
import { MdOutlineDarkMode } from "react-icons/md";
import Fade from "react-reveal/Fade";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      <div className="App" data-theme={theme}>
        <Router>
          <Navbar />

          <Fade casscade duration="3500">
            <button onClick={switchTheme} className="toggle-Btn">
              <MdOutlineDarkMode />
            </button>
          </Fade>
          <Routes>
            <Route path="/jozu-portfolio" element={<Hero />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
