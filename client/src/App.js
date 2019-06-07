import React from "react";
import "./CSS/app.css";
import "./CSS/Draft.css";
import "./CSS/RichEditor.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PostsDisplayer from "./components/PostsDisplayer";
import NotFound from "./components/NotFound";
import ViewPost from "./components/ViewPost";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Router>

      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={PostsDisplayer} />
        <Route path="/post/:id" component={ViewPost} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
