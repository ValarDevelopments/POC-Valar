import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider } from "semantic-ui-react";
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
          <Link to="/login">
            <Button inverted>LogIn</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
