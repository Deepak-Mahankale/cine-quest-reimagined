import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const footerLinks = [
    { label: "Contact Us", href: "/contact-us" },
    { label: "Request Us", href: "/request-us" },
    { label: "DCMA", href: "#" },
    { label: "About Us", href: "#" }
  ];

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <Separator className="mb-6" />
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4">
          © 2025 VegaMovies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};