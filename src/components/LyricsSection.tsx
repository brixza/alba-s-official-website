import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Music } from "lucide-react";
import lyricsBgDefault from "@/assets/lyrics-bg.jpg";
import lyricsCriminal from "@/assets/lyrics-criminal.png";
import lyricsBleecker from "@/assets/lyrics-bleecker.jpg";
import lyricsDancers from "@/assets/lyrics-dancers.png";

const songBackgrounds: Record<string, string> = {
  "Criminal": lyricsCriminal,
  "Bleecker": lyricsBleecker,
  "Dancers": lyricsDancers,
};

const songs = [
  {
    title: "Bleecker",
    lyrics: `I wanna know
Is it different now?
Or has it always been easy, easy for you?

I wanna know
If it's all been said and done
I've been cold love
And my knees are heavy

Walking down Bleecker people keep passing by
And I see your face on a crowded street in the New York light

I'm coming up to meet you
Are we gonna be alright?
When I'm coming up to meet
Thoughts are running wild

Watching the cars in the fading night
I'm afloat
My heart's telling me to stop but it's time to go
Alright
It's alright

I wanna take a little time away
Before it's all too late

City that never sleeps, life is flashing by
And I'm struck by loneliness only found in the New York night

I'm coming up to meet you
Are we gonna be alright?
When I'm coming up to meet
Thoughts are running wild`,
  },
  {
    title: "Castle in the Sky",
    lyrics: `What is love when it's no more
What is pain without the love we had before
What is rain after it pours
What is love when it is nothing like before

And I fall back down from the castle built on a love, lie, lie, love, love, like that
And you fall back down from the castle built on a love lie lie love love like that
on a love lie lie love love like that
on a love lie lie love love like that
on a love lie lie love love like that

Who am I when I'm no more
What if life is an illusion of the bored
What's a sea without the shore
Who am I without the love we had before

And I fall back down from the castle built on a love, lie, lie, love, love, like that
And you fall back down from the castle built on a love lie lie love love like that
on a love lie lie love love like that
on a love lie lie love love like that
on a love lie lie love love like that

And you fall back down from the castle built on a Love like that
Love like that
Love like that
Love like that`,
  },
  {
    title: "Criminal",
    lyrics: `Cold nights, my mind so restless
I lost my ground
Red lights, we crossed the line
Flower, said I'm a flower
I'm wilted now
Cold nights, I'm shutting down

Are we letting go
Of all the words we spoke

In the fall
Stormy hearts
Stolen love
Criminal
So I fall
In the dark
Stolen thought
Criminal

Breathless, you got me blinded
I met you out
In daylight that one first time
Zealous, you made me reckless
I couldn't hide
Was jealous of everyone

Are we letting go
Of all the words we spoke

In the fall
Stormy hearts
Stolen love
Criminal
So I fall
In the dark
Stolen thought
Criminal

Andas
Så svårt att andas
Sen vi försvann
Allting
Var för varann

På ett mörkt
Stormigt hav
Allt blev kallt
När vi dog
Men du håller mig kvar
Med den kärlek du tog`,
  },
  {
    title: "Dancers",
    lyrics: `Air is getting colder
Hands are intertwined
Cannot let go when
The heart is on the line
(I just wanna feel your energy)

Night is on the border
Suffocates the light
Shivering skin
As I feel yours onto mine
(I just wanna feel your energy)

Dancers off on the shore
Dancing to feel at all
They don't move like they did before
Dancing up on the shore
Dancers so free at night
Dancing to feel alive
They don't move like they did before
Dancers off on the shore

Sun is getting closer
Minds are intertwined
I don't wanna go
But we're running out time
(I just wanna feel your energy)

Something in the water
Makes us come alive
Echoes of a touch
Slowly fading with the night
(I just wanna feel your energy)

Dancers off on the shore
Dancing to feel at all
They don't move like they did before
Dancing up on the shore
Dancers so free at night
Dancing to feel alive
They don't move like they did before
Dancers off on the shore

I just wanna feel your energy through my blood
I just wanna feed on your energy like a drug
A drug
I just wanna feel your energy through my blood
I just wanna feed on your energy like a drug
A drug`,
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
            Words from Chasin' the Sun
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-2">
          {songs.map((song, index) => (
            <AccordionItem
              key={song.title}
              value={song.title}
              className="group rounded-lg border-none px-6 transition-all overflow-hidden relative"
              style={{
                backgroundImage: `url(${songBackgrounds[song.title] || lyricsBgDefault})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-secondary/80 group-data-[state=open]:bg-background/70 group-data-[state=open]:backdrop-blur-sm transition-all" />
              <AccordionTrigger className="py-5 hover:no-underline relative z-10">
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
              <AccordionContent className="pb-0 relative z-10">
                <pre className="whitespace-pre-wrap p-6 pt-0 font-body text-sm leading-relaxed text-foreground">
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
