import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Music } from "lucide-react";

const songs = [
  {
    title: "Golden Hour",
    lyrics: `[Verse 1]
Your lyrics for Golden Hour will appear here.
Add your own words to bring this song to life.

[Chorus]
Placeholder for the chorus section.
Replace with your actual lyrics.`,
  },
  {
    title: "Midnight Sun",
    lyrics: `[Verse 1]
Your lyrics for Midnight Sun will appear here.
Add your own words to bring this song to life.

[Chorus]
Placeholder for the chorus section.
Replace with your actual lyrics.`,
  },
  {
    title: "Echoes in Amber",
    lyrics: `[Verse 1]
Your lyrics for Echoes in Amber will appear here.
Add your own words to bring this song to life.

[Chorus]
Placeholder for the chorus section.
Replace with your actual lyrics.`,
  },
  {
    title: "Before the Dawn",
    lyrics: `[Verse 1]
Your lyrics for Before the Dawn will appear here.
Add your own words to bring this song to life.

[Chorus]
Placeholder for the chorus section.
Replace with your actual lyrics.`,
  },
  {
    title: "Silhouette",
    lyrics: `[Verse 1]
Your lyrics for Silhouette will appear here.
Add your own words to bring this song to life.

[Chorus]
Placeholder for the chorus section.
Replace with your actual lyrics.`,
  },
];

const LyricsSection = () => {
  return (
    <section id="lyrics" className="bg-background px-4 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
            Lyrics
          </h2>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            Words from First Light
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-2">
          {songs.map((song, index) => (
            <AccordionItem
              key={song.title}
              value={song.title}
              className="rounded-lg border-none bg-secondary/30 px-6 transition-colors hover:bg-secondary/50"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Music className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <span className="font-body text-xs text-muted-foreground">
                      Track {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-lg text-foreground">
                      {song.title}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <pre className="whitespace-pre-wrap font-body text-sm leading-relaxed text-muted-foreground">
                  {song.lyrics}
                </pre>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LyricsSection;
