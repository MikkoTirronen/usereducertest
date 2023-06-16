import React from "react";
import DayComponent from "./DayComponent";
import styled from "styled-components";

export default function WeekComponent({ weekData, sixWeekIndex, shiftOptions }) {
  return (
    <Container key={Math.random()}>
      {weekData.map((item, index) => {
        return (
          <DayComponent
            key={Math.random()}
            shift={item.shift}
            employeeIndex={sixWeekIndex}
            dayIndex={index}
            shiftOptions={shiftOptions}
          ></DayComponent>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  //max-width: 14vw;
`;
