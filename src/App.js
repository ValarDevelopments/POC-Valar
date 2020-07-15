import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/LogIn/SignIn";
import PlayerHome from "./pages/Player/PlayerHome";

function App() {
  return (
    <Router>
      <Switch>
        {/*All Routes to every tab in the Dashboard*/}
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/player" component={PlayerHome} />
      </Switch>
    </Router>
  );
}
export default App;
