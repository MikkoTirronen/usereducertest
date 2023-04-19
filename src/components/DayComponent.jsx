import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { shiftReducer, INITIALSTATE } from "../shiftReducer";

export default function DayComponent({ shift }) {
  const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);
  console.log(state.settings);
  function getColor(shift, settings) {
    var color = [...settings.shiftColors];
    let newColor = color.find((item) => item.shift === `${shift}`).color;
    return newColor;
    }
    const[open, setOpen] = useState("")
    function handleEditToggle() {
        open ? setOpen(!open) : setOpen(true)
        console.log(open)
        return open
    }
  return (
    <>
      <Container inputColor={getColor(`${shift}`, state.settings)}>
        <button onClick={handleEditToggle}>{shift}</button>
      </Container>
      <EditWindow open ={open}>
        <Heading>Edit</Heading>
        <p>Current shift: {shift}</p>
        <p>Change shift to: </p>
        <EditShift>
          <option value="">Choose Shift</option>
          {state.settings.shiftColors.map((item) => {
            return <option value={item.shift}>{item.shift}</option>;
          })}
        </EditShift>
        <br />
        <br />
        <button onClick={handleEditToggle}>Change Shift</button>
      </EditWindow>
    </>
  );
}

const Container = styled.div`
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
  z-index: 1;
`;
const EditShift = styled.select`
  color: black;
  text-align: center;
  font-weight: 600;
`;

const EditWindow = styled.div`
border: 1px solid gray;
border-top: none;
opacity: ${props => props.open ? "1": "0"};
  padding-top: 0px;
  text-align: center;
  margin: 0;
  color: white;
  width: 200px;
  height: 200px;
  background-color: #2275bd;
  z-index: 20;
  font-size: 1em;
 display: block;
 max-height:  ${props => props.open? "100%" : "0"};
 overflow:hidden;
 transform: all 0.3s;
 
`;

const Heading = styled.h4`
  margin: 0;
`;
