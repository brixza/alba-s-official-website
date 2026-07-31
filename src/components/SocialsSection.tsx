import { Instagram, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SocialsSection = () => {
  return (
    <section id="socials" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          Socials
        </h2>
        <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
          @alba
        </p>

        <div className="mt-10 flex items-center justify-center gap-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-foreground transition-colors hover:text-primary"
          >
            <Youtube className="h-7 w-7" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-foreground transition-colors hover:text-primary"
          >
            <TikTokIcon className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
