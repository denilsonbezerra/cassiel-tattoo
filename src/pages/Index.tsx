import SEO from "@/components/SEO";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import CoverupHighlight from "@/components/landing/CoverupHighlight";
import Gallery from "@/components/landing/Gallery";
import CTASection from "@/components/landing/CTASection";
import WhatsappButton from "@/components/landing/WhatsappButton";

const Index = () => {
  return (
    <main>
      <SEO title="Tatuador Cassiel | Cover-up e Fine Line em Fortaleza" description="Trabalhos autorais, cover-up e fine line com foco em cicatrização e estética. Agende sua sessão pelo WhatsApp." />
      <Hero />
      <About />
      <CoverupHighlight />
      <Gallery />
      <CTASection />
      <WhatsappButton />
    </main>
  );
};

export default Index;
