import React from "react";
import Button from "../Button";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast } from 'react-toastify';

class AddBookBtn extends React.Component{
 
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