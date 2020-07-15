import React from "react";
import Header from "./headerPlayer";
import Footer from "../../Components/footer";
import { Button, Divider, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../App.css";

function PlayerHome() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1>Bienvenido a tus dominios!!!</h1>
          <Divider />
          <br />
          <br />
          <div>Contenido del jugador</div>
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PlayerHome;
