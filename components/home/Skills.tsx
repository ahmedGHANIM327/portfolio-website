import skills from '@/data/skills'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className="pt-8 xl:pt-16">
        <div className="container mx-auto bg-accent xl:p-8 p-4 rounded-md">
            <div className='flex flex-wrap xl:gap-x-8 gap-x-4 gap-y-8 justify-between'>
                {skills.map((skill) => {
                    return (<>
                        <div className='flex flex-col items-center gap-y-2'>
                        <Image key={skill.id} src={skill.image} width={70} height={70} alt={skill.title} className='hidden xl:flex'/>
                        <Image key={skill.id} src={skill.image} width={40} height={40} alt={skill.title} className='xl:hidden'/>
                        <p className='text-sm text-accent-foreground font-semibold'>{skill.title}</p>
                        </div>
                    </>)
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills