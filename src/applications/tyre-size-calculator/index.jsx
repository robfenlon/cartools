import * as React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import { v1 } from 'uuid';

import { ToolListItem } from '../../App';
import * as api from './api';
import './index.css';

function TyreSize() {
  const [distanceUnit, setDistanceUnit] = useState('metric');
  const [rows, setRows] = useState([{
    id: v1(),
    profile: 45,
    radius: 15,
    width: 195
  }]);

  const singleRoadUnit = distanceUnit === 'metric' ? 'km' : 'mile';
  const singleDistanceUnit = distanceUnit === 'metric' ? 'mm' : '"';

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: v1(),
        profile: 45,
        radius: 15,
        width: 195
      } // add one new item at the end
    ])
  }

  const removeRow = id => {
    setRows(rows.filter((tyre) =>
      tyre.id !== id
    ));
  }

  const updateRow = (id, field, newValue) => {
    setRows(rows.map((tyre) => {
      if (tyre.id === id) {
        tyre[field] = newValue;
        return tyre;
      }
      return tyre;
    }));
  }

  return (
    <>
      <Typography variant='h6'>Tyre size calculator</Typography>
      <FormControl>
        <FormLabel>Output Unit</FormLabel>
        <RadioGroup row onChange={event => setDistanceUnit(event.target.value)} value={distanceUnit} >
          <FormControlLabel value="metric" control={<Radio />} label="Metric" />
          <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
        </RadioGroup>
      </FormControl>
      <table class="tyres">
        <thead>
          <tr>
            <th colSpan="5"></th>
            <th class="spacer"></th>
            <th>Sidewall</th>
            <th>Radius</th>
            <th>Diameter</th>
            <th>Circumference</th>
            <th>Revs/{singleRoadUnit}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((tyre) => {
            const { id, profile, radius, width } = tyre;

            return (
              <tr key={`row-${id}`} dataRowIndex={id}>
                <td style={{ paddingRight: '20px;' }}>
                  <IconButton onClick={() => removeRow(id)}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </td>
                <td>
                  <TextField
                    error={+width < 0}
                    onChange={(e => updateRow(id, 'width', e.target.value))}
                    type="number"
                    value={width}
                  />
                </td>
                <td>
                  <TextField
                    error={+profile < 0}
                    onChange={(e => updateRow(id, 'profile', e.target.value))}
                    type="number"
                    value={profile}
                  />
                </td>
                <td>
                  <span style={{ paddingLeft: '10px' }}>R</span>
                </td>
                <td>
                  <TextField
                    error={+radius < 0}
                    onChange={(e => updateRow(id, 'radius', e.target.value))}
                    type="number"
                    value={radius}
                  />
                </td>
                <td></td>
                <td>{api.getSidewall(tyre, distanceUnit)} {singleDistanceUnit}</td>
                <td>{api.getRadius(tyre, distanceUnit)} {singleDistanceUnit}</td>
                <td>{api.getDiameter(tyre, distanceUnit)} {singleDistanceUnit}</td>
                <td>{api.getCircumference(tyre, distanceUnit)} {singleDistanceUnit}</td>
                <td>{api.getRotationsPerKm(tyre)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <IconButton onClick={addRow}>
        <AddCircleOutlineIcon />
      </IconButton>
    </>
  );
}

function TyreSizeListItem({ onClick, selected }) {
  return (
    <ToolListItem
      onClick={() => onClick(3)}
      selected={selected === 3}
      text='Tyre Size Calculator'>
      <MotionPhotosOffIcon />
    </ToolListItem>)
}

export { TyreSizeListItem };
export default TyreSize;
