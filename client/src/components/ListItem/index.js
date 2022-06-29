import React from "react";
import NoThumbnail from "./no-img.webp";

function ListItem(props) {
  // handle multiple authors
  const authorArr = props.authors;
  let authors = [];
  if (authorArr) {
    authorArr.forEach((author, index) => {
      authors.push(<h4 key={index}>{author}</h4>);
    });
  }
  console.log(`props.image`)
  console.log(props.image)
  console.log(`noThumbnail`);
  console.log(NoThumbnail);
  
  let showImg = NoThumbnail
  if (props.image) {
    showImg = props.image
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <img alt={props.title} src={showImg} />
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
