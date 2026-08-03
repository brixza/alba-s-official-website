import fourWalls from "@/assets/four-walls.png";
import dancers from "@/assets/dancers.jpg";
import bleecker from "@/assets/bleecker.jpg";

const entries = [
  {
    src: fourWalls,
    index: "01",
    title: "Four Walls",
  },
  {
    src: dancers,
    index: "02",
    title: "Dancers",
  },
  {
    src: bleecker,
    index: "03",
    title: "Bleecker",
  },
];

const ArchivesSection = () => (
  <section id="archives" className="bg-background py-24">
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
        Archives
      </h2>
      <div className="mt-16 flex flex-col gap-24">
        {entries.map(({ src, index, title }, i) => (
          <div
            key={i}
            className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="overflow-hidden md:w-1/2">
              <img
                src={src}
                alt={title}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                {index}
              </p>
              <p className="mt-4 font-display text-3xl font-light text-foreground">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchivesSection;
