import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import "./CurrentSong.css";

const CurrentSong = ({ song }) => {
  console.log(song);
  return (
    <div className="current-song-container">
      <div className="current-song-text">
        <img src={song.image} alt={song.title} />
        <p>{song.title}</p>
      </div>
      <div className="progress-bar">
        <PauseCircleIcon fontSize="large" sx={{ cursor: "pointer" }} />

        <LinearProgress
          variant="buffer"
          value={25}
          maxValue={10}
          sx={{ width: "676px", margin: "5px", cursor: "pointer" }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default CurrentSong;
