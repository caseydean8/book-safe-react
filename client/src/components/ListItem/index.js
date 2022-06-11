import React from "react";

function ListItem(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="col text-center">
          <h2>{props.authors}</h2>
          <h4>{props.title}</h4>
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            get info
          </a>
        </div>
      </div>
      <div className="card-text">{props.description}</div>
    </div>
  );
}

export default ListItem;
