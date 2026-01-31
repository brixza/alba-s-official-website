import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import SpotifySection from "@/components/SpotifySection";
import LyricsSection from "@/components/LyricsSection";
import VideosSection from "@/components/VideosSection";
import AboutSection from "@/components/AboutSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MusicSection />
      <VideosSection />
      <SpotifySection />
      <LyricsSection />
      <AboutSection />
      <InstagramSection />
      <Footer />
    </main>
  );
};

export default Index;
