import React from "react";
import DayComponent from "./DayComponent";
import styled from "styled-components";

export default function WeekComponent({ weekData, sixWeekIndex }) {

  return (
    <Container>
      
      {weekData.map((item, index) => {
         return <DayComponent key={Math.random()} shift={item.shift} employeeIndex={sixWeekIndex} dayIndex={index}></DayComponent>;
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
 max-width: 14vw;
`;
