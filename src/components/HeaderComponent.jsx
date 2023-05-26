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
  background-color: #ffff99;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

const HeaderContainer = styled.div`
  background-color: #ffff99;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
`;
