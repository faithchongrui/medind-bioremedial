import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputBase,
  styled,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../context/SessionContext";

const Session = () => {
  const { sessions } = useSession();
  const navigate = useNavigate();
  const [session, setSession] = useState("");

  const handleChange = (event) => {
    setSession(event.target.value);
  };

  const StyledSelectSesh = styled(InputBase)({
    "& .MuiInputBase-input": {
      padding: "10px",
      borderRadius: 20,
      background: "#2E4F4F",
      position: "relative",
      color: "#CBE4DE",
      "&:focus": {
        borderRadius: 20,
      },
    },
  });

  const keywords = [
    "disaccharides",
    "polysaccharides",
    "triglycerides",
    "cholesterol",
  ];

  const donekeywords = ["polymers", "monosaccharides"];

  const progress = [
    { name: "complete", number: 40, color: "#1E1E1E" },
    { name: "incomplete", number: 60, color: "#2E4F4F" },
  ];

  const empty = [
    { name: "complete", number: 0, color: "#1E1E1E" },
    { name: "incomplete", number: 100, color: "#2E4F4F" },
  ];

  const simuls = ["dehydration & hydrolysis reaction", "fluid mosaic model"];

  const Flashcards = () => {
    return (
      <div>
        <Grid
          item
          sx={{
            padding: "0.5rem",
            backgroundColor: "#2E4F4F",
            opacity: "40%",
            pl: "25px",
          }}
        >
          {session.length > 0 ? (
            donekeywords.map((term) => <div>- {term}</div>)
          ) : (
            <p> Session not selected! </p>
          )}
        </Grid>
        <Grid
          item
          sx={{
            padding: "0.5rem",
            backgroundColor: "#2E4F4F",
            pl: "25px",
          }}
        >
          {session.length > 0 ? (
            keywords.map((term) => <div>- {term}</div>)
          ) : (
            <p> Session not selected! </p>
          )}
        </Grid>
      </div>
    );
  };

  const Diagrams = () => {
    return (
      <PieChart width={250} height={250}>
        {session.length > 0 ? (
          <text
            x={125}
            y={125}
            dy={8}
            textAnchor="middle"
            fill="#CBE4DE"
            fontSize={20}
          >
            {progress[0].number}% learned
          </text>
        ) : (
          <text
            x={125}
            y={125}
            dy={8}
            textAnchor="middle"
            fill="#CBE4DE"
            fontSize={20}
          >
            No session!
          </text>
        )}
        <Pie
          data={session.length > 0 ? progress : empty}
          dataKey="number"
          outerRadius={125}
          innerRadius={85}
          startAngle={90}
          endAngle={540}
          fill="rgb(46,79,79)"
          stroke="none"
        >
          {progress.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    );
  };

  const Simulations = () => {
    return (
      <div>
        {session.length > 0 ? (
          simuls.map((sim) => (
            <Button
              sx={{
                color: "#CBE4DE",
                backgroundColor: "#2E4F4F",
                padding: "10%",
                mb: "1rem",
                textAlign: "center",
                width: "100%",
                textTransform: "none",
                fontSize: 15,
                lineHeight: 1.4,
                ":hover": {
                  backgroundColor: "rgb(20, 110, 114)",
                  boxShadow: "none",
                  fontWeight: "bold",
                },
              }}
            >
              {sim}
            </Button>
          ))
        ) : (
          <Button
            disabled
            sx={{
              color: "#CBE4DE",
              backgroundColor: "#2E4F4F",
              padding: "10%",
              mb: "1rem",
              textAlign: "center",
              width: "100%",
              textTransform: "none",
              fontSize: 15,
              lineHeight: 1.4,
            }}
          >
            Session not selected!
          </Button>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ backgroundColor: "#2C3333", p: "1rem" }}>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select
          id="demo-simple-select-autowidth"
          value={session}
          onChange={handleChange}
          autoWidth
          label="Age"
          input={<StyledSelectSesh />}
        >
          <MenuItem value="">
            <em>No session selected!</em>
          </MenuItem>
          {/* <MenuItem value={10}>Session 3: Class Test</MenuItem>
          <MenuItem value={21}>Session 4: EOYS</MenuItem> */}
          {sessions?.map((session) => {
            return <MenuItem value={session.id}>{session.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Button
        sx={{
          color: "#CBE4DE",
          backgroundColor: "rgb(20, 110, 114)",
          mx: 2,
          padding: 1,
          borderRadius: 7,
          textTransform: "none",
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}
        onClick={() => navigate("/csesh")}
      >
        <EditRoundedIcon sx={{ paddingRight: 1 }} />
        Edit & Add
      </Button>
      <Grid container columns={3} sx={{ py: 2 }}>
        <Grid
          item
          xs={1}
          sx={{
            color: "#CBE4DE",
            backgroundColor: "#2C3333",
            pr: 4,
          }}
        >
          <Flashcards />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            color: "#CBE4DE",
            backgroundColor: "#2C3333",
          }}
        >
          <Diagrams />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            color: "#CBE4DE",
            backgroundColor: "#2C3333",
          }}
        >
          <Simulations />
        </Grid>
      </Grid>
      <Grid container columns={3} sx={{ mt: 2 }}>
        <Grid item xs={1}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ color: "#CBE4DE", textAlign: "center" }}
          >
            Flashcards
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ color: "#CBE4DE", textAlign: "center" }}
          >
            Diagrams
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ color: "#CBE4DE", textAlign: "center" }}
          >
            Simulations
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Session;
