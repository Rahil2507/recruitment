import Image from "next/image";
import Link from "next/link";

import Office1 from "@/public/office1.jpg"
import Office2 from "@/public/office2.jpg"
import Office3 from "@/public/office3.jpg"
import Values from "@/public/values.png"
import { Button } from "@/components/ui/button";

const company = "Get Hired Solution"

export default async function AboutPage() {
  return (
    <>
      <div className="flex max-sm:flex-col-reverse justify-center items-center" id="heading">
        <div className="sm:w-1/2 max-sm:mt-10 p-8 sm:p-20">
          <p className="text-gray-500 text-lg uppercase font-semibold">About Us</p>
          <p className="text-gray-800 text-4xl font-bold py-4 capitalize">Empowering Businesses to Deliver Exceptional Talent Experiences</p>
          <p className="text-gray-600 text-wrap">Welcome to {company}, a recruitment consultancy dedicated to connecting top talent with exceptional career opportunities. With a passion for matching the right candidates with the right companies, we strive to make a positive impact on both businesses and individuals.</p>
        </div>
        <div className="flex max-sm:pt-10 sm:p-20">
          <div className="absolute mt-10 h-52 w-52 sm:h-80 sm:w-80 object bg-gradient-to-tr from-[#3023AE] to-[#FF0099] " style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}}></div>
          <Image src={Office1} className="relative ml-24 h-52 w-52 sm:h-80 sm:w-80 object-cover brightness-75" alt="office" style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}} />
        </div>
      </div>

      <div className="my-10 flex justify-center items-center bg-gray-900" id="history">
        <div className="sm:w-2/3 max-sm:px-6 py-20 flex flex-col">
          <p className="text-gray-400 text-center text-lg uppercase font-semibold">Our Story</p>
          <p className="text-gray-200 text-center text-3xl font-bold py-3 capitalize">Our Journey in Recruitment Excellence</p>
          <p className="text-gray-300 text-center text-wrap">{company} emerged from a vision to transform the recruitment landscape. Recognizing the demand for a more bespoke and efficient talent acquisition process, our founders took the initiative to establish our agency. With a wealth of experience garnered from years in the field, they leveraged their expertise to create a platform dedicated to delivering unparalleled recruitment solutions. From humble beginnings, we have flourished, cultivating robust partnerships with both employers and job seekers alike.</p>
        </div>
      </div>

      <div className="flex max-sm:flex-col justify-center items-center sm:mx-20 my-16" id="values">
        <div className="sm:h-80 border-2 border-slate-500 max-sm:border-b-0 sm:border-t-0 rounded-xl px-4 sm:px-10 py-8 m-4 sm:m-10 flex flex-col items-center">
          <p className="text-gray-800 text-3xl sm:text-4xl font-bold mb-4 capitalize">Vision & Values</p>
          <p className="text-gray-600 text-wrap">At {company}, our vision is to be the premier recruitment partner for businesses and job seekers alike, delivering unparalleled service and value. Our core values of integrity, excellence, collaboration, and innovation guide everything we do, ensuring that we always operate with honesty, professionalism, and a commitment to quality.</p>
        </div>
        <Image src={Values} className="max-sm:hidden h-80 w-80 object-cover " alt="values" />
        <div className="sm:h-80 border-2 border-slate-500 border-t-0 rounded-xl px-4 sm:px-10 py-8 m-4 sm:m-10 flex flex-col items-center">
          <p className="text-gray-800 text-3xl sm:text-4xl font-bold mb-4 capitalize">Industries Experties</p>
          <p className="text-gray-600 text-wrap">With years of experience and expertise in Industries, we understand the unique challenges and opportunities facing businesses in this sector. Our dedicated team of recruiters specializes in sourcing top talent across Industries, enabling us to provide tailored solutions that meet the specific needs of our clients.</p>
        </div>
      </div>

      <div className="my-10">
        <Image src={Office2} className="max-sm:hidden absolute max-h-96 w-full object-cover brightness-50" alt="office" />
        <Image src={Office3} className="sm:hidden absolute w-screen object-cover brightness-50" alt="office" />
        <div className="relative sm:pt-12 flex max-sm:flex-col justify-center items-center text-white">
          <div className="p-4 sm:p-10 mx-6 flex flex-col text-end">
            <p className="text-4xl font-bold my-4 capitalize">Quality Assurance</p>
            <p className="text-wrap">Quality is at the heart of everything we do at {company}. Our rigorous screening processes, personalized candidate assessments, and ongoing quality assurance measures ensure that we consistently deliver top-tier talent to our clients. Rest assured, with {company}, quality is never compromised.</p>
          </div>
          <div className="p-4 sm:p-10 mx-6 flex flex-col text-start">
            <p className=" text-4xl font-bold my-4 capitalize">Industry Insights</p>
            <p className="text-wrap">Stay informed and ahead of the curve with the latest insights and trends in recruitment and HR. Explore our thought leadership articles, industry reports, and expert analyses to gain valuable insights into the evolving landscape of talent acquisition and workforce management.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center my-16 sm:mt-28 py-10'>
        <h1 className="text-4xl my-4 font-semibold text-gray-600 capitalize">Contact the team</h1>
        <div className='flex justify-center sm:w-1/2 max-sm:mx-6'>
          <p className='text-gray-500 text-center'>Join our dynamic team and become part of a company that is shaping the future of recruitment. Explore career opportunities at {company} and discover how you can contribute your talents and expertise to our mission of connecting top talent with exceptional opportunities.</p>
        </div>
        <Link href="contact">
          <Button className="my-4">
            Contact
          </Button>
        </Link>
      </div>

    </>
  )
}