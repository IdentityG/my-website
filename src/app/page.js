import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import IndustriesSection from "../components/IndustriesServed";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <Testimonials />
    </div>
  );
}
