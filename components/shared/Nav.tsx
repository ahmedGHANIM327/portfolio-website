import Link from 'next/link';
import React, { FC } from 'react'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { RiDownload2Fill } from 'react-icons/ri';

const links = [
    {
        path:'/',
        label: 'Home'
    },
    {
        path:'/projects',
        label: 'Projects'
    },
    {
        path:'/contact',
        label: 'Contact'
    }
];

const Nav:FC<{containerStyles:string, linkStyles:string, underlineStyles:string}> = ({containerStyles,linkStyles,underlineStyles}) => {

    const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {links.map(
            (link) => {
                return <Link href={link.path} key={link.path} className={`capitalize ${linkStyles}`}>
                    {link.path === path && (
                        <motion.span 
                         initial={{y: '-100%'}}
                         animate={{ y: 0 }}
                         transition={{ type: 'tween' }}
                         layoutId='underline'
                         className={underlineStyles}
                        />
                    )}
                    {link.label}
                </Link>
            }
        )}
        <Button className='gap-x-2'>
            Download CV
            <RiDownload2Fill />
        </Button>
    </nav>
  )
}

export default Nav