import logo from './logo.svg';
import './App.css';
import DayComponent from './components/DayComponent';
import WeekComponent from './components/WeekComponent';
import styled from 'styled-components';
import HomePageComponent from './components/HomePageComponent';
import { useReducer } from 'react';


function App() {
  const data = [
    { day: "monday", shift: "A" },
    { day: "tuesday", shift: "A" },
    { day: "wednesday", shift: "A" },
    { day: "thursday", shift: "A" },
    { day: "friday", shift: "A" },
    { day: "saturday", shift: "" },
    { day: "sunday", shift: "" },
  ];
 
  return (
    <>
<HomePageComponent></HomePageComponent>
    </>
  );
}
export default App;