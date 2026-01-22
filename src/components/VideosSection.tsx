import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Featured Video",
      embedUrl: "https://www.youtube.com/embed/Zssxh1FPQK4?si=HnjZGGbe9x57MpTn",
    },
    {
      id: 2,
      title: "Music Video 2",
      embedUrl: "https://www.youtube.com/embed/H1boy7T7fFw?si=pcaVN26a6SRqyPz2",
    },
    {
      id: 3,
      title: "Music Video 3",
      embedUrl: "https://www.youtube.com/embed/ArdUlLmXXtU?si=U58ujmhcqd-ns_S4",
    },
  ];

  return (
    <section id="videos" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
            Videos
          </h2>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            Watch & Listen
          </p>
        </div>

        {/* Videos Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="overflow-hidden rounded-lg bg-secondary/30">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </AspectRatio>
              </div>
              <h3 className="mt-4 text-center font-body text-sm font-medium text-foreground">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
