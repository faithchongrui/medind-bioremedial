import { React, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SimulationCard from "../components/SimulationPage/SimulationCard";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useLocation } from "react-router-dom";
import CheckboxCard from "../components/SimulationPage/CheckboxCard";

const SimulationPage = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const [unit, setUnit] = useState([]);
  const [sims, setSims] = useState([]);

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
  }, []);

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
        color: "primary.text",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingX: "4rem",
        }}
      >
        
        <Typography
          component="h1"
          variant= {location.pathname.includes("csesh") ? "h5" : "h4"}
          sx={{
            width: "100%",
            // backgroundColor: "primary.dark",
            color: "primary.text",
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
        <Grid container columns={2}>
            {dataFiltered.map(
              (sim) => {
                return location.pathname.includes("csesh") ? (
                  <CheckboxCard>
                    <SimulationCard
                      title={sim.title}
                      description={sim.description}
                      imageurl={sim.image}
                      sx={{ m: 0,height: "80%" }}
                    />
                  </CheckboxCard>
                ) : (
                  <Grid item xs={1}>
                  <SimulationCard
                    title={sim.title}
                    description={sim.description}
                    imageurl={sim.image}
                  />
                  </Grid>
                );
              }
              // <SimulationCard
              //   title={sim.title}
              //   description={sim.description}
              //   imageurl={sim.image}
              // />
            )}
          </Grid>
        </div>
      </Box>
    </Grid>
  );
};

export default SimulationPage;
