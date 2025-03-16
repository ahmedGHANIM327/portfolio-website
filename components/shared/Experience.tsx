import React, { FC } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { Experience as ExperienceType } from '@/data/experiences'

const Experience:FC<{experience: ExperienceType}> = ({experience}) => {
  return (
    <div className={cn(
        "w-full flex",
        experience.id%2 === 0 ? 'md:flex-row flex-row-reverse':'flex-row-reverse'
      )}>
        <div className='bg-accent md:w-[calc(50%-2.5rem)] w-[calc(100%-2.5rem)] h-[100%] p-4 rounded-md'>
            <Badge>{experience.company}</Badge>
            <h2 className='text-2xl font-semibold my-3'>{experience.poste}</h2>
            <p className="text-sm flex items-center gap-x-2">
                <Calendar size={20}/> {experience.date}
            </p>
            <p className="text-sm flex items-center gap-x-2 mt-1 mb-4">
                <MapPin size={20}/> {experience.location}
            </p>
            <div>
                <h6 className='text-md font-semibold'>Missions :</h6>
                {experience.description.map((desc: string) => (
                    <p key={desc} className='text-sm text-justify items-center flex mb-2 text-muted-foreground ml-2'>. {desc}</p>
                ))}
            </div>
            <div className='flex gap-x-2 flex-wrap gap-y-2 mt-4'>
                {experience.skills.map((skill) => <span className='border-2 border-primary text-primary px-3 py-1 text-sm dark:text-foreground dark:border-foreground' key={skill}>{skill}</span>)}
            </div>
        </div>
        <div className={cn(
                "bg-accent border-foreground border-2 w-[2.5rem] h-10 mt-4 flex items-center justify-center rounded-full z-10",
                experience.id%2 === 0 ? 'md:translate-x-1/2 -translate-x-1/2':'-translate-x-1/2'
            )}>
            <Briefcase />
        </div>
    </div>
  )
}

export default Experience