const SearchBarOptionsTotalData = ({ item }) => {
  return (
    <a>
      <li className="input-options-list">
        <div className="mini-container">
          <img src={item.image}></img>
          <h3>{item.title}</h3>
        </div>

        <p>{item.follows} Follows</p>
      </li>
    </a>
  );
};

export default SearchBarOptionsTotalData;
