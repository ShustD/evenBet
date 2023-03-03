import React from "react";
import { Circle } from "../BlockOne/Circle/Circle";
import s from './BlockTwo.module.css'

export const BlockTwo = ({isStart}) => {

  return (
    <div className={s.block__two}>
     <span>2</span> 
      <div>
        <Circle isStart={isStart}/>
      </div>
    </div>
  )
}