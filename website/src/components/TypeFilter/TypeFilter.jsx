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

const TypeFilter = ({ type, setType, width }) => {
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

  const types = ["Diagrams", "Flashcards"];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      event.target.value,
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ width: { width } }}>
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type"
        value={type}
        label="Type"
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
                  borderRadius: 10,
                  color: "primary.text",
                  paddingX: 1,
                }}
              />
            ))}
          </Box>
        )}
      >
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeFilter;
