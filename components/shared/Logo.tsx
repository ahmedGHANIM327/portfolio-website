"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' height={50} width={50} alt='' priority/>
    </Link>
  )
}

export default Logo;