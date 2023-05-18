import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { shiftReducer, INITIALSTATE } from "../shiftReducer";

export default function DayComponent({ shift, employeeIndex, dayIndex }) {
  const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);

  const [open, setOpen] = useState("");
  function handleEditToggle(e) {
    e.preventDefault();
    open ? setOpen(!open) : setOpen(true);
    return open;
  }
  const [shiftChange, setShiftChange] = useState("WHEREISTHIS");

  function changeShift() {
    dispatch({
      type: "updateData",
      payload: { msg: "This is the current Payload" },
    });
    console.log(state);
    console.log("CurrentShift: " + shiftChange);
  }
  function getColor(currentShift, dayIndex) {
    var shiftColors = [
      {
        shift: ["A", "Tv", "Johnny"],
        color: "#fff00f",
      },
      {
        shift: ["B", "LB", "Risk"],
        color: "#CC99FF",
      },
      {
        shift: ["C", "H52", "Vm", "Apo", "MAT", "Vätske"],
        color: "#FF99CC",
      },
      {
        shift: ["D", "Utb", "adm"],
        color: "#00B050",
      },
      {
        shift: ["H"],
        color: "#003380",
      },
      {
        shift: ["Skåp", "Sop"],
        color: "#F79646",
      },
      {
        shift: ["F"],
        color: "#CCFFFF",
      },
      {
        shift: ["Sjuk", "SEM", "VAB", "Sem", "Flex"],
        color: "#FF0000",
      },
    ];
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
    let shift = currentShift.shift;
    let isLongText = currentShift.shift.length > 3 ? true : false;
    console.log(shift, isLongText, currentShift.shift.length);
    let textSize = "1rem";
    let textCheck = 20 - currentShift.shift.length - 3;
    if (isLongText) {
      textSize = `${textCheck > 10 ? textCheck : 10}px`;
    }
    console.log(textSize);
    return textSize;
  }
  return (
    <Container>
      <ShiftContainer inputColor={getColor(`${shift}`, dayIndex)}>
        <StyledButton
          onClick={handleEditToggle}
          textSize={setShiftFontSize({ shift })}
        >
          {shift}
        </StyledButton>
      </ShiftContainer>
      {/* <EditWindow open={open} inputColor={getColor(`${shift}`, state.settings)}>
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
      </EditWindow>*/}
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
  height: 100%;
  width: 100%;
  border-style: solid;
  font-weight: 800;
  z-index: 20;
  max-width: 2vw;
`;
// const EditShift = styled.select`
//   color: black;
//   text-align: center;
//   font-weight: 600;
// `;

// const EditWindow = styled.div`
//   position: absolute;
//   border-top: none;
//   opacity: ${(props) => (props.open ? "1" : "0")};
//   padding-top: 0px;
//   text-align: center;
//   margin: 0px;
//   color: #0b0b0b;
//   width: 500%;
//   height: ${(props) => (props.open ? "fit-content" : "0")};
//   background-color: ${(props) => props.inputColor || "darkgrey"};
//   z-index: 20;
//   font-size: 1vw;
//   overflow: hidden;
//   transform: all 0.3s;
//   translate: 0px -1px;
//   padding-left: 1vw;
//   padding-right: 1vw;
//   padding-bottom: 2vh;
// `;

const Heading = styled.h4`
  margin: 0;
`;
const StyledButton = styled.button`
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  font-size: ${(props) => props.textSize};
  padding: 0px;
`;
