import React from "react";
import "./style.css";

function BookSearch(props) {
  return (
    <div>
      <form className="book-search">
        <div className="form-group">
          <label htmlFor="search-field">Search</label>
          <input
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            type="search"
            className="form-control"
            id="search-field"
            aria-describedby="emailHelp"
            placeholder="Enter title, author, etc." />
        </div>
        <button
          onClick={props.onClick}
          type="submit"
          className="btn btn-primary">
          Search</button>
      </form>
    </div>
  );
}

export default BookSearch;
