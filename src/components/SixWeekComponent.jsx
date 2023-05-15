import React from "react";
import WeekComponent from "./WeekComponent";
import styled from "styled-components";

export default function SixWeekComponent({ sixWeekData, name, index }) {
  return (
    <OuterWrapper>
      <EmployeeName>{sixWeekData.name}</EmployeeName>
      <Container>
        {sixWeekData.shifts.map((item) => {
          return (
            <WeekComponent
              key={Math.random()}
              weekData={item.data}
            ></WeekComponent>
          );
        })}
      </Container>
    </OuterWrapper>
  );
}
const Container = styled.div`
  float: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-left: 0.2vw;
  grid-column-gap: 0.5vw;
  grid-row-gap: 0.5vh;
`;
const EmployeeName = styled.div`
  border-style: solid;
  font-size: 1vw;
  text-align: right;
  padding-right: 1%;
  height: 98%;
  font-weight: 600;
  width: 7vw;
  min-width: 150px;
`;
const OuterWrapper = styled.div`
  width: 100vw;
  display: flex;
  text-align: center;
`;
