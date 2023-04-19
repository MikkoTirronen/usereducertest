import React, { useReducer } from "react";
import styled from "styled-components";

import WeekComponent from "./WeekComponent";
import { INITIALSTATE, shiftReducer } from "../shiftReducer";

export default function HomePageComponent() {
    const [state, dispatch] = useReducer(shiftReducer, INITIALSTATE)


  return (
    <>
      <h1>LogisticsProject</h1>
    
      <ScheduleWrapper>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
      </ScheduleWrapper>
      <ScheduleWrapper>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
      </ScheduleWrapper>
      <ScheduleWrapper>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
      </ScheduleWrapper>
      <ScheduleWrapper>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
      </ScheduleWrapper>
      <ScheduleWrapper>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
        <WeekComponent data={state.schedule[0].shifts[0].data}></WeekComponent>
      </ScheduleWrapper>
    </>
  );
}
const ScheduleWrapper = styled.div`
  display: flexbox;
  width: 100%;
`;