import { SmoothScroll } from "@/components/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WadaSection } from "@/components/WadaSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AcademySection } from "@/components/AcademySection";
import { ReelProductionSection } from "@/components/ReelProductionSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton, BackToTop } from "@/components/FloatingControls";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WadaSection />
        <PortfolioSection />
        <AcademySection />
        <ReelProductionSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </SmoothScroll>
  );
}
