import { Navbar }          from "@/components/layout/Navbar";
import { Footer }          from "@/components/layout/Footer";
import { Hero }            from "@/components/sections/Hero";
import { About }           from "@/components/sections/About";
import { Stack }           from "@/components/sections/Stack";
import { Projects }        from "@/components/sections/Projects";
import { Certifications }  from "@/components/sections/Certifications";
import { Highlights }      from "@/components/sections/Highlights";
import { News }            from "@/components/sections/News";
import { Contact }         from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Certifications />
        <Highlights />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
