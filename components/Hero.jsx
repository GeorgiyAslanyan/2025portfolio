import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[681px]">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-start gap-0 sm:gap-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl leading-[1.4] ">
        <div className="rounded-full p-1  bg-gradient-to-b w-fit shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur-md from-zinc-900/70 to-zinc-800/90 ring-zinc-100/10 [--spotlight-color:rgb(217_249_157_/_0.07)]">
          <Image width={80} height={80} src="/avatar.png" alt="ava" className="rounded-full"/>
        </div>
        <div className="flex">
          <h1>&lt; Разработчик &#47;&gt;, Дизайнер, </h1>
        </div>

        <div className="flex gap-4">
          <h1>3D Моделлер</h1>
        </div>
      </div>
      <p className="mt-6 text-base text-zinc-400">
        Меня зовут Георгий. Я проходил обучение последние годы, изучал
        JavaScript и наткнулся на React. С тех пор я продолжил изучение этой
        библиотеки и других, связанных с ней. За эти годы я освоил множество
        технологий и инструментов.
      </p>
      <div className="gap-4 flex py-4">
        <a href="https://github.com/GeorgiyAslanyan" target="_blank" rel="noopener noreferrer">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition text-zinc-400 group-hover:text-zinc-200"
          >
            <path
              d="M10 14.9993C9.34732 15.6987 8.98919 16.6227 9 17.5793V20.9993M14 14.9993C14.6527 15.6987 15.0108 16.6227 15 17.5793V20.9993M9 19.0493C8.10549 19.4055 7.13532 19.5294 6.18 19.4093C4.66 18.8893 5.06 17.5093 4.28 16.9393C3.90518 16.6713 3.46037 16.5184 3 16.4993M19 9.74927C19 12.7493 17.05 14.9993 12 14.9993C6.95 14.9993 5 12.7493 5 9.74927C4.9753 8.70844 5.20893 7.67772 5.68 6.74927C5.34 5.27927 5.47 3.46927 6.2 3.10927C6.93 2.74927 8.47 3.40927 9.74 4.25927C10.486 4.12615 11.2422 4.05922 12 4.05927C12.7572 4.05262 13.5134 4.11285 14.26 4.23927C15.53 3.38927 17.14 2.75927 17.8 3.08927C18.46 3.41927 18.66 5.25927 18.32 6.72927C18.7943 7.66371 19.028 8.70171 19 9.74927Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a href="mailto:georgiy.aslanyan13@mail.ru" target="_blank" rel="noopener noreferrer">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition text-zinc-400 group-hover:text-zinc-200"
          >
            <path
              d="M20.4098 7.20903L17.3974 9.55205C15.4711 11.0503 14.5079 11.7994 13.4398 12.0867C12.4976 12.3401 11.5024 12.3401 10.5602 12.0867C9.49205 11.7994 8.52891 11.0503 6.60263 9.55205L3.59018 7.20903M20.4098 7.20903C19.9756 6.46813 19.3272 5.86533 18.543 5.47685C17.5804 5 16.3202 5 13.8 5H10.2C7.67976 5 6.41965 5 5.45704 5.47685C4.67282 5.86533 4.02441 6.46813 3.59018 7.20903M20.4098 7.20903C20.4444 7.26809 20.4777 7.32802 20.5095 7.38879C21 8.32466 21 9.54977 21 12C21 14.4502 21 15.6753 20.5095 16.6112C20.0781 17.4344 19.3897 18.1037 18.543 18.5232C17.5804 19 16.3202 19 13.8 19H10.2C7.67976 19 6.41965 19 5.45704 18.5232C4.61031 18.1037 3.9219 17.4344 3.49047 16.6112C3 15.6753 3 14.4502 3 12C3 9.54977 3 8.32466 3.49047 7.38879C3.52232 7.32802 3.55557 7.26809 3.59018 7.20903"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a href="https://t.me/George1307" target="_blank" rel="noopener noreferrer">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition text-zinc-400 group-hover:text-zinc-200"
          >
            <path
              d="M5.02167 10.7924L18.9112 5.3963C19.6841 5.09602 20.0706 4.94587 20.3553 5.01778C20.6035 5.08048 20.8121 5.24357 20.9282 5.46569C21.0614 5.72045 20.9929 6.11922 20.8561 6.91676L19.2978 15.9976C19.0609 17.3785 18.9424 18.069 18.5687 18.454C18.2421 18.7906 17.7909 18.9869 17.3148 18.9996C16.7703 19.0141 16.1609 18.6403 14.9422 17.8927L12.3564 16.3065C11.5797 15.83 11.1913 15.5918 11.0238 15.2712C10.8769 14.9902 10.8398 14.667 10.9193 14.3614C11.01 14.0129 11.3348 13.6974 11.9845 13.0665L16.3506 8.82576L8.99682 13.1112C8.40764 13.4546 8.11303 13.6263 7.79583 13.7198C7.51466 13.8028 7.22139 13.8403 6.92771 13.831C6.59638 13.8205 6.26604 13.7288 5.60537 13.5454L5.16013 13.4219C3.92874 13.0802 3.31304 12.9093 3.13094 12.6193C2.97337 12.3684 2.95698 12.0571 3.08736 11.7919C3.23805 11.4854 3.83259 11.2544 5.02167 10.7924Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );  
};

export default Hero;
