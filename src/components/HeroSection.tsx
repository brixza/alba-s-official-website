import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/components/ui/button";
import { Play, Instagram, Youtube, Music2 } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
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

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <span className="font-display text-2xl font-light tracking-widest text-foreground">
          ALBA
        </span>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#music" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            Music
          </a>
          <a href="#videos" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            Videos
          </a>
          <a href="#lyrics" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            Lyrics
          </a>
          <a href="#about" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            About
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="animate-fade-in font-display text-7xl font-light tracking-[0.3em] text-foreground md:text-9xl">
          ALBA
        </h1>
        <p className="animate-fade-in-delay mt-4 font-display text-xl italic text-muted-foreground md:text-2xl">
          Where Darkness Meets the Dawn
        </p>
        <div className="animate-fade-in-delay-2 mt-12 flex flex-col gap-4 sm:flex-row">
          <Button variant="hero" size="lg">
            <Play className="mr-2 h-4 w-4" />
            Listen Now
          </Button>
          <Button variant="heroOutline" size="lg">
            View Tour Dates
          </Button>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="TikTok">
          <TikTokIcon className="h-5 w-5" />
        </a>
        <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="YouTube">
          <Youtube className="h-5 w-5" />
        </a>
        <a href="#" className="text-white transition-opacity hover:opacity-70" aria-label="Spotify">
          <Music2 className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
