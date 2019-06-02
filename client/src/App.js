import React from "react";
import "./CSS/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PostsDisplayer from "./components/PostsDisplayer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>

      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={PostsDisplayer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
