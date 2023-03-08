import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";
import AboutMe from "./pages/section2";

const App = () => {
  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
