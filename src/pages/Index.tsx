import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProvisioningEngineSection from "@/components/sections/ProvisioningEngineSection";
import SupportExpertSection from "@/components/sections/SupportExpertSection";
import BlueprintGeneratorSection from "@/components/sections/BlueprintGeneratorSection";
import OCRLabSection from "@/components/sections/OCRLabSection";
import PromptArchitectSection from "@/components/sections/PromptArchitectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="projects">
          <ProvisioningEngineSection />
          <SupportExpertSection />
          <BlueprintGeneratorSection />
          <OCRLabSection />
          <PromptArchitectSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
