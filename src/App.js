import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  return (
    <Router>
      <Switch>
        {/*All Routes to every tab in the Dashboard*/}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </Router>
  );
}
export default App;
