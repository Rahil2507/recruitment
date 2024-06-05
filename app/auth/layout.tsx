import Footer from "@/components/footer/footer"

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <div className="min-h-[92vh] pt-12 flex items-start justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-gray-900">
        {children}
      </div>
      <Footer />
    </div>
  )
}
