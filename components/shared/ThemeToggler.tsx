"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme()

  return (
    <div>
        <Button className="p-[1rem] rounded-full pl-[0.7rem] pr-[0.7rem]" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <MoonIcon  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        </Button>
    </div>
  );
}

export default ThemeToggler;
