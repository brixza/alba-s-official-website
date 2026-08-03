import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import SpotifySection from "@/components/SpotifySection";
import SocialsSection from "@/components/SocialsSection";
import ArchivesSection from "@/components/ArchivesSection";
import ArchivesSectionAlt from "@/components/ArchivesSectionAlt";
import MailingListSection from "@/components/MailingListSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideosSection />
      <SpotifySection />
      <SocialsSection />
      <ArchivesSection />
      <ArchivesSectionAlt />
      <MailingListSection />
      <Footer />
    </main>
  );
};

export default Index;
