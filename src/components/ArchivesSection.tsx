import { useState } from "react";
import { Plus, X } from "lucide-react";

import dancers from "@/assets/dancers.jpg";
import bleecker from "@/assets/bleecker.jpg";
import liveScalateatern from "@/assets/scala.jpg";

import dancersBts1 from "@/assets/dancers/L1030915.jpg";
import dancersBts2 from "@/assets/dancers/Alba_musikvideo_stills_1.50.1.jpg";
import dancersBts3 from "@/assets/dancers/Alba_musikvideo_stills_1.55.2.jpg";
import dancersBts4 from "@/assets/dancers/Alba_musikvideo_stills_1.27.1.jpg";
import dancersBts5 from "@/assets/dancers/Alba_musikvideo_stills_1.26.1.jpg";
import dancersBts6 from "@/assets/dancers/Alba_musikvideo_stills_1.22.1.jpg";
import dancersBts7 from "@/assets/dancers/Alba_musikvideo_stills_1.16.1.jpg";
import dancersBts8 from "@/assets/dancers/Alba- Sneaks-02.jpg";
import dancersBts9 from "@/assets/dancers/Alba -61.jpg";
import dancersBts10 from "@/assets/dancers/Alba_musikvideo_stills_1.1.3.jpg";

import bleecker1 from "@/assets/bleecker/Kopia av Photo03_4.jpg";
import bleecker2 from "@/assets/bleecker/Kopia av Photo08_9.jpg";
import bleecker3 from "@/assets/bleecker/Kopia av Kopia av DSCF2006.jpg";
import bleecker4 from "@/assets/bleecker/Kopia av DSCF2175.jpg";

import scala1 from "@/assets/scala/2-DSC00266.jpg";
import scala2 from "@/assets/scala/12-DSC01020.jpg";
import scala3 from "@/assets/scala/10-DSC01013.jpg";
import scala4 from "@/assets/scala/14-DSC01122.jpg";
import scala5 from "@/assets/scala/15-DSC01123.jpg";
import scala6 from "@/assets/scala/8-DSC00756.jpg";
import scala7 from "@/assets/scala/4-DSC00395.jpg";
import scala8 from "@/assets/scala/16-DSC01242.jpg";

import daynnightCover from "@/assets/daynnight.jpg";
import daynnight1 from "@/assets/daynnight/DSCF1005.jpg";
import daynnight2 from "@/assets/daynnight/DSCF1505.jpg";
import daynnight3 from "@/assets/daynnight/DSCF1414.jpg";
import daynnight4 from "@/assets/daynnight/DSCF1121.jpg";

const projects = [
  { title: "Dancers", cover: dancers, gallery: [dancersBts1, dancersBts2, dancersBts3, dancersBts4, dancersBts5, dancersBts6, dancersBts7, dancersBts8, dancersBts9, dancersBts10] },
  { title: "Bleecker", cover: bleecker, gallery: [bleecker1, bleecker2, bleecker3, bleecker4] },
  { title: "Day N Night", cover: daynnightCover, gallery: [daynnight1, daynnight2, daynnight3, daynnight4] },
  { title: "Live at Scalateatern", cover: liveScalateatern, gallery: [scala1, scala2, scala3, scala4, scala5, scala6, scala7, scala8] },
];

const ArchivesSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="archives" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
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
                      <p className="font-display text-3xl font-light text-foreground">
                        {project.title}
                      </p>
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
                        <button
                          key={g}
                          type="button"
                          onClick={() => setLightbox(src)}
                          className="group/img block aspect-square overflow-hidden"
                        >
                          <img
                            src={src}
                            alt={`${project.title} image ${g + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ArchivesSection;
