import React from 'react'
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
  import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
  import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
  import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
  import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';
  import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { BorderAllOutlined, BorderTopRounded } from '@mui/icons-material';

const TemplateSimulation = () => {
    const StyledToolButtons = styled(IconButton)({
        color: "#CBE4DE",
        backgroundColor: "#2E4F4F",
        marginRight: 6,
        "&:hover": {
            backgroundColor: "rgb(20, 110, 114)",
          },
    })
  return (
    <Box container sx={{
        // flexGrow: 1,
    }}>
        <Toolbar
        sx={{
            height: 10,
            position: "fixed",
            width: "100%",
            zIndex: 1000,
        }}>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ 
                mt: 2,
                padding: 2,
                color: "#CBE4DE",
                backgroundColor: "#2E4F4F",
                "&:hover": {
                    backgroundColor: "rgb(20, 110, 114)",
                  },
                }}
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Toolbar>
        <Box>
            {/* insert sim here */}
        </Box>
        <Box>
        <Accordion
        sx={{
            width: "40%",
            position: "fixed",
            bottom: "0px",
            backgroundColor: "rgba(20, 110, 114, 0.2)",
            ".Mui-expanded":{
                backgroundColor: "rgba(44, 51, 51, 1)",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            }
        }}>
            
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
                <StyledToolButtons>
                    <ZoomOutMapRoundedIcon />
                </StyledToolButtons>
            </AccordionSummary>
            <AccordionDetails
            sx={{
                backgroundColor: "rgba(44, 51, 51, 1)",
                color: "#CBE4DE",
            }}>
            <Typography
            component="h1"
            variant="h5"
            sx={{
                fontSize: 20,
                fontWeight: 500,
            }}>TemplateSimulation</Typography>
            <Typography
          component="body"
          variant="body1"
          sx={{
            paddingX: 1,
            fontSize: 15,
            mt: 1,
            color: "#CBE4DE",
            backgroundColor: "inherit",
          }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate magni, inventore iste odio illo autem, natus non eaque neque quia, reiciendis at commodi recusandae id. Magnam, quod explicabo. Ut, iusto!
          </Typography>
            </AccordionDetails>
        </Accordion>
        </Box>
    </Box>
  )
}

export default TemplateSimulation