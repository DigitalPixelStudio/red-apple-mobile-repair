import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import DynamicIsland from "@/components/DynamicIsland";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Ecosystem from "@/components/Ecosystem";
import DisplayFocus from "@/components/DisplayFocus";
import ServicesGrid from "@/components/ServicesGrid";
import SoftwareRecovery from "@/components/SoftwareRecovery";
import ProcessSection from "@/components/ProcessSection";
import QuoteSection from "@/components/QuoteSection";
import ConciergeLaunch from "@/components/ConciergeLaunch";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Concierge from "@/components/Concierge";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <DynamicIsland />
      <div className="relative z-10">
        <Hero />
        <TrustBar />
        <Ecosystem />
        <DisplayFocus />
        <ServicesGrid />
        <SoftwareRecovery />
        <ProcessSection />
        <QuoteSection />
        <ConciergeLaunch />
        <ReviewsSection />
        <FaqSection />
        <LocationSection />
        <FinalCta />
      </div>
      <Footer />
      <Concierge />
      <StickyCta />
    </main>
  );
}
