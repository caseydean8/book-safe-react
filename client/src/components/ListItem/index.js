import React from "react";

function ListItem(props) {
  // handle multiple authors
  const authorArr = props.authors;
  let authors = [];
  if (authorArr) {
    authorArr.forEach((author, index) => {
      authors.push(<h4 key={index}>{author}</h4>);
    });
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="col text-center">
          <h2>{props.title}</h2>
          {authors}
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
