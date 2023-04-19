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
    const [shiftChange, setShiftChange] = useState("")

    function changeShift(){
        console.log("CurrentShift: "+shiftChange)

    }
  return (
    <Container>
      <ShiftContainer inputColor={getColor(`${shift}`, state.settings)}>
        <button onClick={handleEditToggle}>{shift}</button>
      </ShiftContainer>
      <EditWindow
              open={open}
              inputColor={getColor(`${shift}`, state.settings)}
      >
        <Heading>Edit</Heading>
        <p>Current shift: {shift}</p>
        <p>Change shift to: </p>
              <EditShift value={shiftChange} onChange={(e) => setShiftChange(e.target.value)}>
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
`;
const ShiftContainer = styled.div`
  background-color: ${(props) => props.inputColor || "whitesmoke"};
  height: 30px;
  width: 30px;
  border-style: solid;
  text-align: center;
  font-weight: 800;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1em;
  padding-left: 2px;
  padding-right: 4px;
  font-size: 1.5em;
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
  width: 200px;
  height: ${(props) => (props.open ? "200px" : "0")};
  background-color: ${(props) => props.inputColor || "darkgrey"};
  z-index: 20;
  font-size: 1em;
  display: block;

  overflow: hidden;
  transform: all 0.3s;
`;

const Heading = styled.h4`
  margin: 0;
`;
