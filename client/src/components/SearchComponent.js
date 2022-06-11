import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ListItem from "./ListItem";
import API from "../utils/API";
import Axios from "axios";
import AddBookBtn from "./AddBookBtn";

class SearchComponent extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchAPI("breakfast of champions");
  }

  searchAPI = (query) => {
    API.search(query)
      .then((res) => {
        this.setState({ results: res.data.items });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchAPI(this.state.search);
  };

  getBooks = () => {
    Axios.get("/api/books")
      .then(console.log("getBooks triggered"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div id="search-container">
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          getBooks={this.getBooks}
        />

        {this.state.results.map((book) => {
          return (
            <div key={book.id} className="card">
              <div className="card-body">
                <ListItem
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  link={book.volumeInfo.previewLink}
                />
                <AddBookBtn
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  link={book.volumeInfo.previewLink}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchComponent;
