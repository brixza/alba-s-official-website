const SpotifySection = () => {
  return (
    <section id="spotify" className="bg-charcoal-light px-4 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
              My Selection
            </h2>
            <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
              A Personal Playlist
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
              I've curated some of my favourite songs into a playlist just for you. 
              These are the tracks that inspire me, move me, and have shaped my sound 
              over the years. Press play and discover the music that means the most to me.
            </p>
          </div>

          {/* Right: Spotify Widget */}
          <div>
            <iframe
              title="Spotify Player"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/5MKM7cNYL4SIuIe6q4Qd1p?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
