import React from "react";
import Typography from "@mui/material/Typography";
import "./Accordian.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordian-faq-main-container">
      <h2>FAQs</h2>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          width: "70vw",
          backgroundColor: "#121212",
          color: "#FFF",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: "40px" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            border: "1px solid #FFF",
            borderRadius: "10px",
          }}
        >
          <Typography>Is Qtify free to use</Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: "#FFF",
            color: "#121212",
            borerRadius: "0 0 10px 10px",
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          width: "70vw",
          backgroundColor: "#121212",
          color: "#FFF",
          marginBottom: "5rem",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#34C94B", fontSize: "40px" }} />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            border: "1px solid #FFF",
            borderRadius: "10px",
          }}
        >
          <Typography>Can I download and listen to songs offline </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#FFF",
            color: "#121212",
            borerRadius: "0 0 10px 10px",
            marginBottom: "2rem",
          }}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
