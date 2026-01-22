import { Instagram } from "lucide-react";
import instagram1 from "@/assets/instagram-1.png";

const InstagramSection = () => {
  // Placeholder images - replace with your Instagram embed widget or API integration
  const placeholderPosts = [
    { id: 1, image: instagram1 },
    { id: 2, gradient: "from-secondary/30 to-secondary/50" },
    { id: 3, gradient: "from-primary/30 to-secondary/30" },
    { id: 4, gradient: "from-secondary/20 to-primary/30" },
    { id: 5, gradient: "from-primary/40 to-primary/20" },
    { id: 6, gradient: "from-secondary/40 to-secondary/20" },
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

        {/* Placeholder Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {placeholderPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              {/* Image or placeholder gradient background */}
              {post.image ? (
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                />
              )}
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-foreground" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
