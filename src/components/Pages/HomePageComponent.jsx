import React, { useState } from "react";
import styled from "styled-components";
import SixWeekComponent from "../SixWeekComponent";
import { data } from "../../pseudoData";
import HeaderComponent from "../HeaderComponent";


export default function HomePageComponent() {
  //const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);
  const [options, setOptions] = useState(getShiftOptions(shiftColors));

  function getShiftOptions(settings) {
    const tempArray = [];

    settings.map((item, index) => {
      item.shift.map((subItem) => {
        tempArray.push(subItem);
      });
    });
    console.log(tempArray);
    return tempArray;
  }

  return (
    <Container>
      <HeaderComponent header={"Logistik Centrum"}></HeaderComponent>
      {data.map((item, index) => {
        if (item[0].charAt(0) === "*") {
          return <SectionHeader key={Math.random()}>{item[0]}</SectionHeader>;
        }
        return (
          <SixWeekComponent
            key={Math.random()}
            sixWeekData={getEmployeeData(item)}
            shiftOptions={options}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: #666e79;
`;

const SectionHeader = styled.div`
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-left: 10%;
  color: whitesmoke;
`;

export function getMyNewData(myArray, fromValue, toValue, week) {
  const myWeekObject = { week: week, data: [] };
  const newData = myArray.slice(fromValue, toValue);
  newData.forEach((element, index) => {
    myWeekObject.data.push({ day: index, shift: element });
  });
  return myWeekObject;
}

export function getEmployeeData(myArray) {
  var tempEmployeeArray = { name: myArray[0], shifts: [] };
  let weekNumber = 1;
  const numOfDays = 7;
  for (let index = 1; index < myArray.length; index += numOfDays) {
    tempEmployeeArray.shifts.push(
      getMyNewData(myArray, index, index + numOfDays, weekNumber)
    );
    weekNumber++;
  }
  return tempEmployeeArray;
}
export var shiftColors = [
  {
    shift: ["A", "Tv", "Johnny"],
    color: "#fff00f",
  },
  {
    shift: ["B", "LB", "Risk"],
    color: "#CC99FF",
  },
  {
    shift: ["C", "H52", "Vm", "Apo", "MAT", "Vätske", "Åtv"],
    color: "#FF99CC",
  },
  {
    shift: ["D", "Utb", "adm"],
    color: "#00B050",
  },
  {
    shift: ["H"],
    color: "#4b77c4",
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