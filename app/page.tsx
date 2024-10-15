import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "../data/index"
import Experience from "@/components/Experience";
import Process from "../components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
