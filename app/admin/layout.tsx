import AdminNavbar from "@/components/navbar/admin-navbar"

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
  <div className="min-h-[95vh] flex justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-gray-900">
    <div className="max-md:hidden">
      <div className="w-[200px]">
        <AdminNavbar/>
      </div>
      {/* <div className="ml-[200px] md:w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px]"> */}
      <div className="ml-[200px] w-[72vw] lg:w-[78vw] xl:w-[82vw] py-4">
        {children}
      </div>
    </div>
    <div className="md:hidden flex flex-col justify-center items-center text-gray-300">
      <p className="text-2xl">Switch to Desktop</p>
      <p className="text-2xl mt-2 mb-10">to view Admin Panel</p>
    </div>
  </div>
  )
}
