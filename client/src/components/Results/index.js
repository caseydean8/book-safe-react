import React from "react";
// import Button from "../Button";
import './style.css'
import AddBookBtn from "../AddBookBtn";

function Results(props) {
    return (<div className="card">
        <img alt={props.title} className="img-fluid" src={props.image} />
        <a href={props.link}>get info</a>
        <h4 className="profile-name">{props.authors}</h4>
        <h2 className="profile-position">{props.title}</h2>
        <p className="profile-info">{props.description}</p>
        <AddBookBtn
        title={props.title}
        authors={props.authors}
        description={props.description}
        image={props.imageLinks ? props.imageLinks.thumbnail : ""}
        link={props.previewLink} 
        />
    </div>
    )
}

export default Results;