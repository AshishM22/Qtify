import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import "./CurrentSong.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CurrentSong = ({ song }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonStyles = {
    width: isSmallScreen ? "100%" : "676px",
    margin: "5px",
    cursor: "pointer",
  };
  return (
    <div className="current-song-container">
      <div className="current-song-text">
        <img
          src={song.image}
          alt={song.title}
          style={{ display: isSmallScreen ? "none" : null }}
        />
        <p style={{ display: isSmallScreen ? "none" : null }}>{song.title}</p>
      </div>
      <div className="progress-bar">
        <PauseCircleIcon fontSize="large" sx={{ cursor: "pointer" }} />

        <LinearProgress
          variant="buffer"
          value={25}
          maxValue={10}
          sx={{
            width: isSmallScreen ? "400px" : "676px",
            margin: "5px",
            cursor: "pointer",
          }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default CurrentSong;
