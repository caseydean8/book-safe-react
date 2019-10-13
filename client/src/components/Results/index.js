import React from "react";
// import Button from "../Button";
import './style.css'
import AddBookBtn from "../AddBookBtn";

function Results(props) {
    return (<div className="card">
        <img alt={props.title} className="img-fluid" src={props.image} />
        <ul className="social-list">
        <li><a href={props.link} className="social-link"><i className="fab fa-dribbble-square"></i></a></li>
        </ul>
        <h4 className="profile-name">{props.authors}</h4>
        <h2 className="profile-position">{props.title}</h2>
        <p className="profile-info">{props.description}</p>
        <AddBookBtn />
    </div>
    )
}

export default Results;