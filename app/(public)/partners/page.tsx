import Link from "next/link";

import { Button } from "@/components/ui/button";
import Background2 from "@/public/background2.svg"
import Background3 from "@/public/background3.svg"
import { partnerReasons, partners } from "@/components/common/partners-data";
import Image from "next/image";

export default async function AboutPage() {
  return (
    <div className="sm:my-24">
      <div className="flex flex-col items-center my-10 rounded-xl bg-white">
        <p className="font-semibold text-gray-800 text-4xl md:text-5xl">Become a partner</p>
        <p className="md:w-1/2 max-sm:mx-10 text-lg font-semibold my-6 text-gray-600 text-center">We build strong and collaborative partnerships with the aim of delivering the best results. Whether you are a small team of custom software developers or a larger agency servicing enterprise clients, we have the means to collaborate and achiebe success together.</p>
        <Link href="/contact" className="">
          <Button className="hover:bg-blue-800 bg-blue-800 ">
            Become a Partner
          </Button>
        </Link>
      </div>

      <div className="my-10 sm:my-20 px-10 xl:px-20 py-16 flex flex-col items-center bg-gray-200 text-center">
        <p className="font-semibold text-5xl mb-10">Our Partners</p>
        <p className="text-gray-700">We believe in forging strategic partnerships with leading industry experts who share our commitment to delivering exceptional recruitment solutions. Our network of trusted partners consists of top-notch organizations dedicated to supporting businesses in their talent acquisition journey.</p>
        <div className="w-full my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center">
          {partners.map((context, i) => (
            <div key={i} className="w-full flex justify-center md:px-10">
              <Image src={context.image} className="h-32 w-44 max-sm:h-28 max-sm:w-52 object-contain" alt="context"/>
            </div>
          ))}
        </div>
        <p className="text-gray-700">Each of our partners is carefully selected based on their expertise, customer focus, and dedication to excellence. Together, we work collaboratively to provide innovative recruitment solutions and support to businesses of all sizes.</p>
      </div>

      <div className="my-10 sm:my-20 xl:px-6 flex flex-col items-center" style={{backgroundImage: `url(${Background3.src})`, backgroundSize: 'contain',}}>
        <p className="font-semibold text-3xl sm:text-4xl mt-10 sm:mt-16 text-white">Why Partner with Us ?</p>
        <div className="w-full p-2 sm:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {partnerReasons.map((context, i) => (
                <div key={i} className="p-6 max-sm:px-2 flex flex-col justify-center items-center">
                  <Image src={context.image} className="w-48 object-contain" alt="context"/>
                  <p className="text-2xl font-semibold mt-2 text-white text-center ">{context.heading}</p>
                  <p className="text-gray-300 text-center ">{context.desc}</p>
                </div>
            ))}
          </div>
      </div>
      
      <div className="max-sm:mx-6 flex flex-col items-center my-20 rounded-xl bg-white">
        <p className="sm:w-2/3 my-2 text-gray-800 text-center">Have a question or interested in partnering with us for your hiring needs? We&#39;d love to hear from you! Our dedicated team is here to assist you every step of the way. Whether you&#39;re looking for top talent or seeking recruitment solutions tailored to your business, we&#39;re committed to providing exceptional service and support.</p>
        <p className="sm:w-2/3 my-2 text-gray-800 text-center">Feel free to reach out to us via phone, email, or the contact form below. We&#39;ll respond promptly to address your inquiries and discuss how we can best meet your hiring objectives. Partner with us today and experience the difference our recruitment expertise can make for your business success.</p>
        <Link href="/contact" className="mt-6">
          <Button className="hover:bg-gray-700 text-xl">
            Contact
          </Button>
        </Link>
      </div>

    </div>
  )
}