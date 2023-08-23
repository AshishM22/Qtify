import React from "react";

const SongsDataTable = ({ songs }) => {
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Duration</th>
      </tr>
      {songs.map((song) => (
        <SongData />
      ))}
    </table>
  );
};

export default SongsDataTable;
