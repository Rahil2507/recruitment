import Link from "next/link";
import Image from "next/image";

import { navlinks } from "./public-navlinks";
import logow from "@/public/logow.svg"
import NavbarMobile from "./public-navbar-mobile";

export default function Navbar() {
  return (
    <nav>
      {/* Navbar For larger devices */}
      <div className="hidden w-full fixed h-14 sm:flex items-center justify-around bg-gray-900 border-b-25 border-black z-50">
        {/* <Link href="/" className="mx-10 bg-gray-900 pb-1 pl-6 rounded-bl-xl">
            <Image src={logow} alt="logo" width={320} className="text-white bg-white rounded-bl-xl p-1" />
        </Link> */}
        <Link href="/" className="ml-10">
            <Image src={logow} alt="logo" width={320} className="" />
        </Link>
        <div className="rounded-tl-2xl rounded-br-2xl my-2 py-2 flex justify-evenly w-1/2">
          {navlinks.map((navlink, i) => {
            return (
              <div key={i} className="flex items-center text-white hover:text-sky-500 cursor-pointer">
                <Link href={`/${navlink.link}`} className="text-lgs">
                  {navlink.social ? navlink.icon : navlink.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navbar For mobile devices */}
      <div className="sm:hidden">
        <NavbarMobile/>
      </div>
    </nav>

  )
}