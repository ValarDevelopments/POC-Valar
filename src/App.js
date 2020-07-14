import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        {/*All Routes to every tab in the Dashboard*/}
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}
export default App;
