import { useState } from "react";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../components/HomePage/NavBar";
import SimulationCard from "../components/SimulationPage/SimulationCard";

const SimulationPage = () => {
  const images = require.context("../images", false);
  const imageList = images.keys().map((image) => images(image));

  const sims = [
    {
      title: "Fluid Mosaic Model",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.",
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

  const Search = styled("div")({
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#2C3333",
    "&:hover": {
      backgroundColor: "#2E4F4F",
    },
    mx: "2rem",
    width: "100%",
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

  
  const [unit, setUnit] = useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter(
        (sim) =>
          sim.title.toLowerCase().includes(query.toLowerCase()) ||
          sim.description.toLowerCase().includes(query.toLowerCase())
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
        color: "#CBE4DE",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingX: "2rem",
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
            paddingX: "2rem",
            // paddingBottom: "2rem",
          }}
        >
          Browse Simulations
        </Typography>
      </Box>
      <Box
        sx={{
          mx: 10,
          width: "100%",
        }}
      >
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
          variant="standard"
          sx={{
            width: "20%",
            backgroundColor: "#2E4F4F",
          }}
        >
          <InputLabel id="unit-label">Unit</InputLabel>
          <Select
            labelId="unit-label"
            id="unit"
            value={unit}
            label="Unit"
            onChange={handleChange}
            sx={{
              padding: 1,
              m: 1,
            }}
          >
            <MenuItem value={10}>
              <Typography
                sx={{
                  width: "fit-content",
                  backgroundColor: "#2C3333",
                  borderRadius: 10,
                  color: "#CBE4DE",
                  paddingX: 1,
                }}
              >
                U1.1 Biomolecules
              </Typography>
            </MenuItem>
            <MenuItem value={20}>
              <Typography
                sx={{
                  width: "fit-content",
                  backgroundColor: "#2C3333",
                  borderRadius: 10,
                  color: "#CBE4DE",
                  paddingX: 1,
                }}
              >
                U1.2 Eukaryotic Cells
              </Typography>
            </MenuItem>
            <MenuItem value={30}>
              <Typography
                sx={{
                  width: "fit-content",
                  backgroundColor: "#2C3333",
                  borderRadius: 10,
                  color: "#CBE4DE",
                  paddingX: 1,
                }}
              >
                U1.3 Prokaryotic Cells
              </Typography>
            </MenuItem>
          </Select>
        </FormControl>
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
          {imageList.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </Box>
    </Grid>
  );
};

export default SimulationPage;
