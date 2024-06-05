import Link from "next/link";
import { adminNavlinks } from "./admin-navlinks";
import { UserButton } from "@/components/auth/user-button";
import { serverCurrentUser } from "@/lib/auth";
import { UserLogged } from "@/schemas";

export default async function AdminNavbar() {
  const user: UserLogged = await serverCurrentUser()

  return (
    <div className="h-[89vh] fixed w-[200px] left-0 top-[68px] flex flex-col rounded-r-md bg-gray-900 p-2 z-40">
      <div className="flex flex-col items-start">
        <div className="my-4 w-full">
          <UserButton user={user}/>
        </div>
        <div className="mb-4 w-full border-b border-1 border-white"></div>
        {adminNavlinks.map((navlink, i) => {
          if(user.role === "OWNER" || !navlink.owner) return (
            <Link href={`/admin/${navlink.link}`} key={i} className="flex items-center text-white hover:text-sky-500 cursor-pointer my-1 p-2 rounded-md">
              {navlink.icon}
              <p className="">{navlink.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}