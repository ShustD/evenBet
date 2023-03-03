import React from "react";
import s from './Circle.module.css'


export const Circle = ({isStart}) => {
    return (
        <div className={!isStart ? s.circle : s.circle_active}>

        </div>
    )
}