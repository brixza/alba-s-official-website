const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-display text-3xl font-light tracking-[0.3em] text-foreground">
          ALBA
        </span>

        {/* Newsletter */}
        <div className="mt-12">
          <p className="font-body text-sm text-muted-foreground">
            Join the mailing list for exclusive updates and early access
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-72"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-gold px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Alba Music. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
