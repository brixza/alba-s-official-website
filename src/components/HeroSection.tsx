import heroVideo from "@/assets/hero-video.mp4";
import { Instagram, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .52-.974c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 0 1 .257 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.793c3.563-1.08 9.484-.871 13.22 1.35a.937.937 0 0 1-.96 1.6z" />
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
