import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DynamicIsland from "@/components/DynamicIsland";
import RepairSelector from "@/components/RepairSelector";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050506]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,85,0.07),transparent_60%)]" />
      <Navbar />
      <DynamicIsland />
      <div className="relative z-10">
        <Hero />
        <RepairSelector />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Faq />
        <LocationSection />
      </div>
      <Footer />
      <Chatbot />
      <StickyCta />
    </main>
  );
}
