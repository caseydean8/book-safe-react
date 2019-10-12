import React from "react";
import './style.css'

function Results(props) {
    return (<div className="card">
        <img alt={props.title} className="img-fluid" src={props.image} />
        <ul className="social-list">
        <li><a href={props.link} className="social-link"><i className="fab fa-dribbble-square"></i></a></li>
        {/* <li><a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="#" class="social-link"><i class="fab fa-twitter-square"></i></a></li> */}
        </ul>
        <h2 className="profile-name">{props.authors}</h2>
        <p className="profile-position">{props.title}</p>
        <p className="profile-info">{props.description}</p>
    </div>
    )
}

export default Results;