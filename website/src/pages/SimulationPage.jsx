import { useState } from "react";
import React from 'react'
import {
  Grid,
  Button,
  Box,
  Typography,
  TextField,
  IconButton,
  styled,
  InputBase,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from '../components/HomePage/NavBar';
import SimulationCard from "../components/SimulationPage/SimulationCard";
import { debounce } from "lodash";

const SimulationPage = () => {

  const Search = styled('div')({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: "#2C3333",
    '&:hover': {
      backgroundColor: "#2E4F4F",
    },
    mx: "2rem",
    width: '100%',
  });

  const SearchIconWrapper = styled('div')({
    padding: "1rem",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  });

  const StyledInputBase = styled(InputBase)({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: "1rem",
      paddingLeft: "3rem",
    },
    width: '100%',
  });

  

  const sims = [
    { 
        title: "Fluid Mosaic Model", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.", 
        imageurl: "nil" 
    },
    { 
        title: "Diffusion", 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laboriosam cumque commodi illo quo temporibus! Atque, sed consequatur illum reprehenderit voluptatem voluptates laudantium saepe distinctio beatae veritatis obcaecati, aliquid doloremque.", 
        imageurl: "nil"
    },
    { 
      title: "Osmosis", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe temporibus voluptate doloribus labore assumenda laudantium corporis illo, vel unde rerum mollitia minus maxime, expedita tempora pariatur? Rem, repellendus voluptatibus.", 
      imageurl: "nil"
  },
]

  const [searchQuery, setSearchQuery] = useState("");
  // const dataFiltered = filterData(searchQuery, data);

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

  const debouncedHandleInput = debounce((value) => {
    setSearchQuery(value);
  }, 300);

  return (
    <Grid 
    container
      item
      xs={12}
      sx={{
        // backgroundColor: "rgb(30, 30, 30)",
        color: "#CBE4DE",
     }}>
      <NavBar/>
      <Box
      
      sx={{
        width: "100%",
        paddingX: "2rem",
      }}>
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
        }}>
         Browse Simulations
        </Typography>
      </Box>
      <Box
      sx={{
        mx: 10,
        width: "100%",
        
      }}>
        {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}> */}
        <Search sx={{ my: "1rem",}}>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="search"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => debouncedHandleInput(e.target.value)}
              value={searchQuery}
            />
          </Search>
        
      <div>
        {sims.map((sim) => (
          <Grid container
          spacing={0}
        
          sx={{
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "left",
            // flexWrap: "nowrap",
            // width: "fit-content",
            
          }}
          >
            <Grid item xs={12} sm={6} >
              <SimulationCard title={sim.title} description={sim.description} />
            </Grid>
         </Grid>
          ))}
      </div>
      </Box>
      
    </Grid>
  )
}

export default SimulationPage