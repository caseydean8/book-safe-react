import React from "react";
import Button from "../Button";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="row justify-content-between">
        <div className="col-8">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          />
        </div>
        <div className="col search-btn-col">
          <Button onClick={props.handleFormSubmit}>Search</Button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
