import { Hero } from "@/sections/Hero";
import { Overview } from "@/sections/Overview";
import { SelectedWork } from "@/sections/SelectedWork";
import { WritingSection } from "@/sections/WritingSection";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <SelectedWork />
      <WritingSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
