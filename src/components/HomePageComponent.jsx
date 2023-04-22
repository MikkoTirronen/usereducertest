import React, { useReducer } from "react";
import styled from "styled-components";

import WeekComponent from "./WeekComponent";
import { INITIALSTATE, shiftReducer } from "../shiftReducer";

export default function HomePageComponent() {
  const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE);

  return (
    <>
      <HeaderContainer>
        <h1>LogisticsProject</h1>
      </HeaderContainer>
      <Container>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
        <ScheduleWrapper>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
          <WeekComponent
            data={state.schedule[0].shifts[0].data}
          ></WeekComponent>
        </ScheduleWrapper>
      </Container>
    </>
  );
}
const ScheduleWrapper = styled.div``;
const Container = styled.div`
  display: grid;
  text-align: center;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90.7vw;
  height: 90.3vh;
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
`;
const HeaderContainer = styled.div`
  text-align: center;
  width: 100vw;
`;
