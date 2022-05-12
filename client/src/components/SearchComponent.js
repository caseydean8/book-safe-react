import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import API from "../utils/API";
import Axios from "axios";

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
            <Results
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              // getting this thumbnail to not be undefined was a pain in the ass
              image={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              link={book.volumeInfo.previewLink}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchComponent;
