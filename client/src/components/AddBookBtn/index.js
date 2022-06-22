import React, { Component } from "react";
import Button from "../Button";
import axios from "axios";

class AddBookBtn extends Component {
  state = {
    savedStatus: "Save Book",
  };

  postToDB = (props) => {
    this.setState({ savedStatus: "Saving" });
    var dbBook = {
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    };

    axios
      .post("/api/books", dbBook)
      .then(() => {
        console.log(`${props.title} added to database`);
        this.setState({ savedStatus: "Saved!" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.postToDB(this.props);
          }}
        >
        {this.state.savedStatus}
        </Button>
      </div>
    );
  }
}

export default AddBookBtn;
