import heroVideo from "@/assets/hero-video.mp4";
import { Instagram, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24l-2.482-.404c-2.023-.312-4.134-.463-6.168-.312-1.797.134-3.612.512-5.267 1.122-.359.143-.6.482-.6.863 0 .336.18.648.48.805.18.084.359.1.539.05 1.533-.48 3.146-.797 4.781-.912 1.955-.143 3.934.035 5.85.539l2.423.6c.18.048.359.012.504-.096.145-.108.24-.276.24-.48 0-.18-.072-.348-.18-.467-.084-.096-.168-.168-.168-.168zm1.553-3.03c-.287.443-.781.6-1.225.697l-2.795.6c-2.229.463-4.557.672-6.85.6-2.111-.06-4.236-.443-6.168-1.145-.336-.12-.539-.48-.539-.852 0-.324.168-.624.443-.768.096-.06.18-.096.18-.096 1.729.576 3.542.96 5.386 1.07 2.36.204 4.755-.012 7.086-.576l2.735-.624c.18-.048.36.012.504.12.145.108.24.276.24.48 0 .156-.06.3-.168.42-.096.096-.18.168-.18.168zm.168-3.047c-.3.467-.815.648-1.283.744l-2.93.612c-2.469.504-5.033.732-7.548.648-2.36-.084-4.74-.54-6.875-1.343-.324-.12-.54-.456-.54-.816 0-.312.156-.612.372-.768.096-.06.18-.096.18-.096 1.871.576 3.83.96 5.81 1.116 2.627.192 5.295-.048 7.895-.672l2.87-.624c.18-.048.372.012.516.132.145.12.24.3.24.516 0 .168-.06.324-.18.444-.108.096-.192.18-.192.18z" />
  </svg>
);

const AppleMusicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17.1 2.94 12.45 4.7 9.39c.85-1.5 2.27-2.45 3.85-2.47 1.35-.03 2.68.92 3.49.92.84 0 2.36-1.1 3.56-.96.65.03 2.49.26 3.63 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.94 2.01-1.72 2.94-.78.95-1.94 1.68-2.97 1.5-.16-1.15.91-2.11 1.75-2.94" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="animate-fade-in font-display text-7xl font-light tracking-[0.3em] text-foreground md:text-9xl">
          ALBA
        </h1>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        <a href="https://instagram.com/maybeealba" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity hover:opacity-70" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="https://tiktok.com/@maybeealba" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity hover:opacity-70" aria-label="TikTok">
          <TikTokIcon className="h-5 w-5" />
        </a>
        <a href="https://www.youtube.com/@ALBASHouseParty" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity hover:opacity-70" aria-label="YouTube">
          <Youtube className="h-5 w-5" />
        </a>
        <a href="https://open.spotify.com/artist/5MKM7cNYL4SIuIe6q4Qd1p" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity hover:opacity-70" aria-label="Spotify">
          <SpotifyIcon className="h-5 w-5" />
        </a>
        <a href="https://music.apple.com/us/artist/alba/1593579597" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity hover:opacity-70" aria-label="Apple Music">
          <AppleMusicIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
