import { React, useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import TypeFilter from "../components/TypeFilter/TypeFilter";
import ActivityCard from "../components/ActivityPage/ActivityCard";
import { db } from '../config/firebase'
import { doc, setDoc, collection, deleteDoc, getDoc, getDocs } from 'firebase/firestore';

const ActivitiesPage = () => {
  const [unit, setUnit] = useState([]);
  const [type, setType] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [unitContent, setUnitContent] = useState([]);

  const fetchUnitContent = async () => {
    try {
      const collectionRef = collection(db, "activities");
      const querySnapshot = await getDocs(collectionRef);
  
      const data = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const subCollectionRef = collection(doc.ref, 'keywords');
          const subCollectionSnapshot = await getDocs(subCollectionRef);
          const keywordsCount = subCollectionSnapshot.size;
          const documentData = {
            ...doc.data(),
            terms: keywordsCount,
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
    (async () => {
      const data = await fetchUnitContent();
      setUnitContent(data);
    })();
  }, []);

  const filterData = (query, data, unit) => {
    if (!query && unit.length === 0) {
      return data;
    } else {
      if (!query) {
        return data.filter((sim) => {
          return unit.includes(sim.unit);
        });
      }
      else {
        if (unit.length > 0) {
          const results = data.filter((sim) => {
            return (
              unit.includes(sim.unit) &&
              sim.set.toLowerCase().includes(query.toLowerCase())
            );
          });
          return results;
        }
        else {
          const results = data.filter((sim) => {
            return sim.set.toLowerCase().includes(query.toLowerCase())
          })
          return results
        }
      }
    }
  };

  const dataFiltered = filterData(searchQuery, unitContent, unit);

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
            color: "#CBE4DE",
            fontWeight: 600,
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
            width: "100%",
          }}
        >
          <div>
            <Grid container sx={{}}>
              {dataFiltered.map((unitcontent, index) => (
                <ActivityCard
                  key={index}
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
