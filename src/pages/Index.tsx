import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import TourSection from "@/components/TourSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <TourSection />
      <Footer />
    </main>
  );
};

export default Index;
