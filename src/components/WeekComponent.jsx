import React from "react";
import DayComponent from "./DayComponent";
import styled from "styled-components";

export default function WeekComponent({ weekData, sixWeekIndex }) {
  return (
    <Container>
      {weekData.map((item) => {
          return <DayComponent key={Math.random()} shift={item.shift} employeeIndex={sixWeekIndex}></DayComponent>;
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`;
