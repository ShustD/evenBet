import React, { useState } from "react";
import { Button } from "../Button/Button";
import { BlockOne } from "./BlockOne/BlockOne";
import s from './Blocks.module.css'
import { BlockTwo } from "./BlockTwo/BlockTwo";

export const Blocks = () => {
    const [isStart, setIsStart] = useState(false)
    return (
      <div>
        <div className={s.blocks}>
          <BlockOne />
          <BlockTwo isStart={isStart}/>
        </div>

        <Button setIsStart={setIsStart}/>
      </div>
    )
}