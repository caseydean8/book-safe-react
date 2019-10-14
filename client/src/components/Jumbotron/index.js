import React from "react";
import { Jumbotron } from 'reactstrap';
import "./style.css"

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 white">Book Safe</h1>
        <p className="lead white">Search for and save books you want!</p>
        <hr className="my-2 white" />
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Example;