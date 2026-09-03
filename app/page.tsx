import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PracticeGallery } from "@/components/PracticeGallery";
import { Yoga } from "@/components/Yoga";
import { About } from "@/components/About";
import { Retreats } from "@/components/Retreats";
import { Workshops } from "@/components/Workshops";
import { FAQ } from "@/components/FAQ";
import { AboutMe } from "@/components/AboutMe";
import { Place } from "@/components/Place";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PracticeGallery />
        <Yoga />
        <About />
        <Retreats />
        <Workshops />
        <FAQ />
        <AboutMe />
        <Place />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
