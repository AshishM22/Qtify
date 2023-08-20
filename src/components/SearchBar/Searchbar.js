import search from "../../assets/Search.svg";
import "./SearchBar.css";

const SearchBar = ({ placeholder }) => {
  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="SearchField" />
      <button onClick={handleSubmit} type="submit" className="searchIcon">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
