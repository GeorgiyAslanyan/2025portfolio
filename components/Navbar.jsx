'use client'
import Link from "next/link";
import React, { useState } from "react";  

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="fixed z-[100] top-0 left-0 w-screen p-3 flex justify-center text-[#e4e4e7]">
      
        <nav className="group rounded-full w-fit gap-7  bg-gradient-to-b px-5 py-3  shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur-md from-zinc-900/70 to-zinc-800/90 ring-zinc-100/10 [--spotlight-color:rgb(217_249_157_/_0.07)] pointer-events-auto relative z-50 hidden md:flex">
        <a className=" hover:text-lime-400" href={"/#about"}>обо мне</a>
        <a className="hover:text-lime-400" href={"/#projects"}>проекты</a>
        <a className="hover:text-lime-400" href={"/#contacts"}>связаться</a>
        <a className="  text-lime-400" target="_blank" rel="noopener noreferrer" href={"https://t.me/George1307"}>telegram</a>
        <a className="hover:text-lime-400" target="_blank" rel="noopener noreferrer" href={"https://github.com/GeorgiyAslanyan"}>github</a>
        <a className="hover:text-lime-400" target="_blank" rel="noopener noreferrer" href={"mailto:georgiy.aslanyan13@mail.ru"}>email</a>
      </nav>  
      <nav className="group rounded-xl w-full gap-7  bg-gradient-to-b px-5 py-3  shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur-md from-zinc-900/70 to-zinc-800/90 ring-zinc-100/10 [--spotlight-color:rgb(217_249_157_/_0.07)] pointer-events-auto relative z-50 flex flex-col md:hidden">
        <div className="flex justify-between">
          <p><span className="text-lime-400">Georgiy</span>Aslanyan</p>
<svg onClick={() => setIsModalOpen(!isModalOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isModalOpen ? "rotate-90" : "rotate-0"} ease-linear duration-100 transition-all w-6`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

        </div>
        <div onClick={() => setIsModalOpen(false)} className={`${isModalOpen ? "flex" : "hidden"} flex-col gap-2`}>
          <a className=" hover:text-lime-400 py-2" href={"/#about"}>обо мне</a>
        <a className="hover:text-lime-400 py-2" href={"/#projects"}>проекты</a>
        <a className="hover:text-lime-400 py-2" href={"/#contacts"}>связаться</a>
        <a className="hover:text-lime-400 py-2" target="_blank" rel="noopener noreferrer" href={"https://t.me/George1307"}>telegram</a>
        <a className="hover:text-lime-400 py-2" target="_blank" rel="noopener noreferrer" href={"https://github.com/GeorgiyAslanyan"}>github</a>
        <a className="hover:text-lime-400 py-2   " target="_blank" rel="noopener noreferrer" href={"mailto:georgiy.aslanyan13@mail.ru"}>email</a>
        </div>
      </nav>  
    </div>
  );
};

export default Navbar;
