import React from 'react'
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from 'next/image'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

interface HeaderProps {
  label: string
}


export const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <div className="flex items-center">
        <Image src="https://emojicdn.elk.sh/🔐?style=apple" width={30} height={30} alt="🔐" />
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          Awesome Auth
        </h1>
      </div>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  )
}

