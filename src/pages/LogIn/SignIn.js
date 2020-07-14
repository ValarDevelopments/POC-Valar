import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider, Form, Input } from "semantic-ui-react";
import "../../App.css";

function SignIn() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1 style={{ textAlign: "center" }}>SIGN IN</h1>
          <Divider />
          <br />
          <Form>
            <Form.Group widths={3}>
              <Form.Input
                inverted
                size="large"
                icon="chess knight"
                iconPosition="left"
                placeholder="UserName"
              />
              <Form.Input
                inverted
                size="large"
                icon="mail square"
                iconPosition="left"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group widths={3}>
              <Form.Input
                inverted
                size="large"
                icon="unlock alternate"
                iconPosition="left"
                type="password"
                placeholder="Password"
              />
              <Form.Input
                inverted
                size="large"
                icon="unlock alternate"
                iconPosition="left"
                placeholder="Repeat Password"
              />
            </Form.Group>

            <Button type="submit">Sign in</Button>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
