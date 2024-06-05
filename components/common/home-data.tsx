import Image from "next/image"

import context1 from "@/public/context1.png"
import context2 from "@/public/context2.png"
import context3 from "@/public/context3.png"
import context4 from "@/public/context4.png"

import Office5 from "@/public/office5.jpg"
import Office6 from "@/public/office6.jpg"
import Office7 from "@/public/office7.jpg"
import Office8 from "@/public/office8.jpg"

import Character1 from "@/public/characters1.jpg"
import Character2 from "@/public/characters2.jpg"
import Character3 from "@/public/characters3.jpg"
import Character4 from "@/public/characters4.jpg"


export const contexts = [
  {
    heading: "Customized Solutions for Your Hiring Needs",
    image: context1,
    desc: `Whether you're a startup looking to build your dream team or an established enterprise seeking top-tier talent, we offers flexible and scalable solutions designed to meet your specific recruitment requirements. Our industry expertise and innovative approach ensure that we find the perfect fit for your organization, every time.`
  },
  {
    heading: "Experience a Seamless Hiring Process",
    image: context2,
    desc: `Our dedicated team comprehends the intricate challenges businesses encounter in recruitment. Collaborating with us grants you access to a customized approach that simplifies your hiring process, conserving valuable time and resources while ensuring outstanding outcomes. Let us alleviate the burdens of recruitment, allowing you to focus on what matters most.`
  },
  {
    heading: "Your Recruitment Partner of Choice",
    image: context3,
    desc: `At here, we believe in forging long-term partnerships built on trust, transparency, and results. When you choose to partner with us, you're not just gaining access to our extensive network of qualified candidates; you're also benefiting from our commitment to delivering value at every stage of the hiring process. Let us help you take your talent strategy to the next level.`
  },
  {
    heading: "Maximize Your Recruitment ROI",
    image: context4,
    desc: "With us as your recruitment partner, you can expect tangible results that drive business growth and success. Our proven track record of success speaks for itself, as we've helped countless employers across industries find and retain top talent that aligns with their organizational goals and values. Discover the difference that partnering with us can make for your company today."
  },
]

export const blendData = [
  { 
    position:"top-0 max-sm:left-0 sm:right-0left-0 sm:right-0", 
    image:0, 
    margin:"my-10", 
    heading:"Personalized Solutions for Every Recruitment Challenge", 
    subHeading:"Elevate Your Hiring Strategy"
  },
  { 
    position:"bottom-0 right-0", 
    image:1, 
    margin:"my-16", 
    heading:"From Executive Search to Temp Staffing", 
    subHeading:"Tailored Solutions to Fuel Your Success"
  },
  { 
    position:"max-sm:top-0 sm:bottom-0 left-0", 
    image:2, 
    margin:"my-14", 
    heading:"Your Recruitment Partner of Choice", 
    subHeading:"Where Innovation Meets Expertise"
  },
  { 
    position:"top-0 max-sm:right-0 sm:left-0", 
    image:3, 
    margin:"my-20", 
    heading:"Efficiency, Effectiveness, Excellence", 
    subHeading:"Experience the Advantage Today"
  },
]

export const characterData = [
  {size:"w-64 sm:w-72", position: "end", image:0, heading:"Building Careers, Changing Lives"},
  {size:"w-32 sm:w-44", position: "end", image:1, heading:"Unlocking Potential Together"},
  {size:"w-56 sm:w-64", position: "start", image:2, heading:"Empowering Your Career Journey"},
  {size:"w-56 sm:w-64", position: "start", image:3, heading:"Where Talent Finds Home"},
]

type BlendProps = {
  position: string, 
  image: number, 
  heading: string, 
  subHeading: string, 
  margin: string
}

const blendImages = [ Office5, Office6, Office7, Office8 ]

export const Blend = (props: BlendProps) => { 
  return (
    <div className={`relative h-[220px] sm:h-[350px] max-sm:my-4 ${props.margin}`}>
      <Image src={blendImages[props.image]} className=" w-full h-full object-cover" alt="computers" />
      <div className={`absolute z-10 bg-white h-20 sm:h-28 w-[240px] sm:w-[320px] py-1 px-2 sm:px-6 flex flex-col items-start justify-center ${props.position}`}>
        <p className="text-amber-900 font-semibold py-1 max-sm:text-sm">{props.heading} :</p>
        <p className="text-gray-600 font-semibold max-sm:text-xs">{props.subHeading}</p>
      </div>
    </div>
  )
}


type CharacterProps = {
  size: string, 
  image: number, 
  heading: string, 
  position: string, 
}

const characterImages = [ Character1, Character2, Character3, Character4 ]

export const Character = (props: CharacterProps) => { 
  return (
    <div className={`px-1 sm:px-2 py-1 flex flex-col items-${props.position}`}>
      <Image src={characterImages[props.image]} className={`${props.size} object-cover`} alt="characters" />
      <p className="text-amber-900 font-semibold max-sm:mt-1 text-[9px] sm:text-[12px]">{props.heading}</p>
    </div>
  )
}
