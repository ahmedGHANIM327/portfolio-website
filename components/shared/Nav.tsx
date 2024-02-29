import Link from 'next/link';
import React, { FC } from 'react'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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
    </nav>
  )
}

export default Nav