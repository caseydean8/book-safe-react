import React, { Component } from "react";
import Saved from "./Saved";
import Axios from "axios";

class SavedComponent extends Component {
  state = {
    savedBooks: [],
    initialized: true,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    Axios.get("/api/books")
      .then((res) => {
        this.setState({ savedBooks: res.data });
      })
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    Axios.delete(`/api/books/${id}`)
      .then(() => {
        this.getBooks();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.savedBooks.map((book) => {
          return (
            <Saved
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={() => this.deleteBook(book._id)}
            />
          );
        })}
      </div>
    );
  }
}

export default SavedComponent;
