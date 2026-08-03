import heroVideo from "@/assets/hero-video.mp4";
import { Instagram, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24El-2.482.404c-2.023.312-4.134.463-6.168.312-1.797-.134-3.612-.512-5.267-1.122-.359-.143-.6-.482-.6-.863 0-.336.18-.648.48-.805.18-.084.359-.1.539-.05 1.533.48 3.146.797 4.781.912 1.955.143 3.934-.035 5.85-.539l2.423-.6c.18-.048.359-.012.504.096.145.108.24.276.24.48 0 .18-.072.348-.18.467-.084.096-.168.168-.168.168zm1.553-3.03c-.287.443-.781.6-1.225.697l-2.795.6c-2.229.463-4.557.672-6.85.6-2.111-.06-4.236-.443-6.168-1.145-.336-.12-.539-.48-.539-.852 0-.324.168-.624.443443-.084.084-.168.12-.168.12 1.729.552 3.542.912 5.386 1.07 2.36.204 4.755-.012 7.086-.576l2.735-.624c.18-.048.36.012.504.12.145.108.24.276.24.48 0 .156-.06.3-.168.42-.096.096-.18.168-.18.168zm.168-3.047c-.3.467-.815.648-1.283.744l-2.93.612c-2.469.504-5.033.732-7.548.648-2.36-.084-4.74-.54-6.875-1.343-.324-.12-.54-.456-.54-.816 0-.312.156-.612.372-.768.096-.06.18-.096.18-.096 1.871.576 3.83.96 5.81 1.116 2.627.192 5.295-.048 7.895-.672l2.87-.624c.18-.048.372.012.516.132.145.12.24.3.24.516 0 .168-.06.324-.18.444-.108.096-.192.18-.192.18z" />
  </svg>
);

const AppleMusicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.994 6.124a9.23 9.23 0 00-.24 2.19c-.563.07-1.14.127-1.718.165-.068-.42-.138-.84-.213-1.253.39.063.78.113 1.17.15.03-.084.06-.168.09-.252h-.089zm-3.86 11.847c-.836.42-1.6.633-2.29.633-.87 0-1.53-.253-1.98-.758-.45-.506-.675-1.206-.675-2.1 0-1.16.37-2.08 1.11-2.76.74-.68 1.74-1.02 3-1.02.42 0 .86.05 1.32.15l.18.04-.27 4.55c0 .34.08.6.24.79.16.19.38.28.66.28.39 0 .84-.18 1.35-.54l.36.45c-.66.59-1.35.98-2.07 1.17-.42.11-.84.17-1.26.17-.72 0-1.28-.21-1.68-.63-.4-.42-.6-.99-.6-1.71 0-.86.27-1.56.81-2.1.54-.54 1.24-.81 2.1-.81.34 0 .64.05.9.15l.09-.03.12-2.04c-.32-.06-.65-.09-.99-.09-.64 0-1.21.13-1.71.39-.5.26-.89.62-1.17 1.08-.28.46-.42.99-.42 1.59 0 .82.22 1.45.66 1.89.44.44 1.06.66 1.86.66.46 0 .93-.09 1.41-.26l.18.54c-.6.24-1.2.36-1.8.36-1.08 0-1.91-.3-2.49-.9-.58-.6-.87-1.43-.87-2.49 0-1.04.31-1.89.93-2.55.62-.66 1.46-.99 2.52-.99.64 0 1.27.1 1.89.3l.42.12-.51 8.52zm-2.19-6.87c-.18 0-.36.03-.54.09l-.09 1.56c.18-.04.36-.06.54-.06.46 0 .83.13 1.11.39.28.26.42.61.42 1.05 0 .54-.15.96-.45 1.26-.3.3-.71.45-1.23.45-.26 0-.5-.04-.72-.13l-.12.51c.3.09.6.13.9.13.66 0 1.19-.2 1.59-.6.4-.4.6-.93.6-1.59 0-.62-.19-1.11-.57-1.47-.38-.36-.89-.54-1.53-.54l-.21.01zm-3.75-1.02c-.04-.54-.27-.97-.69-1.29-.42-.32-.97-.48-1.65-.48-.68 0-1.24.16-1.68.48-.44.32-.69.75-.75 1.29l-.51 8.49h1.14l.48-8.04c.03-.42.19-.75.48-.99.29-.24.66-.36 1.11-.36.46 0 .84.12 1.14.36.3.24.47.57.51.99l.51 8.04h1.14l-.51-8.49zm-7.35 8.49h1.14l.66-11.04H7.434l-.66 11.04zm-2.04-11.04H5.304l.66 11.04H4.824l-.66-11.04zm11.58-1.26c-.24-.3-.57-.45-.99-.45-.42 0-.76.15-1.02.45-.26.3-.39.69-.39 1.17 0 .48.13.87.39 1.17.26.3.6.45 1.02.45.42 0 .75-.15.99-.45.24-.3.36-.69.36-1.17 0-.48-.12-.87-.36-1.17z" />
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
