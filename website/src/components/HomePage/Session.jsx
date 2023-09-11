import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
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
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useNavigate } from 'react-router-dom'

const Session = () => {
  const [session, setSession] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSession(event.target.value);
  };

  const StyledSelectSesh = styled(InputBase)({
    "& .MuiInputBase-input": {
      padding: "10px",
      borderRadius: 20,
      background: "#2E4F4F",
      position: "relative",
      color:"#CBE4DE",
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
    ]

    const donekeywords = [
      "polymers",
      "monosaccharides",
    ]

    const progress = [
     { name: "complete", number: 40, color: "#1E1E1E" },
     { name: "incomplete", number: 60, color: "#2E4F4F" }
    ]

    const simuls = [
      "dehydration & hydrolysis reaction",
      "fluid mosaic model",
    ]
    const Diagrams = () => {
      return (
        <div>
            <div className='completed'>
              {donekeywords.map((term) => (
                <div className="terms">- {term}</div>
              ))}
            </div>
            <div className='yettocomplete'>
             {keywords.map((term) => (
                <div className="terms">- {term}</div>
              ))}
            </div>
        </div>
      )
    }

    const Flashcards = () => {
      return (
        <PieChart
          className="flashcards"
          width={250}
          height={250}
          >
            <text x={125} y={125} dy={8} textAnchor="middle" fill="#CBE4DE" fontSize={20}>
              {progress[0].number}% learned
            </text>
            <Pie 
            data={progress}
            dataKey="number"
            outerRadius={125}
            innerRadius={85}
            startAngle={90}
            endAngle={540}
            fill="rgb(46,79,79)"
            stroke='none'>
              {progress.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
        </PieChart>
      )
    }

    const Simulations = () => {
      return (
        <div>
              {simuls.map((sim) => (
                <div className="sims">{sim}</div>
                // change to a button later
              ))}
        </div>
      )
    }
  
  return (
    <div className='sessioncontainer'>
      <div className='sindex'>
        <FormControl sx={{ minWidth: 120 }} size="small">
        <Select
          id="demo-simple-select-autowidth"
          value={session}
          onChange={handleChange}
          autoWidth
          label="Age"
          input={<StyledSelectSesh/>}
        >
          <MenuItem value="">
            <em>No session selected!</em>
          </MenuItem>
          <MenuItem value={10}>Session 3: Class Test</MenuItem>
          <MenuItem value={21}>Session 4: EOYS</MenuItem>
        </Select>
      </FormControl>
        <Button
        sx={{
          color: "#CBE4DE",
          backgroundColor: "rgb(20, 110, 114)",
          mx: 2,
          padding: 1,
          borderRadius: 7,
          textTransform: 'none',
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}
        onClick={navigate()}
        >
          <EditRoundedIcon sx={{ paddingRight: 1 }}/>
          Edit & Add
        </Button>
      </div>
        <body className='everythingcontainer'>
          <body className='diagramcontainer'>
              <Diagrams />
              <div className='diagramtitle'>Diagram</div>
          </body>
          <body className='flashcardcontainer'>
            <Flashcards />
            <div className='flashcardtitle'>Flashcards</div>
          </body>
          <body className='simulationcontainer'>
            <Simulations />
            <div className='simulationtitle'>Simulations</div>
          </body>
        </body>
    </div>
  )
}

export default Session