import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import { Button, Divider } from "semantic-ui-react";
import "../../App.css";

function LogIn() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <div>LOG IN??????</div>
          <Divider />
          <Button inverted>LogIn</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LogIn;
