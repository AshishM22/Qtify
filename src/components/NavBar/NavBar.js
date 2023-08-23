import "./NavBar.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/Searchbar";

const NavBar = ({ totalData }) => {
  return (
    <nav>
      <Logo />
      <SearchBar
        placeholder="Search a album of your Choice"
        totalData={totalData}
      />
      <Button> Give Feedback </Button>
    </nav>
  );
};

export default NavBar;
