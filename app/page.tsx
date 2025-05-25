import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WhyLearningFromUsSection from "@/components/sections/WhyLearningFromUsSection";
import CoursesTab from "@/components/sections/CoursesSection";
import ContactSection from "@/components/sections/ContactSection";
import CompanyCarousel from "@/components/sections/PartnersSection";
import Temp from "./Temp";
export default function Home() {
  return (
    <>
      <Temp />
      <HeroSection />
      <CompanyCarousel />
      <AboutSection />
      <CoursesTab />
      <WhyChooseUsSection />
      {/* <LearningJourneySection /> */}
      <WhyLearningFromUsSection />
      <ContactSection />
    </>
  );
}
