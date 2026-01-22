import heroImage from "@/assets/hero-alba.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alba"
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
          <a href="#about" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            About
          </a>
          <a href="#tour" className="font-body text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
            Tour
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="h-12 w-6 rounded-full border border-foreground/30 p-1">
          <div className="h-2 w-1 mx-auto rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
