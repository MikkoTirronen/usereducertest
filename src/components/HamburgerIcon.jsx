import React from "react";
import styled from "styled-components";
export default function HamburgerIcon() {
  return (
    <>
     

      <AlternateIcon>
        <BurgerSlice></BurgerSlice>
        <BurgerSlice></BurgerSlice>
        <BurgerSlice></BurgerSlice>
      </AlternateIcon>
    </>
  );
}
const AlternateIcon = styled.div`
  width: 60px;
  height: 50px;
  display: block;
  margin-top: 10px;
 
`;
const BurgerSlice = styled.div`

 min-width:1vw;
 min-height: 2px;
 margin-top: 5px;
 padding-bottom: 9px;
  border-radius: 15px;
  background: whitesmoke;
`;


