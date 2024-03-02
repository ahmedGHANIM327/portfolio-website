'use client';

import { FC } from "react";
import CountUp from "react-countup";

const Badge:FC<{cointainerStyles:string, 
    icon: any, 
    endCountNum: number, 
    endCountText?:string
    badgeText: string}> = ({cointainerStyles, icon, endCountNum,endCountText , badgeText}) => {
    return (
      <div className={`badge ${cointainerStyles}`}>
        <div className="xl:text-3xl text-xl text-primary">{icon}</div>
        <div className="flex gap-x-2 items-center">
            <div className="xl:text-4xl text-2xl leading-none font-bold text-primary">
                <CountUp end={endCountNum} delay={1} duration={2}/>
                {endCountText}
            </div>
            <div className="leading-none xl:max-w-[200px] text-black text-[15px] font-medium">
                {badgeText}
            </div>
        </div>
      </div>
    )
  }
  
  export default Badge;