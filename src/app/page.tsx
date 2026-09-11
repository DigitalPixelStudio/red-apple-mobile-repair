import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DynamicIsland from "@/components/DynamicIsland";
import Stats from "@/components/Stats";
import RepairSelector from "@/components/RepairSelector";
import Services from "@/components/Services";
import PriceCompare from "@/components/PriceCompare";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Workshop from "@/components/Workshop";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Tips from "@/components/Tips";
import Faq from "@/components/Faq";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <DynamicIsland />
      <div className="relative z-10">
        <Hero />
        <Stats />
        <RepairSelector />
        <Services />
        <PriceCompare />
        <HowItWorks />
        <WhyUs />
        <Workshop />
        <BrandStory />
        <Testimonials />
        <Tips />
        <Faq />
        <LocationSection />
      </div>
      <Footer />
      <Chatbot />
      <StickyCta />
    </main>
  );
}
