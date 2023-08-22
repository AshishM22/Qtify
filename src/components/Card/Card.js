import React from "react";
import "./Card.css";
import cardImage from "../../assets/CardImage.png"; // Import the image
import { Tooltip, Chip } from "@mui/material";

const Card = ({ item, type }) => {
  console.log(item);
  // if (item == undefined) return <h1>Some Error has occured</h1>;
  if (type === "songs") {
    const { title, likes, image, songs } = item;
    return (
      <>
        <Tooltip title={`${likes} likes`} placement="top" arrow>
          <div className="card-container">
            <img src={image} alt="card-image" />
            <div className="card-container--body">
              <Chip
                label={`${follows} Follows`}
                size="small"
                className="chip"
              />
            </div>
          </div>

          <div className="card-title">{title}</div>
        </Tooltip>
      </>
    );
  }
  const { title, follows, image, songs } = item;
  return (
    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
      <div className="card-container">
        <img src={image} alt="card-image" />
        <div className="card-container--body">
          <Chip label={`${follows} Follows`} size="small" className="chip" />
        </div>
      </div>

      <div className="card-title">{title}</div>
    </Tooltip>
  );
};

export default Card;
