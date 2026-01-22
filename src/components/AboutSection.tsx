const AboutSection = () => {
  return (
    <section id="about" className="bg-background px-4 py-24 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          About
        </h2>

        <div className="mt-12 space-y-6">
          <p className="font-display text-2xl font-light italic leading-relaxed text-foreground md:text-3xl">
            "I write songs for the spaces between sleep and waking, 
            for the moments when the world is still and anything feels possible."
          </p>

          <div className="mx-auto h-px w-24 bg-primary" />

          <p className="font-body leading-relaxed text-muted-foreground">
            Alba emerged from the quiet corners of the Pacific Northwest, 
            crafting ethereal soundscapes that blur the lines between folk, 
            electronic, and ambient music. Her debut EP "Twilight Hours" garnered 
            critical acclaim, leading to sold-out shows across North America and 
            Europe.
          </p>

          <p className="font-body leading-relaxed text-muted-foreground">
            With "Chasin' the Sun," Alba delivers her most ambitious work yet—a 
            meditation on time, memory, and the transformative power of dawn.
            Each track was recorded during the golden hour, capturing the 
            ephemeral beauty of light as it breaks across the horizon.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <span className="font-display text-4xl text-primary md:text-5xl">2M+</span>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
              Monthly Listeners
            </p>
          </div>
          <div>
            <span className="font-display text-4xl text-primary md:text-5xl">47</span>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
              Shows This Year
            </p>
          </div>
          <div>
            <span className="font-display text-4xl text-primary md:text-5xl">3</span>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
              Albums Released
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
