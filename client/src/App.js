import React from "react";
import "./CSS/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
    </Router>
  );
}

export default App;
