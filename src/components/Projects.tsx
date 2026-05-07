import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string; 
};

const projects: Project[] = [
  {
    name: "FoodBridge Kenya – Community Food Rescue",
    description: "A community-powered food rescue platform connecting surplus food from hotels and restaurants to families in need across Nairobi and Northern Kenya. Features volunteer registration, real-time alerts, impact tracking, M-Pesa integration, restaurant credit reporting, and a northern Kenya relief pipeline.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Python", "FastAPI", "Mongo", "MySql"],
    category: "Social Impact / Community Platform",
    github: "https://github.com/AJ-Collins",
    image: "/projects/foodbridge_kenya.png",
    featured: true,
    demo: "https://harvest-hope-links.lovable.app"
  },,
  {
    name: "Dr.Net Technology Labs",
    description:
      "A full-featured ISP website for Dr.Net Technology Labs showcasing internet packages, hotspot services, coverage areas, team profiles, gallery, and a booking form for installations. Built to promote affordable connectivity across rural towns, islands, and schools in South Nyanza and Homa Bay County.",
    tech: ["Vue.js", "Tailwind CSS", "JavaScript", "node.js", "mysql"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/drnet_labs.png",
    demo: "https://drnet.co.ke"
  },
  {
    name: "TUM Conference & Innovation System",
    description:
      "A modern, responsive event platform for the Technical University of Mombasa’s Multidisciplinary Conference & Innovation Week, featuring live countdowns, conference themes, speakers, sponsors, submission deadlines, and venue details for researchers and innovators.",
    tech: ["Laravel", "Mssql", "Tailwind CSS", "Html", "Javascript"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/conference_tum.png",
    demo: "https://conference.tum.ac.ke/",
  },
  {
    name: "TopRich Oils Ltd",
    description:
      "A modern, responsive business website for TopRich Oils Ltd, featuring detailed lubricant product categories, toll blending services, company profile, quality assurance standards, and a contact/quotation system for customers across Kenya.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/toprich_oils.png",
    demo: "https://toprichoils.com"
  },
  {
    name: "silvie.youwel.app – AI Voice Assistant",
    description: "An intelligent AI voice assistant platform designed to provide secure, natural, and accessible digital assistance for seniors. Supports both English and German with real-time voice interaction, speech-to-text, text-to-speech, smart conversations, and seamless communication tools focused on privacy, accessibility, and ease of use.",
    tech: ["Whisper", "TTS", "React.js", "Tailwind CSS", "JavaScript", "Python", "LLM", "Docker", "PostgreSQL", "Socket.io"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/silvie_ai.png",
    demo: "https://silvie.youwel.app"
  },
  {
    name: "Coast Safari Hotel",
    description:
      "A modern hotel website for Coast Safari Hotel, a boutique 3-star hotel in Mombasa CBD. The platform showcases rooms and suites, amenities, restaurant offerings, guest reviews, location details, and includes a booking inquiry form to streamline reservations for business and leisure travelers.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/coast_safari_hotel.png",
    demo: "https://coast-safari-web.lovable.app",
  },
  {
    name: "youwel.app – Senior Meet Platform",
    description: "A modern and secure meet platform designed for people aged 60+ in Germany and Africa. Built to foster better connections, communication, and community engagement through an easy-to-use interface, simple navigation, and secure real-time interactions. The platform focuses on accessibility, privacy, and a comfortable digital experience for seniors.",
    tech: ["Vue.js", "Tailwind CSS", "JavaScript", "Node.js", "MySQL", "Docker", "MongoDB", "Socket.io"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/youwel_app.png",
    demo: "https://iuwel.com"
  },
  {
    name: "Jambo Paradise Hotel",
    description:
      "A modern hospitality website for Jambo Paradise Hotel in Mombasa CBD, featuring room listings and pricing, amenities, restaurant and sports bar highlights, gallery, FAQs, location details, and a reservation inquiry form for business and leisure travelers.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/jambo_paradise_hotel.png",
    demo: "https://jambo-coastal-charm.lovable.app",
  },
  {
    name: "The Ivory Suites – Hotel",
    description:
      "A premium boutique hotel website for The Ivory Suites in Mombasa CBD, featuring suite listings and pricing, amenities, on-site dining, guest reviews, nearby attractions, location details, and a reservation inquiry form for business and leisure travelers.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/ivory_suites.png",
    demo: "https://ivory-suite-showcase.lovable.app",
  },
  {
    name: "Elimu AI – Personalized African Educational Assistant",
    description:
      "An AI-powered educational platform designed for East African students, delivering personalized learning in English, Swahili, and Sheng. Elimu AI simplifies complex subjects using culturally relevant analogies (like matatus for physics), interactive curriculum tracking, and dynamic practice generation.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Google Gemini AI"],
    category: "AI / EdTech",
    github: "https://github.com/AJ-Collins",
    image: "/projects/elimu-ai.png",
    demo: "https://elimu-ai-tau.vercel.app",
  },
  {
    name: "Moiz Boutique Ltd – Retail",
    description:
      "A modern boutique website for Moiz Boutique Ltd in Shanzu, Mombasa, showcasing African fashion, jewellery, fabrics, and authentic Kenyan souvenirs. The platform features curated collections, featured products, customer reviews, location details, and an enquiry system with delivery options.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/moiz_boutique.png",
    demo: "https://coastal-chic-moiz.lovable.app",
  },
  {
    name: "Pontoon Residence & Suites – Hospitality",
    description:
      "A premium boutique hotel website for Pontoon Residence & Suites in Nyali, Mombasa. Showcases luxury suites, room types, amenities, nearby attractions, photo gallery, guest reviews, and an integrated booking/reservation form with contact information.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/pontoon_residence.png",
    demo: "https://pontoon-coastal-haven.lovable.app/"
  },
  {
    name: "Sauti Connect – Company & Investor Marketplace",
    description: "A professional company-investor marketplace platform connecting businesses with investors across Africa and globally. Enables companies to post funding-ready projects while allowing investors to discover opportunities, review project details, track funding progress, and connect securely through a modern and transparent workflow. Supports multi-currency funding, secure communication, and streamlined project discovery.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "MySQL", "Docker", "Socket.io"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/sauti_connect.png",
    demo: "https://www.sauticonnect.africa/"
  },
  {
    name: "ROOFS – London Roofing Specialists",
    description: "A professional website for ROOFS, a fully insured roofing service based in Muswell Hill, North London. Showcases services such as flat and pitched roof installation, roof inspections, gutter maintenance, soffit and fascia replacement, chimney repairs, customer reviews, contact information, and a free quote request form.",
    tech: ["React", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/AJ-Collins",
    image: "/projects/roofs_london.png",
    demo: "https://roof-rocks-london.lovable.app"
  }
];

const categories = ["All", "Web", "AI/ML", "Mobile", "Tools"];

// Fallback placeholder when no image is provided
const PlaceholderImage = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground text-sm font-medium">
    {name.charAt(0)}
  </div>
);

const ImageWrapper = ({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className: string;
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} block group relative cursor-pointer`}
        title="View live project"
      >
        {children}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <ExternalLink size={12} /> View Live
          </span>
        </div>
      </a>
    );
  }
  return <div className={className}>{children}</div>;
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const filtered =
    filter === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === filter && !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Projects</h2>
          <div className="h-1 w-16 bg-primary mb-10 rounded-full" />
        </div>

        {/* ── FEATURED PROJECT ── */}
        {featured.map((project) => (
          <div
            key={project.name}
            className="reveal mb-12 bg-card border border-primary/30 rounded-xl card-glow overflow-hidden"
          >
            {/* Featured Image — full width banner */}
            <ImageWrapper href={project.demo} className="w-full h-56 sm:h-72 overflow-hidden bg-secondary">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <PlaceholderImage name={project.name} />
              )}
            </ImageWrapper>

            {/* Featured Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded">
                  Featured
                </span>
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                  🔨 Currently Building
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">{project.name}</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-secondary rounded border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ── FILTERS ── */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── PROJECT GRID ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.name}
              className="reveal bg-card border border-border rounded-xl card-glow flex flex-col overflow-hidden"
            >
              {/* Card Image */}
              <ImageWrapper href={project.demo} className="w-full h-44 overflow-hidden bg-secondary">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage name={project.name} />
                )}
              </ImageWrapper>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-heading font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs bg-secondary rounded border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}