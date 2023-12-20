import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SessionsSearchBar = ({ searchQuery, setSearchQuery }) => {
  const Search = styled("div")({
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#2C3333",
    color: "#CBE4DE",
    "&:hover": {
      backgroundColor: "#2E4F4F",
    },
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
      padding: 9.5,
      paddingLeft: "3rem",
    },
    // width: "100%",
  });

  return (
    <Search sx={{ my: "1rem" }}>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "primary.text" }} />
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

export default SessionsSearchBar;
