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
        {/* <AddBookBtn
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        // getting this thumbnail to not be undefined was a pain in the ass
        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
        link={book.volumeInfo.previewLink} /> */}
    </div>
    )
}

export default Results;