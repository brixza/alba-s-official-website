import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import SocialsSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideosSection />
      <SocialsSection />
      <Footer />
    </main>
  );
};

export default Index;
