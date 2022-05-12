import React from "react";
import { Jumbotron } from 'reactstrap';
import "./style.css"

const Example = () => {
  return (
      <Jumbotron>
        <h1 className="display-3 white">Book Safe</h1>
        <p className="lead white">Search for and save books you want!</p>
        <hr className="my-2 white" />
      </Jumbotron>
  );
};

export default Example;