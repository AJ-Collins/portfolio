import { useState } from "react";
import { Mail, Phone, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kiprocolloaj254@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary mb-10 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="gap-2">
              <Send size={16} /> Send Message
            </Button>
          </form>

          {/* Direct links */}
          <div className="reveal space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>

            <div className="space-y-4">
              <a href="mailto:kiprocolloaj254@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">kiprocolloaj254@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/254726279607" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">+254 726 279 607</p>
                </div>
              </a>

              <a href="https://github.com/AJ-Collins" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-xs text-muted-foreground">github.com/AJ-Collins</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
