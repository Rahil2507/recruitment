import Link from "next/link";
import { footerOtherLinks, footerSocialLinks, footerUsefulLinks } from "./footer-links";

const footerLinks = [
  {name:"Useful Links", content:footerUsefulLinks},
  {name:"Other Links", content:footerOtherLinks}
]

export default function Footer() {
  return (
    <footer className="px-10 py-4 bg-slate-900 z-50 ">  
        <div className="flex max-sm:flex-col justify-between">

          <div className="max-sm:mb-8">
            <p className="text-2xl uppercase text-gray-300">Get Hired Solution</p>
            <p className="text-md text-gray-400">Find us on any of these platforms, we respond within 1-2 business days.</p>
            <div className="flex">
            {footerSocialLinks.map((navlink, i) => (
                    <Link key={i} href={`/${navlink.link}`} className="text-gray-400 hover:text-blue-700 pt-3 pr-4">{navlink.icon}</Link>
                ))}
            </div>
          </div>
            
          <div className="flex">
            {footerLinks.map((footerLink, i) => (
              <div key={i} className="mx-auto sm:mx-8">
                <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">{footerLink.name}</span>
                {footerLink.content.map((navlink, j) => (
                    <Link key={j} href={`/${navlink.link}`} className="flex text-gray-400 hover:text-blue-700 items-center py-1 text-sm">{navlink.icon} {navlink.name}</Link>
                ))}
              </div>  
            ))}          
          </div>
                
        </div>
                
        <div className="my-4 border-b border-1 border-gray-400"></div>
                
        <div className="flex w-full justify-center text-sm text-gray-400">
          <span className="mr-2">Copyright © 2024 </span>
          <Link href="/" className="hover:text-blue-700">Get Hired Solution</Link>
        </div>
      </footer>
  )
}