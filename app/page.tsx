import HeroSection from '@/components/sections/HeroSection';
import PartnersSection from '@/components/sections/PartnersSection';
import AboutSection from '@/components/sections/AboutSection';
import CoursesSection from '@/components/sections/CoursesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import LearningJourneySection from '@/components/sections/LearningJourneySection';
import WhyLearningFromUsSection from '@/components/sections/WhyLearningFromUsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <LearningJourneySection />
      <WhyLearningFromUsSection />
      <ContactSection />
    </>
  );
}