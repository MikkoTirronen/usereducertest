import React, { useState } from "react";
import styled from "styled-components";
import { shiftColors } from "./Pages/HomePageComponent";

export default function DayComponent({ shift, dayIndex, shiftOptions }) {
  const [shiftChange, setShiftChange] = useState("");
  const [open, setOpen] = useState("");

  function handleEditToggle(e) {
    e.preventDefault();
    open ? setOpen(!open) : setOpen(true);
    return open;
  }
  function changeShift(e) {
    e.preventDefault();
    handleEditToggle(e);
  }
  function getColor(currentShift, dayIndex) {
    let defaultColor;
    (dayIndex === 5) | (dayIndex === 6)
      ? (defaultColor = "#FFFF99")
      : (defaultColor = "whitesmoke");
    let plusOrMinusShift = currentShift;
    if (plusOrMinusShift.endsWith("+") | plusOrMinusShift.endsWith("-")) {
      plusOrMinusShift = plusOrMinusShift.replace(/[^a-zA-Z0-9åäöÅÄÖ]/g, "");
    }
    let newColor = shiftColors.find((item) =>
      item.shift.includes(plusOrMinusShift)
    );

    return newColor ? newColor.color : defaultColor;
  }
  function setShiftFontSize(currentShift) {
    let isLongText = currentShift.shift.length > 2 ? true : false;
    let textSize = ".7vw";
    let textCheck = currentShift.shift.length - 3;
    if (isLongText) {
      textSize = `Calc(${textSize} - ${textCheck * 1}px)`;
    }
    return textSize;
  }
  return (
    <Container key={Math.random()}>
      <ShiftContainer
        inputColor={getColor(`${shift}`, dayIndex)}
        key={Math.random()}
      >
        <StyledButton
          onClick={handleEditToggle}
          textSize={setShiftFontSize({ shift })}
          key={Math.random()}
        >
          {shift}
        </StyledButton>
      </ShiftContainer>
      <EditWindow open={open} inputColor={getColor(`${shift}`, shiftColors)}>
        <Heading>Edit</Heading>
        <p>Current shift: {shift}</p>
        <p>Change shift to: </p>
        <EditShift
          value={shiftChange}
          onChange={(e) => setShiftChange(e.target.value)}
        >
          <option value="">Choose Shift</option>
          {shiftOptions.map((item) => {
            return <option value={item}>{item}</option>;
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
  //position: relative;
  //width: 80%;
  //height: 100%;
`;
const ShiftContainer = styled.div`
  background-color: ${(props) => props.inputColor || "whitesmoke"};
  margin-bottom: 1px;
  border-style: solid;
  font-weight: 800;
  z-index: 20;
  max-width: 2vw;
  min-width: 100%;
  min-height: 100%;
`;
const EditShift = styled.select`
  color: black;
  text-align: center;
  font-weight: 600;
  width: 50%;
  height: auto;
`;

const EditWindow = styled.div`
  position: absolute;
  border-top: none;
  display: ${(props) => (props.open ? "block": "none")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  padding-top: 0px;
  text-align: center;
  margin: 0px;
  color: #0b0b0b;
  width: 25%;
  height: ${(props) => (props.open ? "fit-content" : "0")};
  background-color: ${(props) => props.inputColor || "darkgrey"};
  z-index: 20;
  font-size: 1vw;
  overflow: hidden;
  transform: all 0.3s;
  translate: 0px -1px;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 2vh;
`;

const Heading = styled.h4`
  margin: 0;
`;
const StyledButton = styled.button`
  overflow: hidden;
  word-wrap: break-word;
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  font-size: ${(props) => props.textSize};
  padding: 0px;
`;
