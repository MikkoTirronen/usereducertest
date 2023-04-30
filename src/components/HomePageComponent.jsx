import React, { useReducer } from "react";
import styled from "styled-components";

import WeekComponent from "./WeekComponent";
import { INITIALSTATE, shiftReducer } from "../shiftReducer";
import SixWeekComponent from "./SixWeekComponent";

export default function HomePageComponent() {
  const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);

  return (
    <>
      <HeaderContainer>
        <h1>Logistik Centrum</h1>
      </HeaderContainer>
      <Container>
        {state.schedule.map((item, index) => {
          return <SixWeekComponent key={Math.random()} sixWeekData={item.shifts} sixWeekIndex={index}></SixWeekComponent>
        })}
        {/* <SixWeekComponent week={state.schedule[1].shifts}></SixWeekComponent>
        <SixWeekComponent week={state.schedule[2].shifts}></SixWeekComponent>
        <SixWeekComponent week={state.schedule[3].shifts}></SixWeekComponent> */}
      </Container>
    </>
  );
}
const ScheduleWrapper = styled.div``;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;
const HeaderContainer = styled.div`
  text-align: center;
  width: 100vw;
`;
