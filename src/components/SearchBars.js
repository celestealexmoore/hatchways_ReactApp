import React from "react";

const searchBars = () => (
  <header>
    <div className="searchParent">
      <input
        className="searchBar"
        type="text"
        placeholder="Search by name..."
      ></input>
    </div>

    <div className="searchParent">
      <input
        className="searchBar"
        type="text"
        placeholder="Search by tag..."
      ></input>
    </div>
  </header>
);

export default searchBars;
