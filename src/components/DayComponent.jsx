import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { shiftReducer, INITIALSTATE } from "../shiftReducer";

export default function DayComponent({ shift }) {
  const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);
  function getColor(shift, settings) {
    var color = [...settings.shiftColors];
    let newColor = color.find((item) => item.shift === `${shift}`).color;
    return newColor;
  }
  const [open, setOpen] = useState("");
  function handleEditToggle(e) {
    e.preventDefault();
    open ? setOpen(!open) : setOpen(true);
    return open;
  }
  const [shiftChange, setShiftChange] = useState("");

  function changeShift() {
    console.log("CurrentShift: " + shiftChange);
  }
  return (
    <Container>
      <ShiftContainer inputColor={getColor(`${shift}`, state.settings)}>
        <StyledButton onClick={handleEditToggle}>{shift}</StyledButton>
      </ShiftContainer>
      <EditWindow open={open} inputColor={getColor(`${shift}`, state.settings)}>
        <Heading>Edit</Heading>
        <p>Current shift: {shift}</p>
        <p>Change shift to: </p>
        <EditShift
          value={shiftChange}
          onChange={(e) => setShiftChange(e.target.value)}
        >
          <option value="">Choose Shift</option>
          {state.settings.shiftColors.map((item) => {
            return <option value={item.shift}>{item.shift}</option>;
          })}
        </EditShift>
        <br />
        <br />
        <button onClick={changeShift}>Change Shift</button>
      </EditWindow>
    </Container>
  );
}

const Container = styled.div`
position: relative;
  width: 100%;
  height: 100%;
`;
const ShiftContainer = styled.div`
  background-color: ${(props) => props.inputColor || "whitesmoke"};
  height: auto;
  width: auto;
  border-style: solid;
  text-align: center;
  font-weight: 800;

  margin: 0;
  z-index: 20;
`;
const EditShift = styled.select`
  color: black;
  text-align: center;
  font-weight: 600;
`;

const EditWindow = styled.div`
  position: absolute;
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props) => (props.open ? "1" : "0")};
  padding-top: 0px;
  text-align: center;
  margin: 0;
  color: #0b0b0b;
  width: 500%;
  height: ${(props) => (props.open ? "800%" : "0")};
  background-color: ${(props) => props.inputColor || "darkgrey"};
  z-index: 20;
  
  overflow: hidden;
  transform: all 0.3s;
`;

const Heading = styled.h4`
  margin: 0;
`;
const StyledButton = styled.button`
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1vw;
`;
