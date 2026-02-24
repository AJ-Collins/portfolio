import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { id: "about", label: "About" },
  { id: "techstack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("hero")} className="font-heading text-lg font-bold tracking-tight text-foreground">
          CK<span className="text-primary">.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors ${
                active === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button variant="hero" size="sm" className="gap-2" asChild>
            <a href="/resume/Collins_Kiprotich.pdf" download>
              <Download className="h-4 w-4" /> Resume/CV
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left py-3 text-sm font-medium transition-colors ${
                active === link.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2 gap-2" asChild>
            <a href="/resume/Collins_Kiprotich.pdf" download>
              <Download className="h-4 w-4" /> Resume/CV
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
