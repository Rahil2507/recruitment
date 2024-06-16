import type { Metadata, Viewport } from "next";
// import { Inter, Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/public-navbar";
// import { headers } from "next/headers";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['vietnamese'],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "Get Hired Solution",
  description: "Recruitment Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const session = await auth()
  // const headersList = headers();
  // const fullUrl = headersList.get('referer') || "";
  // console.log(fullUrl);
 
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body >
          <Toaster richColors position="top-right" />
          <Navbar/>
          <div className="pt-14">
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};