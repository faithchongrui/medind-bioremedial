import { React, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import TypeFilter from "../components/TypeFilter/TypeFilter";
import ActivityCard from "../components/ActivityPage/ActivityCard";

const ActivitiesPage = () => {
  const [unit, setUnit] = useState([]);
  const [type, setType] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const unitContent = [
    {
      unit: "U1.1 Biomolecules",
      terms: 12,
      set: "Biomolecule Functions",
    },
    {
      unit: "U1.2 Eukaryotic Cells",
      terms: 13,
      set: "Eukaryotic Functions",
    },
    {
      unit: "U1.3 Prokaryotic Cells",
      terms: 14,
      set: "Prokaryotic Functions",
    },
  ];

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

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter(
        (sim) => sim.title.toLowerCase().includes(query.toLowerCase())
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
        color: "#CBE4DE",
      }}
    >
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
          Browse Activities
        </Typography>
        <Box
          sx={{
            background: "rgba(20, 110, 114, 0.1)",
            borderRadius: 5,
            padding: 2,
            mb: 1,
          }}
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Grid container spacing={2} columns={3}>
            <Grid item xs={1}>
              <UnitFilter unit={unit} setUnit={setUnit} width={"100%"} />
            </Grid>
            <Grid item xs={1}>
              <TypeFilter type={type} setType={setType} width={"100%"} />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // mx: 10,
            width: "100%",
          }}
        >
          <div>
            <Grid container sx={{}}>
              {unitContent.map((unitcontent) => (
                <ActivityCard
                  unit={unitcontent.unit}
                  terms={unitcontent.terms}
                  set={unitcontent.set}
                />
              ))}
            </Grid>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};

export default ActivitiesPage;
