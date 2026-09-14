import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import DevicesSection from "@/sections/DevicesSection";
import PricingSection from "@/sections/PricingSection";
import AboutSection from "@/sections/AboutSection";
import ProcessSection from "@/sections/ProcessSection";
import ReviewsSection from "@/sections/ReviewsSection";
import TeamSection from "@/sections/TeamSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans antialiased">
      <HeroSection />
      <ServicesSection />
      <DevicesSection />
      <PricingSection />
      <AboutSection />
      <ProcessSection />
      <ReviewsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
