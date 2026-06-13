import { services } from "@/data/services";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ServicesSection } from "@/components/ServicesSection";
import { HomeAbout } from "@/components/HomeAbout";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero serviceCount={services.length} />
      <Features />
      <ServicesSection services={services} />
      <HomeAbout />
      <ContactSection />
    </>
  );
}
