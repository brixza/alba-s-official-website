import { Instagram, Youtube, Music2 } from "lucide-react";
import instagram1 from "@/assets/instagram-1.png";
import instagram2 from "@/assets/instagram-2.png";
import instagram3 from "@/assets/instagram-3.png";
import instagram4 from "@/assets/instagram-4.png";
import instagram5 from "@/assets/instagram-5.png";
import instagram6 from "@/assets/instagram-6.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const InstagramSection = () => {
  const posts = [
    { id: 1, image: instagram1 },
    { id: 2, image: instagram2 },
    { id: 3, image: instagram3 },
    { id: 4, image: instagram4 },
    { id: 5, image: instagram5 },
    { id: 6, image: instagram6 },
  ];
  return (
    <section id="instagram" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
            Instagram
          </h2>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            @alba
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-foreground" />
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a href="#" className="text-foreground transition-opacity hover:opacity-70" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground transition-opacity hover:opacity-70" aria-label="TikTok">
            <TikTokIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground transition-opacity hover:opacity-70" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground transition-opacity hover:opacity-70" aria-label="Spotify">
            <Music2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
