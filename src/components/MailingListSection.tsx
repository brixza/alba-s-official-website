import { useState } from "react";

const MailingListSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="mailing-list" className="bg-background py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
          Stay Close
        </h2>
        <p className="mt-4 font-body text-sm uppercase tracking-widest text-muted-foreground">
          Join the mailing list for exclusive updates, new music, and early access
        </p>

        {submitted ? (
          <p className="mt-10 font-body text-sm tracking-widest text-foreground">
            You're in. Talk soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <button
              type="submit"
              className="border border-foreground bg-foreground px-6 py-3 font-body text-sm uppercase tracking-widest text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default MailingListSection;
