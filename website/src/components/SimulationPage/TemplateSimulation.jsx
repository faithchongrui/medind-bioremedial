import React, { useEffect, useState } from "react";
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
  Accordion,
  Toolbar,
  IconButton,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { images } from "../../config/firebase";

const fetchImage = async (image) => {
  const pathReference = ref(images, image);
  const imageURL = await getDownloadURL(pathReference);
  return await imageURL;
};

const TemplateSimulation = ({ sims }) => {
  const [image, setImage] = useState();
  const { id } = useParams();
  const simulation = sims.find((sim) => sim.title === id);
  console.log(simulation.image);

  useEffect(() => {
    (async () => {
      const image = await fetchImage(simulation.image);
      console.log(image);
      setImage(image);
    })();
  }, []);

  const navigate = useNavigate();

  const StyledToolButtons = styled(IconButton)({
    color: "#CBE4DE",
    backgroundColor: "#2E4F4F",
    marginRight: 6,
    "&:hover": {
      backgroundColor: "rgb(20, 110, 114)",
    },
  });

  const [expand, setExpand] = useState(false);

  const toggleAccordion = () => {
    setExpand((prev) => !prev);
  };

  if (!simulation) {
    return <div> Simulation not found </div>;
  }

  return (
    <Box container>
      <Toolbar
        sx={{
          height: 10,
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{
            mt: 2,
            padding: 2,
            color: "primary.text",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </Toolbar>
      <Box>
        <img src={image} />
      </Box>
      <Box>
        <Accordion
          expanded={expand}
          sx={{
            width: "40%",
            position: "fixed",
            bottom: "0px",
            backgroundColor: "rgba(20, 110, 114, 0.2)",
            ".Mui-expanded": {
              backgroundColor: "rgba(44, 51, 51, 1)",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
        >
          <AccordionSummary>
            <StyledToolButtons>
              <ZoomInRoundedIcon />
            </StyledToolButtons>
            <StyledToolButtons>
              <ZoomOutRoundedIcon />
            </StyledToolButtons>
            <StyledToolButtons>
              <PlayArrowRoundedIcon />
            </StyledToolButtons>
            <StyledToolButtons onClick={toggleAccordion}>
              <ZoomOutMapRoundedIcon />
            </StyledToolButtons>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "rgba(44, 51, 51, 1)",
              color: "primary.text",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {simulation.title}
            </Typography>
            <Typography
              component="body"
              variant="body1"
              sx={{
                paddingX: 1,
                fontSize: 15,
                mt: 1,
                color: "primary.text",
                backgroundColor: "inherit",
              }}
            >
              {simulation.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default TemplateSimulation;
