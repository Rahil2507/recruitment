import { CardWrapper } from "@/components/common/card-wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
        <div className='min-h-[95vh] pt-20 flex flex-col items-center justify-start bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-gray-900'>
          <CardWrapper
            heading="No Page Found !"
            size="small"
            headerLabel="Are you sure you entered the right URL ?"
            backButtonLabel=""
            backButtonHref="/"
          >
            <div className="flex flex-col items-center">
              <p className='text-2xl text-gray-700 font-semibold mt-10'>Explore other pages</p>
              <div className="my-6">
                <Link href="/" className="px-4 py-2 text-white bg-[#d8c3a5] rounded-md hover:bg-red-300" >Home</Link>
                <Link href="/jobs" className="px-4 py-2 text-white bg-[#d8c3a5] rounded-md hover:bg-red-300 mx-10" >Jobs</Link>
                <Link href="/contact" className="px-4 py-2 text-white bg-[#d8c3a5] rounded-md hover:bg-red-300" >Contact</Link>
              </div>
            </div>
          </CardWrapper>
            
        </div>
  )
}
