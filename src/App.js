import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import AboutMe from "./pages/section2";

const App = () => {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
