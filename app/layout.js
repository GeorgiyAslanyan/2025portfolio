import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Georgiy Aslanyan",
  description: "Georgiy Aslanyan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false" className={manrope.className + " overflow-x-hidden  "}>
        <div className="pointer-events-none fixed inset-0 select-none bg-[url('/grid-black.svg')] bg-top bg-repeat dark:bg-[url('/grid.svg')] ">
       </div>
        <Navbar />
        <div className="inset-0 relative w-screen  flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-zinc-900/80 ring-zinc-400/20 px-1 sm:px-10" id='about'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
