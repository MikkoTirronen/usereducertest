import React, { useReducer} from "react";
import DayComponent from "./DayComponent";
import styled from "styled-components";
import { shiftReducer,INITIALSTATE } from "../shiftReducer";

export default function WeekComponent({ data }) {
   
  return (
    <Container>
      {data.map((item) => {
          return <DayComponent   shift={item.shift}></DayComponent>;
      })}
    </Container>
  );
}
const Container = styled.div`
padding: 0 0 0 5px;
  display: flexbox;
  `
