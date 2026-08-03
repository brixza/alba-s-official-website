import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import fourWalls from "@/assets/four-walls.png";
import dancers from "@/assets/dancers.jpg";
import bleecker from "@/assets/bleecker.jpg";
import bts1 from "@/assets/instagram-2.png";
import bts2 from "@/assets/instagram-3.png";
import bts3 from "@/assets/instagram-4.png";
import bts4 from "@/assets/instagram-5.png";
import bts5 from "@/assets/instagram-6.png";
import bts6 from "@/assets/hero-alba.jpg";

const projects = [
  { index: "01", title: "Four Walls", year: "2024", cover: fourWalls, gallery: [bts1, bts2, bts3, bts4, bts5, bts6] },
  { index: "02", title: "Dancers", year: "2023", cover: dancers, gallery: [bts5, bts6, bts1, bts3, bts2, bts4] },
  { index: "03", title: "Bleecker", year: "2022", cover: bleecker, gallery: [bts2, bts4, bts5, bts6, bts1, bts3] },
];

const ArchivesSectionAlt = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="archives-alt" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
              Alternate layout
            </p>
            <h2 className="font-display mt-2 text-4xl font-light tracking-widest text-foreground md:text-5xl">
              Archives
            </h2>
          </div>
          <p className="hidden max-w-xs text-right font-body text-sm text-muted-foreground md:block">
            Select a project to open its behind-the-scenes archive.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const isOpen = open === i;
            return (
              <div key={project.title} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-8 text-left md:gap-8"
                >
                  <span className="font-body w-12 shrink-0 text-sm text-muted-foreground md:w-16">
                    {project.index}
                  </span>

                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                    <img
                      src={project.cover}
                      alt={`${project.title} project cover`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-display text-2xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-4xl">
                      {project.title}
                    </p>
                    <p className="font-body mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {project.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`font-body hidden text-xs uppercase tracking-widest text-muted-foreground transition-all duration-300 md:block ${isOpen ? "opacity-0" : "opacity-100 group-hover:translate-x-1"}`}
                    >
                      Open
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur transition-colors duration-300 group-hover:border-primary/60">
                      <Plus
                        className={`h-4 w-4 text-foreground transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </span>
                  </div>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-700 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="pb-10 pt-2">
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                        {project.gallery.map((src, g) => (
                          <div key={g} className="group/img relative aspect-[4/5] overflow-hidden">
                            <img
                              src={src}
                              alt={`Behind the scenes of ${project.title}, image ${g + 1}`}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpen(null)}
                        className="font-body mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        <ArrowRight className="h-3 w-3 rotate-[-90deg]" />
                        Close archive
                      </button>
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

export default ArchivesSectionAlt;
