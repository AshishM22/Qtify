import "./Card.css";
import cardImage from "../../assets/CardImage.png"; // Import the image

const Card = ({ title, follows, image }) => {
  return (
    <div className="card-container-main-section">
      <div className="card-container">
        <img src={image} alt="card-image" />
        <div className="card-container--body">
          <span> {follows} </span>
        </div>
      </div>

      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
