import React, { useEffect } from "react";
import { useState } from "react";
import "./GridBox.css";
import Card from "../Card/Card";

function GridBox({ title, data }) {
  const [buttonText, setButtonText] = useState("Show all");

  const handleToggle = () => {
    if (buttonText === "Show all") setButtonText("Collapse");
    else setButtonText("Show all");
  };

  return (
    <>
      <div className="grid-box">
        <h3>{title}</h3>
        <button onClick={handleToggle}>{buttonText}</button>
      </div>
      <div className="grid-container">
        {data.map((item) => (
          <Card title={item.title} follows={item.follows} image={item.image} />
        ))}
      </div>
    </>
  );
}

export default GridBox;
