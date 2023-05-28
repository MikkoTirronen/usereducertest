import React from "react";
import styled from "styled-components";
import NavigationComponent from "./NavigationComponent";

export default function HeaderComponent({ header }) {
  return (
    <ScheduleWrapper>
      <NavigationComponent></NavigationComponent>
      <HeaderContainer>{header}</HeaderContainer>
    </ScheduleWrapper>
  );
}
const ScheduleWrapper = styled.div`
  background-color: rgb(6, 84, 59);
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

const HeaderContainer = styled.div`
  background-color: rgb(6, 84, 59);
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  color: whitesmoke;
  font-weight: 700;
`;
