import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import {
  Grid,
  Button,
  Box,
  Typography,
} from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

const Session = () => {
  
    const keywords = [
      "polymers",
      "monosaccharides",
      "disaccharides",
      "polysaccharides",
      "triglycerides",
      "cholesterol",
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
              {keywords.map((term) => (
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
        <div className='sessionindex' style={{padding: "10px", align:"left"}}>
          Session 3: Class Test
        </div>
        <Button
        sx={{
          color: "#CBE4DE",
          backgroundColor: "#2E4F4F",
          borderRadius: 20,
          inlineSize: "fit-content",
          mx: 2,
          padding: 0,
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}>
          <PlayArrowRoundedIcon />
        </Button>
        <Button
        sx={{
          color: "#CBE4DE",
          backgroundColor: "#2E4F4F",
          borderRadius: 20,
          inlineSize: "fit-content",
          // mx: 2,
          padding: 0,
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}>
          <HistoryRoundedIcon />
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