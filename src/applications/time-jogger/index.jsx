import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import TimerIcon from '@mui/icons-material/Timer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';

import * as api from './api';
import { ToolListItem } from '../../App';

function TimeJogger() {
  const [carNumber, setCarNumber] = useState(25);
  const [isCarZeroDueTimes, setIsCarZeroDueTimes] = useState(false);
  const [is24HourInput, setIs24HourInput] = useState(true);
  const [is24HourOutput, setIs24HourOutput] = useState(true);
  const [firstCarDueTime, setFirstCarDueTime] = useState(api.defaultDate);

  return (
    <>
    <FormControlLabel
        control={
          <Checkbox
            checked={is24HourInput}
            onChange={(e => setIs24HourInput(e.target.checked))}
          />
        }
        label="24 Hour Input"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={is24HourOutput}
            onChange={(e => setIs24HourOutput(e.target.checked))}
          />
        }
        label="24 Hour Output"
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={isCarZeroDueTimes}
            onChange={(e => setIsCarZeroDueTimes(e.target.checked))}
          />
        }
        label="Car 0 Due Times?"
      />
      <br />
      <br />
      <TextField
        error={carNumber < 0}
        label="Car Number"
        onChange={(e => setCarNumber(e.target.value))}
        type="number"
        value={carNumber}
      />
      <br />
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          ampm={!is24HourInput}
          label={`Car ${isCarZeroDueTimes ? 0 : 1} Due Time`}
          onChange={(newValue) => setFirstCarDueTime(newValue)}
          value={firstCarDueTime}
        />
        <br />
        <br />
        <TimePicker
          ampm={!is24HourOutput}
          label={`Car ${carNumber} Due Time`}
          readOnly
          value={api.calculateCarDueTime(firstCarDueTime, carNumber, isCarZeroDueTimes)}
        />
      </LocalizationProvider>
    </>
  );
}

function TimeJoggerListItem({ onClick, selected }) {
  return (
    <ToolListItem
      onClick={() => onClick(1)}
      selected={selected === 1}
      text='Time Card Jogging'>
      <TimerIcon />
    </ToolListItem>)
}

export { TimeJoggerListItem };
export default TimeJogger;
