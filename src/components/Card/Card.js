import React from "react";
import "./Card.css";
import { Tooltip, Chip, Box, Tabs, Tab } from "@mui/material";

const Card = ({ item, type }) => {
  if (type === "songs") {
    console.log(item);
    const { title, likes, image } = item;
    return (
      <div>
        <div className="card-container">
          <img src={image} alt="card-image" />
          <div className="card-container--body">
            <Chip label={`${likes} Likes`} size="small" className="chip" />
          </div>
        </div>

        <div className="card-title">{title}</div>
      </div>
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
