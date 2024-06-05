"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import { navlinks } from "./public-navlinks";
import logoi from "@/public/logoi.png"
import logow from "@/public/logow.svg"
import { Menu, Minimize } from 'lucide-react';
import Link from 'next/link';

export default function NavbarMobile() {
  const router = useRouter()
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className="flex fixed bg-white justify-between items-center py-1 z-50 w-screen h-14">
      <Link href="/"><Image src={logoi} alt='user' className='w-12 ml-1 p-1 object-contain'/></Link>
      <Link href="/"><Image src={logow} alt='user' className='w-56 p-1 object-contain' /></Link>
      <div className='flex items-start' onClick={() => setToggleDrawer((prev) => !prev)}>
        {toggleDrawer
          ? <Minimize className='h-7 w-7 m-1 text-gray-800 mr-3' />
          : <Menu className='h-8 w-8 text-gray-800 mr-3' />
        }
      </div>
        <div className={`absolute top-12 mt-2 mx-4 py-2 right-0 left-0 bg-gray-100 z-40 rounded-xl ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0 '} transition-all duration-500 border-b-4 border-t-4 border-slate-800`}>
            {navlinks.map((link, i) => (
              <Link key={i} href={link.link} className="flex py-2"  onClick={() => setToggleDrawer((prev) => !prev)}>
                <p className={`ml-8 font-epilogue font-semibold text-xl text-black`} >{link.name}</p>
              </Link>
            ))}
      </div>
      </div>
  )
}