import React from "react";
import { Jumbotron } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Book Safe</h1>
        <p className="lead">Search for and save books you want!</p>
        <hr className="my-2" />
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Example;