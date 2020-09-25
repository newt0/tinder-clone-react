import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>Chat page</h1>
          </Route>

          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
