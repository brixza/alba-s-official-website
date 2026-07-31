const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-display text-3xl font-light tracking-[0.3em] text-foreground">
          ALBA
        </span>

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
