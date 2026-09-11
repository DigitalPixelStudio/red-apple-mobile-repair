import DynamicBar from "@/components/DynamicBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DynamicIsland from "@/components/DynamicIsland";
import TrustBadges from "@/components/TrustBadges";
import Stats from "@/components/Stats";
import RepairSelector from "@/components/RepairSelector";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import DeviceGallery from "@/components/DeviceGallery";
import PriceCompare from "@/components/PriceCompare";
import ProcessTimeline from "@/components/ProcessTimeline";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import EmergencyRepair from "@/components/EmergencyRepair";
import Workshop from "@/components/Workshop";
import BrandStory from "@/components/BrandStory";
import CorporateSection from "@/components/CorporateSection";
import Offers from "@/components/Offers";
import Awards from "@/components/Awards";
import EcoRepair from "@/components/EcoRepair";
import Community from "@/components/Community";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Tips from "@/components/Tips";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import LocationSection from "@/components/LocationSection";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <DynamicBar />
      <Navbar />
      <DynamicIsland />
      <div className="relative z-10">
        <Hero />
        <TrustBadges />
        <Stats />
        <RepairSelector />
        <Services />
        <BeforeAfter />
        <Gallery />
        <DeviceGallery />
        <PriceCompare />
        <ProcessTimeline />
        <HowItWorks />
        <WhyUs />
        <PromoBanner />
        <EmergencyRepair />
        <Offers />
        <Workshop />
        <BrandStory />
        <CorporateSection />
        <Awards />
        <EcoRepair />
        <Community />
        <Testimonials />
        <Tips />
        <ServiceAreas />
        <Faq />
        <Newsletter />
        <LocationSection />
        <SocialBar />
      </div>
      <Footer />
      <Chatbot />
      <StickyCta />
    </main>
  );
}
