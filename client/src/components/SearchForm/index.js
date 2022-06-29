import React from "react";
import Button from "../Button";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="row with-margin">
        <div className="col-lg-12">
          <div className="input-group">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for a Book"
              id="search"
            />
            <span className="input-group-btn">
              <Button onClick={props.handleFormSubmit}>Search</Button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
