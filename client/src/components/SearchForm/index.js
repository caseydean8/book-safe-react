import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="row">
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
        <div className="col">
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
