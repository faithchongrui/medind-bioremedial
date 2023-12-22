import React, { useState } from "react";
import { Checkbox, Grid } from "@mui/material";
import SimulationCard from "./SimulationCard"; // Assuming the path to your SimulationCard component

const CheckboxCard = ({ children, onCheckboxChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (onCheckboxChange) {
      onCheckboxChange(!isChecked);
    }
  };

  const disableCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Grid container sx={{
      borderRadius: 5,
      mb: 1,
      backgroundColor: isChecked ? "primary.transparency" : "inherit"
    }}>
      <Grid item xs={1} sx={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          }}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} sx={{
          color: "primary.text",
          "&.Mui-checked": { color: "primary.text" },
          '& .MuiSvgIcon-root': { fontSize: 40 },
        }}/>
      </Grid>
      <Grid item xs={11} onClick={disableCardClick}>
        {React.cloneElement(children, {
          // Remove the Link component
          to: null,
          style: { cursor: "default" }, // Optionally change cursor to default
          // Pass other props to the SimulationCard component
          onClick: null, // Disable the onClick function
        })}
      </Grid>
    </Grid>
  );
};

export default CheckboxCard;
