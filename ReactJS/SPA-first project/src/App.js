import "./styles.css";
import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Jokes from "./Components/Jokes";

export default function App() {
  const jokes = [
    {
      setup: "What time did the man go to the dentist?",
      punchline: "Tooth hurt-y"
    },
    {
      setup: "Did you hear about the guy who invented Lifesavers?",
      punchline: "They say he made a mint"
    },
    {
      setup: "Why do chicken coops only have two doors?",
      punchline: "Because if they had four, they would be chicken sedans!"
    },
    {
      setup: "Why did the Clydesdale give the pony a glass of water?",
      punchline: "Because he was a little horse!"
    }
  ];

  const jokeCards = jokes.map(humor => {
    return (
      <Col className="p-3" sm="4">
        <Jokes humor={humor} />
      </Col>
    );
  });

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Joke Cards</h1>
        <p className="lead">
          Welcome to the next billion dollar app taking the world by storm
        </p>
        <hr className="my-2" />
        <p>Prepare to be amused!</p>
        <p className="lead" />
      </Jumbotron>
      <Container fluid>
        <Row>{jokeCards}</Row>
      </Container>
    </div>
  );
}
