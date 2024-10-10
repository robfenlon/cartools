import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import { useState } from 'react';

import { ToolListItem } from '../../App';
import * as api from './api';
import './index.css';
import headlightPattern from './headlight_pattern.png';

function HeadlightAiming() {
  const [distance, setDistance] = useState(0);
  const [height, setHeight] = useState(0);
  const [lampsDistance, setLampsDistance] = useState(0);

  let leftOffset = '- mm';
  let rightOffset = '- mm';
  let floorOffset = '- mm';

  if (!isNaN(distance) && !isNaN(height) && !isNaN(lampsDistance)) {
    leftOffset = api.calculateLeftOffset(distance, lampsDistance) + ' mm';
    rightOffset = api.calculateRightOffset(distance, lampsDistance) + ' mm';
    floorOffset = api.calculateFloorOffset(distance, height) + ' mm';
  }

  return (
    <>
      <Typography variant="h4">Headlight Aiming</Typography>
      <div style={{ position: 'absolute' }}>
        <TextField
          error={distance < 0}
          label="Distance (mm)"
          onChange={(e => setDistance(e.target.value))}
          type="number"
          value={distance}
          sx={{ backgroundColor: "white", position: "absolute", left: "20px", top: "300px" }}
        />
        <TextField
          error={height < 0}
          label="Height (mm)"
          onChange={(e => setHeight(e.target.value))}
          type="number"
          value={height}
          sx={{ backgroundColor: "white", position: "absolute", left: "410px", top: "314px" }}
        />
        <TextField
          error={lampsDistance < 0}
          label="Distance between lamps (mm)"
          onChange={(e => setLampsDistance(e.target.value))}
          type="number"
          value={lampsDistance}
          sx={{ backgroundColor: "white", position: "absolute", left: "500px", top: "100px" }}
        />
        <img alt="" src={headlightPattern} />
        <Typography align="center" variant="h6" sx={{color: "orange", position: "absolute", right: "680px", top: "210px"}}>{floorOffset}</Typography>
        <Typography align="center" variant="h6" sx={{color: "blue", position: "absolute", right: "500px", top: "135px"}}>{leftOffset}</Typography>
        <Typography align="center" variant="h6" sx={{color: "salmon", position: "absolute", left: "289px", top: "120px"}}>{rightOffset}</Typography>
      </div>
    </>
  );
}

function HeadlightAimingListItem({ onClick, selected }) {
  return (
    <ToolListItem
      onClick={() => onClick(2)}
      selected={selected === 2}
      text='Headlight Aiming'>
      <MinorCrashIcon />
    </ToolListItem>)
}

export { HeadlightAimingListItem };
export default HeadlightAiming;
