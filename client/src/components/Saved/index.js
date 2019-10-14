import React from "react";
import './style.css'
import DeleteBtn from "../DeleteBtn";

function Saved(props) {
  return (<div className="card">
      <img alt={props.title} className="img-fluid" src={props.image} />
      <a href={props.link}>get info</a>
      <h4 className="profile-name">{props.authors}</h4>
      <h2 className="profile-position">{props.title}</h2>
      <p className="profile-info">{props.description}</p>
      <DeleteBtn
      onClick={props.onClick}
      />
  </div>
  )
}

export default Saved;
