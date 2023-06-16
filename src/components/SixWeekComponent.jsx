import React from "react";
import WeekComponent from "./WeekComponent";
import styled from "styled-components";

export default function SixWeekComponent({ sixWeekData, shiftOptions }) {
  
  
  function renderEmployeeName(data) {
    const upperCaseName = data.name.toUpperCase();
    if (data.name !== "") {
      return <EmployeeName key={Math.random()}>{upperCaseName}</EmployeeName>;
    } else {
      return <EmptyDiv key={Math.random()}></EmptyDiv>;
    }
  }
  return (
    <OuterWrapper key={Math.random()}>
      {renderEmployeeName(sixWeekData)}
      <Container key={Math.random()}>
        {sixWeekData.shifts.map((item, index) => {
          if (item.data[0].shift.includes("Vecka")) {
            return (
              <WeekHeader key={Math.random()}>{item.data[0].shift}</WeekHeader>
            );
          } else
            return (
              <>
                <WeekComponent
                  key={Math.random()}
                  weekData={item.data}
                  shiftOptions={shiftOptions}
                ></WeekComponent>
              </>
            );
        })}
      </Container>
    </OuterWrapper>
  );
}
const Container = styled.div`
  float: left;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-left: 0.2vw;
  grid-column-gap: 0.5vw;
  grid-row-gap: 0.5vh;
`;
const EmployeeName = styled.div`
  background-color: #ffff99;
  font-size: 1em;
  text-align: right;
  height: 100%;
  font-weight: 600;
  min-width: 110px;
  border-radius: 15px 0px 0px 15px;
  padding-right: 4px;
  margin-top: auto;
`;
const OuterWrapper = styled.div`
  width: 99vw;
  display: flex;
  text-align: center;
  height: 100%;
`;

const EmptyDiv = styled.div`
  font-size: 1em;
  text-align: right;
  padding-right: 1%;
  height: 100%;
  font-weight: 600;
  min-width: 110px;
`;

const WeekHeader = styled.div`
  font-size: 0.75vw;
  color: whitesmoke;
  font-weight: 600;
`;
