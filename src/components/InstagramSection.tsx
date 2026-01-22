import { Instagram } from "lucide-react";
import instagram1 from "@/assets/instagram-1.png";
import instagram2 from "@/assets/instagram-2.png";
import instagram3 from "@/assets/instagram-3.png";
import instagram4 from "@/assets/instagram-4.png";
import instagram5 from "@/assets/instagram-5.png";
import instagram6 from "@/assets/instagram-6.png";

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
