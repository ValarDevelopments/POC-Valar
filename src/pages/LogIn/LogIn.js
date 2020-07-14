import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider, Form, Input } from "semantic-ui-react";
import "../../App.css";

function LogIn() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1 style={{ textAlign: "center" }}>LOG IN</h1>
          <Divider />
          <br />
          <Form className="LogIn-form">
            <Form.Field width="4">
              <Input
                inverted
                size="large"
                icon="users"
                iconPosition="left"
                placeholder="UserName"
              />
            </Form.Field>
            <Form.Field width="4">
              <Input
                inverted
                size="large"
                icon="user secret"
                iconPosition="left"
                placeholder="Password"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LogIn;
