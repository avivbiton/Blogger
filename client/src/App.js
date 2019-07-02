import React from "react";

import "./CSS/app.css";
import "./CSS/Draft.css";
import "./CSS/RichEditor.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PostsDisplayer from "./components/PostsDisplayer";
import NotFound from "./components/NotFound";
import ViewPost from "./components/ViewPost";
import CreatePost from "./components/CreatePost";
import AboutPage from "./components/AboutPage";

import reduxStore from "./redux/store";
import AuthorizePage from "./components/AuthorizePage";

import onStartup from "./startup";
onStartup(reduxStore);

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostsDisplayer} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/post/:id" component={ViewPost} />
          <Route exact path="/create-post" component={CreatePost} />
          <Route exact path="/auth" component={AuthorizePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
