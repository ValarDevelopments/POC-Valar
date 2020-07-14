import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../App.css";

function HomePage() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1>Bienvenidos a Valar Morghulis!!!</h1>
          <Divider />
          <div>
            <Form>
              <Form.Group>
                <Link to="/login">
                  <Button inverted color="teal">
                    LogIn
                  </Button>
                </Link>

                <Link to="/signin">
                  <Button inverted color="olive">
                    SignIn
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
