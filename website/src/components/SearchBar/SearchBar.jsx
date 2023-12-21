import React from "react";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 10,
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      borderBottomColor: "primary.light",
    },
    mx: "2rem",
    width: "100%",
    borderBottom: "10px solid #2E4F4F",
    marginBottom: "1rem",
  }));
  // const Search = () => {
  //   return (
  //     <div sx={{
  //       position: "relative",
  //     borderRadius: 10,
  //     backgroundColor: "primary.dark",
  //     "&:hover": {
  //       borderBottomColor: "primary.light",
  //     },
  //     mx: "2rem",
  //     width: "100%",
  //     borderBottom: "10px solid #2E4F4F",
  //     marginBottom: "1rem",}} />
  //   )
  //   }

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

  return (
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
  );
};

export default SearchBar;
