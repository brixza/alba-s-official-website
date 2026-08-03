import { useState } from "react";
import { Plus } from "lucide-react";
import fourWalls from "@/assets/four-walls.png";
import dancers from "@/assets/dancers.jpg";
import bleecker from "@/assets/bleecker.jpg";
import liveScalateatern from "@/assets/live-scalateatern.png.asset.json";
import bts1 from "@/assets/instagram-2.png";
import bts2 from "@/assets/instagram-3.png";
import bts3 from "@/assets/instagram-4.png";
import bts4 from "@/assets/instagram-5.png";
import bts5 from "@/assets/instagram-6.png";
import bts6 from "@/assets/hero-alba.jpg";

const projects = [
  { title: "Live at Scalateatern", cover: liveScalateatern.url, gallery: [bts1, bts2, bts3, bts4] },
  { title: "Four Walls", cover: fourWalls, gallery: [bts1, bts2, bts3, bts4] },
  { title: "Dancers", cover: dancers, gallery: [bts5, bts6, bts1, bts3] },
  { title: "Bleecker", cover: bleecker, gallery: [bts2, bts4, bts5, bts6] },
];

const ArchivesSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="archives" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          Archives
        </h2>

        <div className="mt-16 flex flex-col gap-16">
          {projects.map((project, i) => {
            const isOpen = open === i;
            return (
              <div key={project.title}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.cover}
                      alt={`${project.title} project cover`}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-70" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <div>
                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                          {project.index}
                        </p>
                        <p className="mt-2 font-display text-3xl font-light text-foreground">
                          {project.title}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur">
                        <Plus
                          className={`h-4 w-4 text-foreground transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                        />
                      </span>
                    </div>
                  </div>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-700 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid grid-cols-2 gap-2 pt-2 md:grid-cols-4">
                      {project.gallery.map((src, g) => (
                        <img
                          key={g}
                          src={src}
                          alt={`Behind the scenes of ${project.title}, image ${g + 1}`}
                          loading="lazy"
                          className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchivesSection;
