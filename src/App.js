import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/theme.css";
import Home from "./components/Home";
import CommentPage from "./components/CommentPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/comment/:postId?" render={props => <CommentPage {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
