'use client'
import { Hero } from '@/components/Hero';
import { AboutSkills } from '@/components/AboutSkills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { ScrollToTop } from '@/components/ScrollToTop';
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <ScrollToTop />
      <Hero />
      <AboutSkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
