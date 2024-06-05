import Footer from "@/components/footer/footer"

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
  <div className="">
    {children}
    <Footer/>
  </div>
  )
}
