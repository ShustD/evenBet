import React, { useEffect, useState } from "react";
import s from './Button.module.css'

export const Button = ({setIsStart}) => {
    const [ seconds, setSeconds ] = useState(5);
    const [ timerActive, setTimerActive ] = useState(false);

    useEffect(() => {
      if (seconds > 0 && timerActive) {
        setTimeout(() => {
          setSeconds(seconds - 1)
        }, 1000)
      } else {
        setTimerActive(false);
        setIsStart(false)
      }
    }, [ seconds, timerActive, setIsStart ]);
    const click = () => {
      setTimerActive(true)
      setSeconds(5)
      setIsStart(true)
    }

    return (
      <div className={s.button}>
        <button disabled={timerActive} className={s.btn__start} onClick={() => click()}>{timerActive ? seconds : 'start'}</button>
      </div>
      )
}