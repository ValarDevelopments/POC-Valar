import React from "react";
import Header from "../headerPlayer";
import Footer from "../../../Components/footer";
import { Divider, Card, Image, Table } from "semantic-ui-react";
import logo from "../../../Images/medieval-soldier4.jpg";
import { Link } from "react-router-dom";
import "../../../App.css";

function CharacterShow() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <div className="App-center">
          <h1>Personajes pertenecientes a tu faccion</h1>
          <Divider />
          <br />
          <br />
          <div>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Image floated="left" size="mini" src={logo} />
                  <Card.Header>Robin Laxer</Card.Header>
                  <Card.Meta>Arquero</Card.Meta>
                  <Card.Description>Hijos del Hierro </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Table basic="very">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Rasgo 1</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo 2</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo +</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo +</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo -</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo -</Table.HeaderCell>
                        <Table.HeaderCell>Rasgo Extra</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Educacion militar</Table.Cell>
                        <Table.Cell>Tactico</Table.Cell>
                        <Table.Cell>Atletico</Table.Cell>
                        <Table.Cell>Duelista multiple</Table.Cell>
                        <Table.Cell>Huraño</Table.Cell>
                        <Table.Cell>Supersticioso</Table.Cell>
                        <Table.Cell></Table.Cell>
                      </Table.Row>
                    </Table.Body>
                    <br />
                    <br />
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Com</Table.HeaderCell>
                        <Table.HeaderCell>Vit</Table.HeaderCell>
                        <Table.HeaderCell>Dip</Table.HeaderCell>
                        <Table.HeaderCell>Adm</Table.HeaderCell>
                        <Table.HeaderCell>Esp</Table.HeaderCell>
                        <Table.HeaderCell>Est</Table.HeaderCell>
                        <Table.HeaderCell>Alm</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell style={{ color: "red" }}>inutil</Table.Cell>
                        <Table.Cell style={{ color: "red" }}>-1</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>6</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CharacterShow;
