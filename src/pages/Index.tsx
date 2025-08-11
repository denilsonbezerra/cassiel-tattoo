import SEO from "@/components/SEO";
import Header from "@/components/landing/Haeder";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import CoverupHighlight from "@/components/landing/CoverupHighlight";
import RealismHighlight from "@/components/landing/RealismHighlight";
import Gallery from "@/components/landing/Gallery";
import CTASection from "@/components/landing/CTASection";
import WhatsappButton from "@/components/landing/WhatsappButton";

const Index = () => {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <SEO title="Felipe Cassiel | Tattoos Realism, Blackwork & Cover-up" description="Custom work, cover-up and fine line with focus on healing and aesthetics. Book your session via WhatsApp." />
      <Header  />
      <Hero />
      <About />
      <CoverupHighlight />
      <RealismHighlight />
      <Gallery />
      <CTASection />
      <WhatsappButton />
    </main>
  );
};

export default Index;
