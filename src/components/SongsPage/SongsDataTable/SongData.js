import React from "react";

const SongData = ({ song }) => {
  return (
    <tr>
      <td>
        <img src={SongData.image} />
      </td>
      <td>{song.name}</td>
      <td>song.duration</td>
    </tr>
  );
};

export default SongData;
