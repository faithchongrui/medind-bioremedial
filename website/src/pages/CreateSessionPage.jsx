import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  FormHelperText,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../components/SearchBar/SearchBar";
import UnitFilter from "../components/UnitFilter/UnitFilter";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";
import SimulationPage from "./SimulationPage";
import ActivitiesPage from "./ActivitiesPage";

const FillField = styled("div")(({ theme }) => ({
  // borderRadius: 10,
  padding: "1rem",
  paddingLeft: "3rem",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.text,
  borderBottomWidth: "3px",
  borderBottomStyle: "solid",
  borderBottomColor: theme.palette.primary.text,
  width: "100%",
}));

const InputField = ({ text, setText, label, placeholder }) => {
  return (
    <FillField sx={{ px: 2, mx: 4 }}>
      <StyledInputBase
        type="text"
        placeholder={placeholder}
        aria-describedby="standard-weight-helper-text"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
        // value={simulationSearchQuery}
      />
      <FormHelperText
        id="standard-weight-helper-text"
        sx={ {color: "primary.text" }}
      >
        {label}
      </FormHelperText>
    </FillField>
  );
};

const CreateSessionPage = (placeholder) => {
  const navigate = useNavigate();

  const [simulationSearchQuery, setSimulationSearchQuery] = useState("");
  const [activitySearchQuery, setActivitySearchQuery] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addNewSession } = useSession();

  function handleSubmit(text, description) {
    addNewSession(text, description);
    navigate(-1);
  }

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
              color: "primary.text",
              fontSize: 25,
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
              onClick={() => handleSubmit(title, description)}
              sx={{
                textTransform: "none",
                backgroundColor: "primary.dark",
                color: "primary.text",
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
                backgroundColor: "primary.dark",
                color: "warning.main",
                borderRadius: 10,
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <InputField
        text={title}
        setText={setTitle}
        placeholder="Enter a title, like 'Session 3: Class Test'"
        label="Title"
      />
      <InputField
        text={description}
        setText={setDescription}
        placeholder="Enter a description"
        label="Description (Optional)"
      />
      <Typography
        sx={{
          width: "100%",
          color: "primary.text",
          fontSize: 15,
          mx: 6,
          mt: 1,
          boxShadow: "none",
        }}
      >
        Click on the dropdown boxes to select which activities you want to focus
        on.
      </Typography>
      <Accordion
        sx={{
          mt: 2,
          mx: 6,
          backgroundColor: "primary.transparency",
          color: "primary.text",
          borderRadius: 3,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.text" }} />}
          aria-controls="simulation-content"
          id="simulation-header"
        >
          <Typography>Simulations</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "primary.text" }}>
          <Box
            sx={{
              background: "primary.transparency",
              borderRadius: 5,
              padding: 2,
              mb: 1,
            }}
          >
            <SimulationPage
              searchQuery={simulationSearchQuery}
              setSearchQuery={setSimulationSearchQuery}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mt: 2,
          mx: 6,
          backgroundColor: "primary.transparency",
          color: "primary.text",
          borderRadius: 3,
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.text" }} />}
          aria-controls="simulation-content"
          id="simulation-header"
        >
          <Typography>Flashcards & Diagrams</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "primary.text" }}>
          <Box
            sx={{
              background: "primary.transparency",
              borderRadius: 5,
              padding: 2,
              mb: 1,
            }}
          >
            {/* <SearchBar
              searchQuery={activitySearchQuery}
              setSearchQuery={setActivitySearchQuery}
            /> */}
            <ActivitiesPage />
            {/* <UnitFilter width={"50%"} /> */}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box></Box>
    </div>
  );
};

export default CreateSessionPage;
