import React, { Component } from "react";
import Container from "./Container"
import SearchForm from "./SearchForm";
import Results from "./Results";
import API from "../utils/API";

class SearchComponent extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchAPI("godfather");
  }

  searchAPI = query => {
    console.log(query)
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.items })
        console.log(res.data.items)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchAPI(this.state.search);
  };

  render() {
    return (
      <Container>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.results.map(book => {
          return (
            <Results 
              key={book.id} 
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              // getting this thumbnail to not be undefined was a pain in the ass
              image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
              link={book.volumeInfo.previewLink}
            />
          )
        })}
      </Container>
    );
  }
}

export default SearchComponent;