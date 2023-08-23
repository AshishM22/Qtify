import React from "react";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const SongsPage = ({ song, totalData }) => {
  return (
    <>
      <NavBar totalData={totalData} />
      <main>
        <img />
        <div className="song-data">
          <h2>{song.title}</h2>
          <p>{song.description}</p>
          <p>{}</p>
          <p>{song.follows}</p>
          <div className="song-button-group">
            <button>
              <FontAwesomeIcon icon={faShuffle} />
              Shuffle
            </button>
            <button>Add to Library</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SongsPage;
