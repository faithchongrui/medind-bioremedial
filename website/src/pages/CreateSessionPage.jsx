import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  FormHelperText,
  InputBase,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import { useNavigate } from "react-router-dom";

const CreateSessionPage = () => {
  const navigate = useNavigate();

  const [simulationSearchQuery, setSimulationSearchQuery] = useState("");
  const [activitySearchQuery, setActivitySearchQuery] = useState("");

  const FillField = styled("div")({
    // borderRadius: 10,
    padding: "1rem",
    paddingLeft: "3rem",
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "rgba(20, 110, 114, 0.1)",
    },
  });

  const StyledInputBase = styled(InputBase)({
    color: "#CBE4DE",
    borderBottom: "3px solid #CBE4DE",
    width: "100%",
  });

  return (
    <div>
      <Grid
        container
        spacing={2}
        columns={2}
        alignItems="center"
        sx={{
          padding: 3,
          paddingBottom: 3,
        }}
      >
        <Grid item xs={1}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              color: "#CBE4DE",
              fontSize: 25,
              // borderRadius: 10,
            }}
          >
            Add a New Session
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={1}
          columns={2}
          spacing={2}
          justifyContent="right"
        >
          <Grid item>
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#2C3333",
                color: "#CBE4DE",
                borderRadius: 10,
              }}
            >
              Create
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => navigate(-1)}
              sx={{
                textTransform: "none",
                backgroundColor: "#2C3333",
                color: "#C14058",
                borderRadius: 10,
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <FillField sx={{ px: 2, mx: 4 }}>
        <StyledInputBase
          type="text"
          placeholder="Enter a title, like 'Session 3: Class Test'"
          aria-describedby="standard-weight-helper-text"
          inputProps={{ "aria-label": "search" }}
          // onChange={}
          // value={simulationSearchQuery}
        />
        <FormHelperText
          id="standard-weight-helper-text"
          sx={{
            color: "#CBE4DE",
          }}
        >
          Title
        </FormHelperText>
      </FillField>
      <FillField sx={{ px: 2, mx: 4 }}>
        <StyledInputBase
          type="text"
          placeholder="Enter a description "
          aria-describedby="standard-weight-helper-text"
          inputProps={{ "aria-label": "search" }}
          // onChange={}
          // value={simulationSearchQuery}
        />
        <FormHelperText
          id="standard-weight-helper-text"
          sx={{
            color: "#CBE4DE",
          }}
        >
          Description (Optional)
        </FormHelperText>
      </FillField>
      <Typography
        sx={{
          width: "100%",
          // backgroundColor: "#2C3333",
          color: "#CBE4DE",
          fontSize: 15,
          mx: 6,
          mt: 1,
        }}
      >
        Click on the dropdown boxes to select which activities you want to focus
        on.
      </Typography>
      <Accordion
        sx={{
          // width: "80%",
          mt: 2,
          mx: 6,
          backgroundColor: "rgba(20, 110, 114, 0.1)",
          color: "#CBE4DE",
          // borderRadius: 5,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#CBE4DE" }} />}
          aria-controls="simulation-content"
          id="simulation-header"
        >
          <Typography>Simulations</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#CBE4DE",
          }}
        >
          <Box
            sx={{
              background: "rgba(20, 110, 114, 0.1)",
              borderRadius: 5,
              padding: 2,
              mb: 1,
            }}
          >
            <SearchBar searchQuery={simulationSearchQuery} setSearchQuery={setSimulationSearchQuery}/>
            {/* <UnitFilter width={"50%"} /> */}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          // width: "80%",
          mt: 2,
          mx: 6,
          backgroundColor: "rgba(20, 110, 114, 0.1)",
          color: "#CBE4DE",
          // borderRadius: 5,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#CBE4DE" }} />}
          aria-controls="simulation-content"
          id="simulation-header"
        >
          <Typography>Flashcards & Diagrams</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#CBE4DE",
          }}
        >
          <Box
            sx={{
              background: "rgba(20, 110, 114, 0.1)",
              borderRadius: 5,
              padding: 2,
              mb: 1,
            }}
          >
            <SearchBar searchQuery={activitySearchQuery} setSearchQuery={setActivitySearchQuery}/>
            {/* <UnitFilter width={"50%"} /> */}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box></Box>
    </div>
  );
};

export default CreateSessionPage;
