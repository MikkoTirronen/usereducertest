import React from "react";
import NavigationComponent from "../NavigationComponent";
import styled from "styled-components";
import HeaderComponent from "../HeaderComponent";
export default function LoginPageComponent() {
  return (
    <Wrapper>
      <HeaderComponent header={"Login"} />
      <InnerWrapper>
        <LoginContainer>
          <form type="submit">
            <span>Username:</span>
            <input type="text"></input>
            <br></br>
            <span>Password:</span>
            <input type="password"></input>
            <br></br>
            <button type="submit">Login</button>
          </form>
        </LoginContainer>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 1fr 2fr 2fr;
`;

const LoginContainer = styled.div`
  border-style: solid;
  padding: 50px 50px;
  text-align: center;
  display: block;
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: skyblue;
`;
