import React, { FC } from 'react';
import Experience from './Experience';
import { Separator } from '../ui/separator';
import { experiences } from '@/data/experiences';
import { educations } from '@/data/educations';
import Education from './Education';

const Timeline:FC<{type:string}> = ({type}) => {
  return (
    <div className="mx-auto mt-4 flex flex-col gap-y-4 relative">
        {type === "experiences" && experiences.map((experience) => <Experience key={experience.id} experience={experience} />)}
        {type === "education" &&  educations.map((education) => <Education key={education.id} education={education} />)}
        <Separator orientation="vertical" className='h-[100%] w-1 absolute md:left-1/2'/>
    </div>
  )
}

export default Timeline