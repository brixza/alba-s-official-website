import { Instagram, Youtube, Music2 } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-display text-3xl font-light tracking-[0.3em] text-foreground">
          ALBA
        </span>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#"
            className="rounded-full bg-secondary p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-secondary p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="TikTok"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-secondary p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-secondary p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Spotify"
          >
            <Music2 className="h-5 w-5" />
          </a>
        </div>

        {/* Newsletter */}
        <div className="mt-12">
          <p className="font-body text-sm text-muted-foreground">
            Join the mailing list for exclusive updates and early access
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-72"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-gold px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Alba Music. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
