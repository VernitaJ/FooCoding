import React, { useState } from "react";
import { Card, CardBody, Fade, CardText, CardTitle, Button } from "reactstrap";

const Jokes = props => {
  const [fadeIn, setFadeIn] = useState(false);
  let { setup, punchline } = props.humor;

  const toggle = event => {
    console.log(fadeIn);
    setFadeIn(!fadeIn);
  };
  return (
    <Card>
      <CardBody>
        <CardTitle>{setup}</CardTitle>
        <Button color="secondary" onClick={toggle}>
          Magic
        </Button>
        <Fade in={fadeIn} className="my-2">
          <CardText>{punchline}</CardText>
        </Fade>
      </CardBody>
    </Card>
  );
};
export default Jokes;
