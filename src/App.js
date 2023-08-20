import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import GridBox from "./components/GridBox/GridBox";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    const response = await fetchTopAlbums();
    console.log(response);
    setData(response);
  };
  return (
    <>
      <NavBar />
      <Hero />
      <GridBox title="Top Albums" data={data} />
    </>
  );
}
