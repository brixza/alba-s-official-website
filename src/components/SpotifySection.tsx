const SpotifySection = () => {
  return (
    <section id="spotify" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          Listen
        </h2>
        <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
          On Spotify
        </p>
        <div className="mt-10">
          <iframe
            title="Alba on Spotify"
            src="https://open.spotify.com/embed/playlist/2Y6O8tchiZGWX30QF7rfWo?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
