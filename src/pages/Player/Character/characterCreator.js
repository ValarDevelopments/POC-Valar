import React from "react";
import Header from "../headerPlayer";
import Footer from "../../../Components/footer";
import { Button, Divider, Grid, Input, Dropdown } from "semantic-ui-react";
import {
  traitOptions,
  skillOptions,
  costOptions,
  sexoOptions,
} from "./characterVariables";
import { Link } from "react-router-dom";
import "../../../App.css";

function CharacterCreator() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1>Creador de Personajes</h1>
          <Divider />
          <br />
          <Grid centered>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="chess king"
                  iconPosition="left"
                  placeholder="Nombre"
                />
              </Grid.Column>

              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="birthday cake"
                  iconPosition="left"
                  placeholder="Edad"
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="shield"
                  iconPosition="left"
                  placeholder="Arma"
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  inverted
                  size="large"
                  icon="map signs"
                  iconPosition="left"
                  placeholder="Region"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Dropdown
                  placeholder="Habilidad 1"
                  search
                  selection
                  options={skillOptions}
                />
              </Grid.Column>

              <Grid.Column>
                <Dropdown
                  placeholder="Habilidad 2"
                  // defaultValue="null"
                  search
                  selection
                  options={skillOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Habilidad 3"
                  search
                  selection
                  options={skillOptions}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Dropdown
                  placeholder="Rasgo 1"
                  search
                  selection
                  options={traitOptions}
                />
              </Grid.Column>

              <Grid.Column>
                <Dropdown
                  placeholder="Rasgo 2"
                  search
                  selection
                  options={traitOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Rasgo Extra"
                  search
                  selection
                  options={traitOptions}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              <Grid.Column>
                <Dropdown
                  placeholder="Coste"
                  search
                  selection
                  options={costOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Sexo"
                  search
                  selection
                  options={sexoOptions}
                />
              </Grid.Column>
            </Grid.Row>

            <Button type="submit">Crear</Button>
          </Grid>
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CharacterCreator;
