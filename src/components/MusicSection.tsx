import albumCover from "@/assets/album-cover.jpg";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const tracks = [
  { title: "Golden Hour", duration: "3:42" },
  { title: "Midnight Sun", duration: "4:18" },
  { title: "Echoes in Amber", duration: "3:55" },
  { title: "Before the Dawn", duration: "5:02" },
  { title: "Silhouette", duration: "4:27" },
];

const MusicSection = () => {
  return (
    <section id="music" className="bg-charcoal-light px-4 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          Latest Release
        </h2>
        <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
          New Album • 2025
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Album Art */}
          <div className="group relative">
            <div className="glow overflow-hidden rounded-lg">
              <img
                src={albumCover}
                alt="First Light - Album Cover"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button variant="hero" size="icon" className="h-16 w-16 rounded-full">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Track List */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl italic text-foreground">
              First Light
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              A journey through the quiet hours before sunrise, where memories blur 
              with dreams and every note carries the weight of unspoken words.
            </p>

            <div className="mt-8 space-y-1">
              {tracks.map((track, index) => (
                <div
                  key={track.title}
                  className="group flex items-center justify-between rounded-md px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-body text-sm text-muted-foreground group-hover:text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-foreground">{track.title}</span>
                  </div>
                  <span className="font-body text-sm text-muted-foreground">
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Button variant="hero">
                <ExternalLink className="mr-2 h-4 w-4" />
                Stream Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
