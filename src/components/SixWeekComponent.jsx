import React from 'react'
import WeekComponent from './WeekComponent'
import styled from 'styled-components';

export default function SixWeekComponent({week}) {
  return (
      <Container>
          {console.log(week)}
       {week.map((item) => {
        return <WeekComponent data={item.data}></WeekComponent>;
      })}
    </Container>
    );
}
const Container = styled.div`
  display: grid;
  text-align: center;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90.7vw;
  //height: 90.3vh;
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
`;