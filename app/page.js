import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return <main className="flex flex-col gap-5 min-h-screen  pt-44 ">
    <Hero />
    <Projects />
    <hr className="bg-zinc-400 border-zinc-800"/>
    <Contacts />
  </main>;
}
