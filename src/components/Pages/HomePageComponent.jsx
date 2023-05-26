import React from "react";
import styled from "styled-components";
import SixWeekComponent from "../SixWeekComponent";
import { data } from "../../pseudoData";
import HeaderComponent from "../HeaderComponent";

export default function HomePageComponent() {
  //const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);

  return (
    <>
      <HeaderComponent header={"Logistik Centrum"}></HeaderComponent>
      {data.map((item, index) => {
        if (item[0].charAt(0) === "*") {
          return <SectionHeader key={Math.random()}>{item[0]}</SectionHeader>;
        }
        return (
          <SixWeekComponent
            key={Math.random()}
            sixWeekData={getEmployeeData(item)}
          />
        );
      })}
    </>
  );
}

const SectionHeader = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-left: 10%;
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
