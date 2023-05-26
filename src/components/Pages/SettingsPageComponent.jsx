import React from "react";
import HeaderComponent from "../HeaderComponent";
import SixWeekComponent from "../SixWeekComponent";
import { getEmployeeData } from "./HomePageComponent";
import styled from "styled-components";

export default function SettingsPageComponent() {
  let data = [
    [
      "*Hus 52 VNS",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "Vecka 2 Januari",
      "",
      "",
      "",
      "",
      "",
      "",
      "Vecka 3 Januari",
      "",
      "",
      "",
      "",
      "",
      "",
      "Vecka 4 Januari",
      "",
      "",
      "",
      "",
      "",
      "",
      "Vecka 5 Januari/Februari",
      "",
      "",
      "",
      "",
      "",
      "",
      "Vecka 6 Februari",
      "",
      "",
      "",
      "",
      "",
      "",
      "Vecka 7 Februari",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    
    [
      "Namn",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
      "MÅ",
      "TI",
      "ON",
      "TO",
      "FR",
      "LÖ",
      "SÖ",
    ],
  ];

  return (
    <OuterWrapper>
      <HeaderComponent header={"Settings"}/>
      <Container>
        {data.map((item) => {
          if (item[0].charAt(0) === "*") {
            return <SectionHeader>{item[0]}</SectionHeader>
          }
            return <SixWeekComponent sixWeekData={getEmployeeData(item)} />;
        })}
      </Container>
    </OuterWrapper>
  );
}

const Container = styled.div`
  display: grid;

`;
const HeaderContainer = styled.div`
  text-align: center;
  width: 100%;
`;
const OuterWrapper = styled.div`
  width: 100vw;
  display: block;
`;
const SectionHeader = styled.div`
  
`;