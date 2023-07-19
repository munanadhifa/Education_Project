"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/page";
import Education from "./Education/page";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/education/:username" element={<Education />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
