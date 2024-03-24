import { Project } from '@/data/projects';
import Image from 'next/image';
import React, { FC } from 'react'
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

const ProjectSmallCard:FC<{project:Project}> = ({project}) => {
  return (
    <div className='bg-accent px-2 py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className='max-w-[400px] flex flex-col items-center mx-auto'>
            <Image 
                src={project.image} 
                alt={project.name} 
                width={300} 
                height={300}
                className='my-2 w-full'/>
            <h2 className='text-2xl font-semibold my-3 mt-4'>{project.name}</h2>
            <p className='text-muted-foreground text-sm'>{project.description}</p>
            <div className='flex gap-x-2 flex-wrap gap-y-2 mt-4'>
                {project.tools.map((tool) => <span className='border-2 border-primary text-primary px-3 py-1 text-sm' key={tool}>{tool}</span>)}
            </div>
            <Button className='mt-4 gap-x-3'>
                <Eye />
                View more
            </Button>
        </div>
    </div>
  )
}

export default ProjectSmallCard;