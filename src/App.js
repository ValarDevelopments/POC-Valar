import React from "react";
import logo from "./Images/fairy-shield.png";
import { Divider, Form, Label } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Valar Development</div>
      </header>

      <main className="App-main">
        <div className="App-center">
          <Form>
            <Form.Field>
              <input type="text" placeholder="First name" />
              <Label pointing>Please enter a value</Label>
            </Form.Field>
            <Divider />

            <Form.Field>
              <Label pointing="below">Please enter a value</Label>
              <input type="text" placeholder="Last Name" />
            </Form.Field>
            <Divider />

            <Form.Field inline>
              <input type="text" placeholder="Username" />
              <Label pointing="left">That name is taken!</Label>
            </Form.Field>
            <Divider />

            <Form.Field inline>
              <Label pointing="right">
                Your password must be 6 characters or more
              </Label>
              <input type="password" placeholder="Password" />
            </Form.Field>
          </Form>
        </div>
      </main>
      <footer className="App-footer">
        <div>Curro Casado - Miguel Rodin</div>
      </footer>
    </div>
  );
}

export default App;
