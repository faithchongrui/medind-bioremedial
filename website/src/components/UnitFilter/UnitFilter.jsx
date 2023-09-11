import { React, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  styled,
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
} from "@mui/material";

const UnitFilter = ({ unit, setUnit, width }) => {
  const StyledSelectInput = styled(InputBase)({
    "& .MuiInputBase-input": {
      padding: "1rem",
      borderRadius: 10,
      background: "#2E4F4F",
      position: "relative",
      "&:hover": {
        // borderStyle:'none',
        borderRadius: 10,
        color: "white",
      },
      "&:focus": {
        borderRadius: 10,
        color: "white",
      },
    },
    "&.MuiInputLabel-root": {
      color: "white",
      background: "#2E4F4F",
    },
    "&.MuiSelect-icon": {
      color: "white",
    },
  });

  const units = [
    "U1.1 Biomolecules",
    "U1.2 Eukaryotic Cells",
    "U1.3 Prokaryotic Cells",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUnit(
      event.target.value,
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ width: { width } }}>
      <InputLabel id="unit-label">Unit</InputLabel>
      <Select
        labelId="unit-label"
        id="unit"
        value={unit}
        label="Unit"
        onChange={handleChange}
        multiple
        input={<StyledSelectInput />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                sx={{
                  width: "fit-content",
                  backgroundColor: "rgb(20, 110, 114)",
                  borderRadius: 10,
                  color: "#CBE4DE",
                  paddingX: 1,
                }}
              />
            ))}
          </Box>
        )}
      >
        {units.map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UnitFilter;
