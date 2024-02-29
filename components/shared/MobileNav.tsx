import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignRight } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignRight className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent>
            <div className='flex flex-col items-center justify-center h-full py-8'>
                <div className='flex flex-col items-center justify-center gap-y-32'>
                    <Logo />
                    <Nav 
                      containerStyles='flex flex-col items-center gap-y-6'
                      linkStyles='text-2xl relative hover:text-primary transition-all'
                      underlineStyles='absolute left-0 top-full h-[2px] w-full bg-primary'
                    />
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav