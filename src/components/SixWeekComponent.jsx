import React from 'react'
import WeekComponent from './WeekComponent'

export default function SixWeekComponent({week}) {
  return (
      <>
          {console.log}
          {week.map((item => {
          return <WeekComponent data={item.week} ></WeekComponent>
      }))}
      </>
  )
}
