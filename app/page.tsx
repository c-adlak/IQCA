import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import LearningJourneySection from "@/components/sections/LearningJourneySection";
import WhyLearningFromUsSection from "@/components/sections/WhyLearningFromUsSection";
import CoursesTab from "@/components/sections/CoursesSection";
import ContactSection from "@/components/sections/ContactSection";
import CompanyCarousel from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <>
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
