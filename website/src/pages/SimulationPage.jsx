import { useState, useEffect } from "react";
import React from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../components/HomePage/NavBar";
import SimulationCard from "../components/SimulationPage/SimulationCard";
import fs from "fs";
import path from "path";
import { BorderColor } from "@mui/icons-material";

const SimulationPage = () => {
  const [filePaths, setFilePaths] = useState([]);

  const FileList = () => {
    useEffect(() => {
      const folderPath = "../images";
      const files = fs.readdirSync(folderPath);

      const filePathsArray = files.map((file) => path.join(folderPath, file));
      setFilePaths(filePathsArray);
    }, []);
  };

  const Search = styled("div")({
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#2C3333",
    "&:hover": {
      borderBottomColor: "rgb(20, 110, 114)",
    },
    mx: "2rem",
    width: "100%",
    borderBottom: "10px solid #2E4F4F",

  });

  const SearchIconWrapper = styled("div")({
    padding: "1rem",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const StyledInputBase = styled(InputBase)({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: "1rem",
      paddingLeft: "3rem",
    },
    width: "100%",
  });

  const StyledSelectInput = styled(InputBase)({
    "& .MuiInputBase-input": {
      padding: "1rem",
      borderRadius: 10,
      background: '#2E4F4F',
      border: '1px solid #2C33',
      position: 'relative',
              "&:hover":{
                // borderStyle:'none',
                borderRadius: 10,
                color: "white",
              },
      "&:focus":{
        borderRadius: 10,
        color: "white",
      },
    },
    "&.MuiInputLabel-root": {
      color: "white",
      background: '#2E4F4F',
    },
    "&.MuiSelect-icon": {
      color: "white",
    }
  });

  const sims = [
    {
      title: "Fluid Mosaic Model",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.",
      imageurl: "website/src/images/2.png",
    },
    {
      title: "Diffusion",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laboriosam cumque commodi illo quo temporibus! Atque, sed consequatur illum reprehenderit voluptatem voluptates laudantium saepe distinctio beatae veritatis obcaecati, aliquid doloremque.",
      imageurl: "website/src/images/2.png",
    },
    {
      title: "Osmosis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe temporibus voluptate doloribus labore assumenda laudantium corporis illo, vel unde rerum mollitia minus maxime, expedita tempora pariatur? Rem, repellendus voluptatibus.",
      imageurl: "website/src/images/2.png",
    },
  ];

  const units = [
    "U1.1 Biomolecules",
    "U1.2 Eukaryotic Cells",
    "U1.3 Prokaryotic Cells",
  ]
  const [unit, setUnit] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUnit(
      event.target.value,
      typeof value === 'string' ? value.split(',') : value
      );
  };

  const [searchQuery, setSearchQuery] = useState("");
  
  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter(
        (sim) =>
          sim.title.toLowerCase().includes(query.toLowerCase())
          // sim.description.toLowerCase().includes(query.toLowerCase())
      );
    }
  };

  const dataFiltered = filterData(searchQuery, sims);

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        // backgroundColor: "rgb(30, 30, 30)",
        color: "#CBE4DE",
      }}
    >
      <NavBar />
      <Box
        sx={{
          width: "100%",
          paddingX: "5rem",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            // backgroundColor: "#2C3333",
            color: "#CBE4DE",
            fontWeight: 600,
            // paddingX: 1,
            paddingBottom: 2,
          }}
        >
          Browse Simulations
        </Typography>
        <Box
        sx={{
          background: "rgba(20, 110, 114, 0.1)",
          // opacity: 0.1,
          borderRadius: 5,
          padding: 2,
          mb: 1,
        }}>
        <Search sx={{ my: "1rem" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            type="text"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            autoFocus={true}
          />
        </Search>
        <FormControl
          sx={{
            width: "50%",
            // backgroundColor: "#2E4F4F",
          }}
        >
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
              <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} 
                  sx={{
                    width: "fit-content",
                    backgroundColor: "rgb(20, 110, 114)",
                    borderRadius: 10,
                    color: "#CBE4DE",
                    paddingX: 1,
                  }}/>
                ))}
              </Box>
            )}
          >
            {units.map((unit) => (
            <MenuItem
              key={unit}
              value={unit}
            >
              {unit}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          mx: 10,
          width: "100%",
        }}> 
        <div>
          <Grid container sx={{}}>
            {dataFiltered.map((sim) => (
              <SimulationCard
                title={sim.title}
                description={sim.description}
                imageurl={sim.imageurl}
              />
            ))}
          </Grid>
          <ul>
            {filePaths.map((filePath) => (
              <li key={filePath}>{filePath}</li>
            ))}
          </ul>
        </div>
      </Box>
    </Grid>
  );
};

export default SimulationPage;
