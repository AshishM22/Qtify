import search from "../../assets/Search.svg";
import "./SearchBar.css";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="SearchField" />
      <img src={search} alt="Search" className="searchIcon" />
    </div>
  );
};

export default SearchBar;
