const SpotifySection = () => {
  return (
    <section id="spotify" className="bg-charcoal-light px-4 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
            Top Hits
          </h2>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            Stream on Spotify
          </p>
        </div>

        <div className="mt-12">
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
    </section>
  );
};

export default SpotifySection;
