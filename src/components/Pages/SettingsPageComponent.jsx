import React from "react";
import NavigationComponent from "../NavigationComponent";
export default function SettingsPageComponent() {
  let myshift = "Johnny";
  console.log(myshift, myshift.length);

  
  function setShiftFontSize(currentShift) {
    let isLongText = currentShift.length > 4 ?  true : false
    let textSize = "1rem";
    
    if (isLongText) {
      textSize = "calc(1rem - 2px)";
    }
    return textSize;
  }

  return (
    <div>
      <h1>SettingsPageComponent</h1>
      <NavigationComponent></NavigationComponent>
    </div>
  );
}
