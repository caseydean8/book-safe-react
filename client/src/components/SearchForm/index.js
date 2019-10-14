import React from "react";
import Button from "../Button"
// import Axios from "axios";

function SearchForm(props) {

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        {/* <Button
        type="primary" 
        onclick={props.handleFormSubmit}>
          Search
        </Button> */}
        {/* <Button type="primary" onclick={onclick} >
          Saved Books
        </Button> */}
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
