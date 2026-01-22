import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

const tourDates = [
  { date: "Mar 15", city: "Los Angeles", venue: "The Greek Theatre", status: "on-sale" },
  { date: "Mar 18", city: "San Francisco", venue: "The Fillmore", status: "low" },
  { date: "Mar 22", city: "Portland", venue: "Arlene Schnitzer Hall", status: "on-sale" },
  { date: "Mar 25", city: "Seattle", venue: "The Paramount", status: "sold-out" },
  { date: "Apr 02", city: "Denver", venue: "Red Rocks Amphitheatre", status: "on-sale" },
  { date: "Apr 08", city: "Chicago", venue: "Chicago Theatre", status: "on-sale" },
];

const TourSection = () => {
  return (
    <section id="tour" className="bg-charcoal-light px-4 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
              Tour
            </h2>
            <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
              First Light World Tour 2025
            </p>
          </div>
          <Calendar className="h-8 w-8 text-primary" />
        </div>

        <div className="mt-12 space-y-4">
          {tourDates.map((show) => (
            <div
              key={`${show.date}-${show.city}`}
              className="card-shadow group flex flex-col items-start justify-between gap-4 rounded-lg bg-card p-6 transition-all hover:bg-secondary sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary">
                    {show.date.split(" ")[0]}
                  </span>
                  <span className="block font-body text-xs uppercase text-muted-foreground">
                    {show.date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">
                    {show.city}
                  </h3>
                  <p className="flex items-center gap-1 font-body text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {show.venue}
                  </p>
                </div>
              </div>

              {show.status === "sold-out" ? (
                <span className="font-body text-sm uppercase tracking-wide text-muted-foreground">
                  Sold Out
                </span>
              ) : (
                <Button
                  variant={show.status === "low" ? "heroOutline" : "hero"}
                  size="sm"
                >
                  {show.status === "low" ? "Few Left" : "Get Tickets"}
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="heroOutline" size="lg">
            View All Dates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
