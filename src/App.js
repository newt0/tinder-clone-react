import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <h1>Top page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
