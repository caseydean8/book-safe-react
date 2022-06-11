import React from "react";
import AddBookBtn from "../AddBookBtn";

function ListItem(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <img alt={props.title} src={props.image} />
          </div>
          <div className="col text-center">
            <h2>{props.authors}</h2>
            <h4>{props.title}</h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.link}
            >
              get info
            </a>
          </div>
        </div>
        <div className="card-text">
          {props.description}
          <AddBookBtn
            title={props.title}
            authors={props.authors}
            description={props.description}
            image={props.image}
            link={props.link}
          />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
