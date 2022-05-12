import React from "react";
import './style.css'
import AddBookBtn from "../AddBookBtn";

function Results(props) {
    return (<div className="col-12 book">
        <img alt={props.title} className="img-fluid" src={props.image} />
        <a target="_blank" rel="noopener noreferrer" href={props.link}>get info</a>
        <h4 className="profile-name">{props.authors}</h4>
        <h2 className="profile-position">{props.title}</h2>
        <p className="profile-info">{props.description}</p>
        <AddBookBtn
        title={props.title}
        authors={props.authors}
        description={props.description}
        image={props.image}
        link={props.link} 
        />
    </div>
    )
}

export default Results;