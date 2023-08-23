import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import GridBox from "./components/GridBox/GridBox";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Accordian from "./components/Accordian/Accordian";

export default function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songs, setSongs] = useState([]);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    const topAlbumsResponse = await fetchTopAlbums();
    setTopAlbumsData(topAlbumsResponse);

    const newAlbumsResponse = await fetchNewAlbums();
    setNewAlbumsData(newAlbumsResponse);

    const songsResponse = await fetchSongs();
    setSongs(songsResponse);

    setTotalData([...topAlbumsResponse, ...newAlbumsResponse]);
  };
  return (
    <>
      <NavBar totalData={totalData} />
      <Hero />
      <GridBox title="Top Albums" data={topAlbumsData} />
      <GridBox title="New Albums" data={newAlbumsData} />
      <GridBox title="Songs" data={songs} type="songs" />
      <Accordian />
    </>
  );
}
