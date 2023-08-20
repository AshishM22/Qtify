import "./Card.css";
import cardImage from "../../assets/CardImage.png"; // Import the image

const Card = () => {
  return (
    <div className="card-container-main-section">
      <div className="card-container">
        <img src={cardImage} alt="card-image" />
        <div className="card-container--body">
          <span> 100 Follows </span>
        </div>
      </div>

      <div className="card-title">New Bollywood</div>
    </div>
  );
};

export default Card;
