import Image from "next/image";

import Office4 from "@/public/office4.jpg"
import Map from "@/public/map.png"
// import { Locate } from "lucide-react";
import { ContactLinks, ContactSocialLinks } from "@/components/common/contact-links";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";

// const company = "Get Hired Solution"

export default async function ContactPage() {
  return (
    <>
      <div className="flex justify-between items-center h-[300px] sm:h-[400px] bg-gray-900" id="heading">
        <div className="p-4 sm:p-20 sm:w-2/5">
          <p className="text-gray-300 text-2xl sm:text-4xl font-bold py-4">Get in touch</p>
          <p className="text-gray-400 max-sm:text-sm text-wrap">Want to get in touch ? We would love to hear from you. Here is how you can reach us.</p>
          <div className="flex mt-6">
            {ContactSocialLinks.map((navlink, i) => (
              <Link key={i} href={`/${navlink.link}`} className="text-blue-400 hover:text-white mr-4">{navlink.icon}</Link>
            ))}
          </div>
        </div>
        <div className="flex w-3/5 justify-end">
          <Image src={Office4} className="h-[300px] sm:h-[400px] object-cover brightness-75 rounded-l-full" alt="office" style={{borderRadius: "35% 0% 0% 50% / 30% 0% 0% 70%"}} />
        </div>
      </div>


      <div className="flex relative top-[-50px] max-sm:flex-col-reverse justify-center items-start" id="contact">
        
        <div className="bg-white border-black border-t-4 rounded-xl p-2 m-2 flex flex-col items-center">
          <Image src={Map} className="w-full object-contain rounded-xl border-gray-400 border cursor-pointer hover:brightness-75 " alt="map"/>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 place-items-center sm:place-items-start">
            {ContactLinks.map((navlink, i) => (
                <Link key={i} href={`/${navlink.link}`} className={`flex flex-col items-center text-center m-4 w-52 ${i===2 ? " max-sm:col-span-2" : "mx-[-20px]"}`}>
                {navlink.icon}
                {/* <p className="text-black font-semibold">{navlink.name}</p> */}
                <p className="text-sm my-2 text-gray-600 text-wrap">{navlink.desc}</p>
                </Link>
            ))}
          </div>  
        </div>
        
        <div className="bg-white border-black border-t-4 rounded-xl m-2 p-2 flex flex-col">
          <p className="text-gray-800 text-2xl font-bold mb-4 capitalize">Let us talk</p>
          <p className="text-gray-600 text-sm text-wrap">If you have got any questions, please fill out the short form below to drop us an email and we promise to get back to you in lightening speed. </p>
          <ContactForm />
        </div>
      </div>

      <div className="mx-6 sm:mx-28 border-b border-1 border-gray-500 "></div>

      <div className="text-center my-16 max-sm:mx-4">
            <p className="font-semibold capitalize text-xl sm:text-2xl ">Elevate Your Talent Strategy: Let us Be Your Recruitment Partner of Choice</p>
            <p className="font-semibold text-gray-700 mt-2 ">From Startups to Enterprises: Trusted Solutions for Your Hiring Needs</p>
            <p className="font-semibold text-gray-700">Contact us now for more Info</p>
      </div>
      
    </>
  );
}