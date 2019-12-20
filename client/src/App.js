import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login"> Login </Link>
        <Link to="/bubbles"> Bubbles Page</Link>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
