import React, { Component } from "react";
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
        <img src={logo} className="App-logo" alt="logo" />
        <div>Valar Development</div>
      </header>
    );
  }
}

export default Header;
