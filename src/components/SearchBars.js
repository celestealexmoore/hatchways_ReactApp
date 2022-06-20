const SearchBars = (props) => {
  return (
    <header>
      <div className="searchParent">
        <input
          className="searchBar"
          type="text"
          placeholder="Search by name..."
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        ></input>
      </div>
    </header>
  );
};

export default SearchBars;
