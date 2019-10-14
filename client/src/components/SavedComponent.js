import React, { Component } from "react";
import Container from "./Container";
import Saved from "./Saved";
import Axios from "axios";

class SavedComponent extends Component {
    state = {
        savedBooks: [],
        initialized: true
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        Axios.get("/api/books")
        .then(res => {
            this.setState({ savedBooks: res.data})
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    deleteBook = id => {
        console.log(id);
        Axios.delete(`/api/books/${id}`)
        .then(() => {
          this.getBooks()
          console.log(`book ${id} deleted`)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {this.state.savedBooks.map(book => {
                    console.log(book)
                    return (
                        <Saved
                        key={book.id} 
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        onClick={() => this.deleteBook(book._id)}
                        />
                    )
                })}
            </Container>
        )
    }
}

export default SavedComponent;
