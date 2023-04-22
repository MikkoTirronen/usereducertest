import React from "react";
import DayComponent from "./DayComponent";
import styled from "styled-components";

export default function WeekComponent({ data }) {
  return (
    <Container>
      {data.map((item) => {
        return <DayComponent shift={item.shift}></DayComponent>;
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`;
