import React from "react";

const searchBars = () => (
  <header>
    <div class="searchParent">
      <input
        class="searchBar"
        type="text"
        placeholder="Search by name..."
      ></input>
    </div>

    <div class="searchParent">
      <input
        class="searchBar"
        type="text"
        placeholder="Search by tag..."
      ></input>
    </div>
  </header>
);

export default searchBars;
