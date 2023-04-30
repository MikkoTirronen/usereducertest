import React from 'react'
import WeekComponent from './WeekComponent'
import styled from 'styled-components';

export default function SixWeekComponent({sixWeekData, sixWeekIndex}) {
  return (
    <>
      <EmployeeName>
        Mikko Tirronen
      </EmployeeName>
      <Container>
       {sixWeekData.map((item,index) => {
         return <WeekComponent key={Math.random()} weekData={item.data} sixWeekIndex={sixWeekIndex}></WeekComponent>;
        })}
    </Container>
        </>
    );
}
const Container = styled.div`
  display: grid;
  text-align: center;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90.7vw;
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
`;
const EmployeeName = styled.div`
border-style: solid;
min-width: 90%;
font-size: 1vw;
text-align: right;
padding-right: 1%;
height: 98%;
font-weight: 600;
`