import React, { useState } from "react";
import { Checkbox, Grid } from "@mui/material";
import { useSession } from "../../context/SessionContext";

const CheckboxCard = ({ children, value, type }) => {
  const [isChecked, setChecked] = useState(false);
  const { newSession, setNewSession } = useSession();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    const alreadyContains = newSession[type].includes(value)

    if (alreadyContains) {
      setNewSession((prevSelected) => {
        const newSelected = prevSelected[type].filter((item) => item !== value);
        return { ...prevSelected, [type]: newSelected };
      });
    }
    else {
      setNewSession({ ...newSession, [type]: [...newSession[type], value] });
    }
  };

  const disableCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Grid
      container
      sx={{
        borderRadius: 5,
        mb: 1,
        backgroundColor: isChecked ? "primary.transparency" : "inherit",
      }}
    >
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Checkbox
          value={value}
          checked={isChecked}
          onChange={handleCheckboxChange}
          sx={{
            color: "primary.text",
            "&.Mui-checked": { color: "primary.text" },
            "& .MuiSvgIcon-root": { fontSize: 40 },
          }}
        />
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
