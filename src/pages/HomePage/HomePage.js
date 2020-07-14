import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider } from "semantic-ui-react";
import "../../App.css";

function HomePage() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <div>Hola Bienvenidos a la Region de Valar!!!</div>
          <Divider />
          <Button inverted>LogIn</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
