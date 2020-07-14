import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/fairy-shield.png";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        <div>Valar Development</div>
      </header>
    );
  }
}

export default Header;
