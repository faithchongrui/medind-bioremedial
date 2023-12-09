import { React, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SimulationCard from "../components/SimulationPage/SimulationCard";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const SimulationPage = () => {
  const [unit, setUnit] = useState([]);
  const [sims, setSims] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSimulations = async () => {
    try {
      const collectionRef = collection(db, "simulations");
      const querySnapshot = await getDocs(collectionRef);

      const data = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const documentData = {
            ...doc.data(),
          };
          return documentData;
        })
      );

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSimulations()
      .then((data) => {
        setSims(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(searchQuery);
  }, [searchQuery]);

  const filterData = (query, data, unit) => {
    if (!query && unit.length === 0) {
      return data;
    } else {
      if (!query) {
        return data.filter((sim) => {
          return unit.includes(sim.unit);
        });
      } else {
        if (unit.length > 0) {
          const results = data.filter((sim) => {
            return (
              unit.includes(sim.unit) &&
              sim.title.toLowerCase().includes(query.toLowerCase())
            );
          });
          return results;
        } else {
          const results = data.filter((sim) => {
            return sim.title.toLowerCase().includes(query.toLowerCase());
          });
          return results;
        }
      }
    }
  };

  const dataFiltered = filterData(searchQuery, sims, unit);

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
          Browse Simulations
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
          <UnitFilter unit={unit} setUnit={setUnit} width={"50%"} />
        </Box>
      </Box>
      <Box
        sx={{
          mx: 10,
          width: "100%",
        }}
      >
        <div>
          <Grid container sx={{}}>
            {dataFiltered.map((sim) => (
              <SimulationCard
                title={sim.title}
                description={sim.description}
                imageurl={sim.image}
              />
            ))}
          </Grid>
        </div>
      </Box>
    </Grid>
  );
};

export default SimulationPage;
