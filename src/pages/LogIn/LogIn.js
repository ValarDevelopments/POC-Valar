import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider, Grid, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
          <Grid centered>
            <Grid.Row>
              <Input
                inverted
                size="large"
                icon="chess knight"
                iconPosition="left"
                placeholder="UserName"
              />
            </Grid.Row>
            <Grid.Row>
              <Input
                inverted
                size="large"
                icon="unlock alternate"
                iconPosition="left"
                placeholder="Password"
              />
            </Grid.Row>
            <Link to="/player">
              <Button type="submit">Log in</Button>
            </Link>
          </Grid>
        </div>
        <br />
      </main>
      <Footer />
    </div>
  );
}

export default LogIn;
