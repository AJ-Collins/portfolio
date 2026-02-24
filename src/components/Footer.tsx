import { Github, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-heading font-bold text-sm">Collins Kiprotich</span>
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/AJ-Collins" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="mailto:kiprocolloaj254@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
