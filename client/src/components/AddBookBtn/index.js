import React, { Component } from "react";
import Button from "../Button";
import axios from "axios";

class AddBookBtn extends Component{
 
    postToDB = (props) => {
        var dbBook = {
          title: props.title,
          authors: props.authors,
          description: props.description,
          image: props.image,
          link: props.link
        }
    
        axios.post("/api/books", dbBook)
        .then( () => console.log(`${props.title} added to database`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </Button>
        </div>
        );
    }
  }

  export default AddBookBtn;