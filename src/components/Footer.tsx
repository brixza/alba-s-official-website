const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
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
