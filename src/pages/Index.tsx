import SEO from "@/components/SEO";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Benefits from "@/components/landing/Benefits";
import CoverupHighlight from "@/components/landing/CoverupHighlight";
import RealismHighlight from "@/components/landing/RealismHighlight";
import Location from "@/components/landing/Location";
import CTASection from "@/components/landing/CTASection";
import WhatsappButton from "@/components/landing/WhatsappButton";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <SEO title="Felipe Cassiel | Tattoos Realismo Preto e Cinza & Cover-up" description="Projetos exclusivos, realismo, preto e cinza, e restauração usando técnicas de cover-up." />
      <Header />
      <Hero />
      <About />
      <div id="benefits">
        <Benefits />
      </div>
      <RealismHighlight />
      <CoverupHighlight />
      <div id="location">
        <Location />
      </div>
      <CTASection />
      <WhatsappButton />
      <Footer />
    </main>
  );
};

export default Index;
