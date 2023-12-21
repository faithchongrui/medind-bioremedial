import React from 'react'
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import SimulationCard from '../SimulationPage/SimulationCard';

const SimulationSelection = ({children}) => {
  const arr = [1,2,3,4,5,6,7]
  // const rows = [
  //   { id: 1, col1: 'Hello', col2: 'World' },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];
  // const columns = [
  //   { field: 'col1', headerName: 'Column 1', width: 150 },
  //   { field: 'col2', headerName: 'Column 2', width: 150 },
  // ];
    return (
      <div style={{ height: 300, width: '100%' }}>
      {/* <DataGrid rows={rows} columns={columns} /> */}
      {/* {arr.map(() => (
        // <SimulationCard title={} />
      ))} */}
    </div>
    ) 
}

export default SimulationSelection;
