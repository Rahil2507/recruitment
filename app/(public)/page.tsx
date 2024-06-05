import Link from "next/link";
import Image from "next/image";
import { Search, Send, Users } from "lucide-react";

import Home1 from "@/public/home1.jpg"
import Home2 from "@/public/home2.jpg"
import Home3 from "@/public/home3.jpg"
import Background from "@/public/background2.svg"
import Career from "@/public/career1.jpg"
import { Button } from "@/components/ui/button";
import { Blend, Character, blendData, characterData, contexts } from "@/components/common/home-data";

const company = "Get Hired Solution"

export default async function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-black ">
        <div className="flex h-[400px] sm:h-[500px] w-full">
          <Image src={Home1} className="max-sm:hidden w-1/5 h-[80%] object-cover brightness-[0.3] rounded-bl-xl border-gray-400 border-l-2 border-b-2" alt="computers" />
          <Image src={Home2} className="max-sm:hidden w-1/5 h-[90%] object-cover brightness-[0.3] rounded-bl-xl border-gray-400 border-l-2 border-b-2" alt="computers" />
          <Image src={Home3} className="w-full sm:w-3/5 h-full object-cover brightness-[0.4] rounded-bl-xl border-gray-400 border-l-2 border-b-2" alt="computers" />
        </div>
        <div className=" absolute max-sm:px-4 sm:left-16 top-24 flex flex-col justify-center items-start">
          <div className="">
            <p className="font-semibold capitalize text-xl sm:text-4xl text-gray-500">Welcome to</p>
            <p className="font-semibold capitalize text-3xl sm:text-5xl text-white my-1 sm:my-4">{company}</p>
            <p className="font-semibold capitalize text-lg sm:text-2xl text-gray-400">Where Talent Meets Opportunity</p>
            <p className="sm:font-semibold text-gray-300 sm:my-2 mb-2">Empowering Professionals to Reach New Heights in Their Careers</p>
          </div>

          <div className="flex flex-col items-start mt-12 rounded-xl">
            <p className="font-semibold capitalize text-xl text-gray-400">Your Next Opportunity Awaits</p>
            <p className="font-semibold capitalize text-lg text-gray-300">Explore Our Latest Job Openings Today</p>
            <Link href="/jobs" className="text-lg py-2 fle  x items-center">
              <Button className="hover:text-sky-400 mt-2 bg-sky-700">
                <p>Explore Jobs</p>
                <Search className="h-4 w-4 ml-2 mt-[1px]" strokeWidth={3}/>
              </Button>
            </Link>
          </div>
        </div>
      </div>

        <div className="flex justify-center max-sm:flex-col my-10 mt-20 sm:mt-32 sm:mx-20">
          <div className="mx-4 sm:mx-10 sm:w-1/2">
            <div className="md:pr-6">
              <p className="font-semibold capitalize text-2xl text-amber-900">Streamline Your Hiring Process: Discover the Benefits of Partnering</p>
              <p className="font-semibold capitalize my-1 text-gray-600">Contact Us for Exceptional Talent Acquisition</p>
              <Link href="/contact" className="text-lg p-2 flex items-center">
                <Button className="hover:text-amber-400 mt-4">
                  <p>Contact</p>
                  <Send className="h-4 w-4 ml-2 mt-[2px]" strokeWidth={3}/>
                </Button>
              </Link>
            </div>
            <Blend {...blendData[0]} />
            <Blend {...blendData[1]} />
          </div>

          <div className="mx-4 sm:mx-10 sm:w-1/2 sm:mt-4">
            <Blend {...blendData[2]} />
            <Blend {...blendData[3]} />
          </div>
          
        </div>

        <div className="py-10">
          <div className="custom-shape-divider-bottom-1712662635">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path></svg>
          </div>
          <div className="flex max-sm:flex-col w-full p-6 my-[-1px] sm:py-16 bg-slate-900">
            {contexts.map((context, i) => (
                <div key={i} className="sm:px-6 my-4 flex flex-col justify-center items-center">
                  <Image src={context.image} className="w-52 object-contain" alt="context"/>
                  <p className="text-sm font-semibold my-2 text-white">{context.heading}</p>
                  <p className="text-xs sm:text-sm text-wrap text-gray-300">{context.desc}</p>
                </div>
            ))}
          </div>
          <div className="custom-shape-divider-top-1712662615">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path></svg>
          </div>
        </div>

        {/* <p className="font-semibold capitalize mt-20 my-10 text-2xl text-center text-amber-600">Candidate Resources</p> */}
        <div className="flex max-sm:my-4 sm:mt-20 sm:px-24 sm:h-96 ">
          <div className="max-sm:hidden w-1/2 rounded-l-3xl flex flex-col justify-center items-start" style={{backgroundImage: `url(${Background.src})`, backgroundSize: 'contain',}}>
            <div className=" mx-16 w-1/2 text-start">
              <p className="font-semibold capitalize text-xl">Accelerate Your Career Growth</p>
              <p className="text-gray-700 my-2">Explore resources and strategies for professional growth, including networking advice, skill-building opportunities, and career advancement insights tailored to your industry.</p>
            </div>
          </div>

          <div className="relative w-[600px] sm:mr-[-150px] sm:ml-[-150px] my-6">
            <Image src={Career} className="h-[200px] sm:h-full w-full object-cover sm:rounded-xl brightness-[0.3]" alt="computers" />
            <div className="absolute top-10 sm:top-28 px-2 text-center">
              <p className="font-semibold capitalize text-xl sm:text-2xl text-gray-200">Navigate Your Job Search Journey</p>
              <p className="text-gray-400 my-2">Discover proven strategies for finding job opportunities, from optimizing your online presence to tapping into hidden job markets and securing interviews with top employers.</p>
            </div>
          </div>

          <div className="max-sm:hidden w-1/2 rounded-r-3xl flex flex-col justify-center items-end" style={{backgroundImage: `url(${Background.src})`, backgroundSize: 'contain',}}>
          <div className="mx-16 w-1/2 text-end">
              <p className="font-semibold capitalize text-xl">Build Your Personal Brand</p>
              <p className="text-gray-700 my-2">Learn how to define and showcase your unique value proposition to employers, with guidance on optimizing your online presence, creating a professional brand image, and standing out in a competitive job market.</p>
            </div>
          </div>
        </div>

        <div className="flex max-sm:flex-col  my-10 mx-4 sm:mx-20 sm:mt-24">
          <div className="sm:w-1/2 sm:px-32">
            <p className="font-semibold capitalize text-xl sm:text-3xl">Get in Touch with Us for Any Inquiries, Partnership Opportunities, or Collaborations</p>
            <p className="text-gray-700 my-2 sm:text-xl">Whether you have questions about our services, seek partnership opportunities, or wish to discuss collaboration possibilities, our team is here to assist you. Reach out today to start the conversation and explore how we can support your recruitment needs.</p>
            <Link href="/contact" className="text-lg  flex items-center">
              <Button className="hover:text-gray-400 mt-2 bg-amber-800">
                <p>Connect</p>
                <Users className="h-4 w-4 ml-2 mt-[1px]" strokeWidth={3}/>
              </Button>
            </Link>
          </div>

          <div className="sm:w-1/2 flex justify-end max-sm:mt-12 sm:mb-14">
            <div className="w-full">
              <Character {...characterData[0]} />
              <Character {...characterData[1]} />
            </div>

            <div className="w-full">
              <Character {...characterData[2]} />
              <Character {...characterData[3]} />
            </div>

          </div>
        </div>

      </>

  );
}
