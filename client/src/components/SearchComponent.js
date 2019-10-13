import React, { Component } from "react";
import Container from "./Container"
import SearchForm from "./SearchForm";
import Results from "./Results";
import AddBookBtn from "./AddBookBtn";
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

//   saveBook = (id) =>{
//     console.log(this.state.results);
//     var bookArray = this.state.results
//     // var bookToSave = "";
//     for(var i = 0; i < 10; i++) {
//         // console.log(bookArray[i].volumeInfo);
//         if (id === bookArray[i].id) {
//             // console.log("The book to save is:" + JSON.stringify(bookArray[i].volumeInfo));
//             var bookToSave = {
//                 title: bookArray[i].volumeInfo.title,
//                 description: bookArray[i].volumeInfo.description,
//                 author: bookArray[i].volumeInfo.authors[0],
//                 link: bookArray[i].volumeInfo.previewLink,
//                 image: bookArray[i].volumeInfo.imageLinks.thumbnail
//             };
//             console.log("The book to save is: " + JSON.stringify(bookToSave));
//             API.saveBook(bookToSave)
//                 .then(res => console.log("You've saved this Book to your Books DB!"))
//                 .catch(err => console.log(err));
//         }
//     }

    

// }

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
            <div>
            <Results 
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            // getting this thumbnail to not be undefined was a pain in the ass
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
            link={book.volumeInfo.previewLink}
            // onClick={() => this.saveBook(book.id)}
            />
            <AddBookBtn
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            // getting this thumbnail to not be undefined was a pain in the ass
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
            link={book.volumeInfo.previewLink}
            />
           </div> 
          )
        })}
      </Container>
    );
  }
}

export default SearchComponent;