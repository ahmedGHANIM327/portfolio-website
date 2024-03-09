import React, { FC } from 'react'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { Education as EducationType } from '@/data/educations'

const Education:FC<{education: EducationType}> = ({education}) => {
  return (
    <div className={cn(
        "w-full flex",
        education.id%2 === 0 ? 'md:flex-row flex-row-reverse':'flex-row-reverse'
      )}>
        <div className='bg-accent md:w-[calc(50%-2.5rem)] w-[calc(100%-2.5rem)] h-[100%] p-4 rounded-md'>
            <Badge>{education.school}</Badge>
            <h2 className='text-2xl font-semibold my-3'>{education.field}</h2>
            <p className="text-sm flex items-center gap-x-2">
                <Calendar size={20}/> {education.date}
            </p>
            <p className="text-sm flex items-center gap-x-2 mt-1 mb-4">
                <MapPin size={20}/> {education.location}
            </p>
        </div>
        <div className={cn(
                "bg-accent border-foreground border-2 w-[2.5rem] h-10 mt-4 flex items-center justify-center rounded-full z-10",
                education.id%2 === 0 ? 'md:translate-x-1/2 -translate-x-1/2':'-translate-x-1/2'
            )}>
            <GraduationCap />
        </div>
    </div>
  )
}

export default Education