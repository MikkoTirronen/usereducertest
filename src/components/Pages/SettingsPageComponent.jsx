import React from "react";
import HeaderComponent from "../HeaderComponent";

import styled from "styled-components";
import { shiftColors } from "../DayComponent";

export default function SettingsPageComponent() {
 
  return (
    <OuterWrapper>
      <HeaderComponent header={"Settings"} />

      <Container>
        {shiftColors.map((item) => (
          <>
            <InnerWrapper>
              <ColorHeader>Color: {item.color}</ColorHeader>
              <ColorAndListContainer>
                <ColorContainer inputColor={item.color}></ColorContainer>
                <ListContainer>
                  <List>
                    {item.shift.map((item) => (
                      <ListItemContainer>
                        <li>{item} </li>
                        <span>
                          -<DeleteButton>Delete</DeleteButton>
                        </span>
                      </ListItemContainer>
                    ))}
                  </List>
                </ListContainer>
              </ColorAndListContainer>
            </InnerWrapper>
          </>
        ))}
        {/* {data.map((item) => {
          if (item[0].charAt(0) === "*") {
            return <SectionHeader>{item[0]}</SectionHeader>
          }
            return <SixWeekComponent sixWeekData={getEmployeeData(item)} />;
        })} */}
      </Container>
    </OuterWrapper>
  );
}
const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 5px;
  padding-right: 3vh;
`;
const DeleteButton = styled.button`
  background-color: red;
  font-weight: 600;
  margin-left: 10px;
  color: whitesmoke;
  width: 80%;
`;
const ColorHeader = styled.h4`
  margin: 0%;
  padding: 0%;
  text-align: center;
`;
const ColorAndListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-left: 3vh;
`;
const InnerWrapper = styled.div`
  border: solid;
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: 1fr 3fr;
  border-radius: 15px;
  padding-top: 1vh;
  padding-bottom: 2vh;
  background-color: #a5cff5;
`;
const ListContainer = styled.div`
  padding-left: 2vw;
`;
const List = styled.ul`
  font-weight: 600;
  margin: 0%;
  list-style-type: none;
`;
const ColorContainer = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: ${(props) => props.inputColor || "whitesmoke"};
  border: solid;
`;

const Container = styled.div`
  margin-top: 1vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-row-gap: 1vh;
  font-size: 1.5vw;
`;

const OuterWrapper = styled.div`
  width: 100vw;
  display: block;
  background-color: darkgray;
`;
