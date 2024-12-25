
import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderComponent from "./HeaderComponent";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Event1 from "./Event1";
import Sponsor from "./Sponsor";
import Post from "./Post";
import Creator from "./Creator";
import Preloader from "./Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event1" element={<Event1 />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/post" element={<Post />} />
            <Route path="/creator" element={<Creator />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
