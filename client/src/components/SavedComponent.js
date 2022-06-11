import React, { Component } from "react";
import ListItem from "./ListItem";
import DeleteBtn from "./DeleteBtn";
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
    console.log(this.state.savedBooks);
    return (
      <div>
        {this.state.savedBooks.map((book) => {
          return (
            <div key={book._id} className="card">
              <div className="card-body">
                <ListItem
                  key={book._id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                />
                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SavedComponent;
