import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider, Grid, Input } from "semantic-ui-react";
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
          <Grid centered>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="chess knight"
                  iconPosition="left"
                  placeholder="UserName"
                />
              </Grid.Column>

              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="mail square"
                  iconPosition="left"
                  placeholder="Email"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="unlock alternate"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                />
              </Grid.Column>

              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="unlock alternate"
                  iconPosition="left"
                  placeholder="Repeat Password"
                />
              </Grid.Column>
            </Grid.Row>

            <Button type="submit">Sign in</Button>
          </Grid>
        </div>
        <br />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
