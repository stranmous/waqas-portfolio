import HeroMesh from "./HeroMesh";
import { AnimatePresence, m, LazyMotion, domAnimation, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  ArrowDown,
  Award,
  Bot,
  BrainCircuit,
  ChevronDown,
  Download,
  Gamepad2,
  Github,
  Instagram,
  Linkedin,
  Menu,
  MonitorSmartphone,
  X,
} from "lucide-react";
import { IconType } from "react-icons";
import { FormEvent, lazy, ReactNode, Suspense, useEffect, useRef, useState } from "react";

const Phone3DStage = lazy(() => import("./Phone3DStage"));

import {
  SiGooglegemini,
  SiOpenai,
  SiAnthropic,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiVite,
  SiPython,
  SiFastapi,
  SiDjango,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiGooglechrome,
} from "react-icons/si";
import { HiOutlineCpuChip, HiOutlineServerStack } from "react-icons/hi2";
import { FaUniversity, FaAws } from "react-icons/fa";

const upworkUrl = "https://www.upwork.com/freelancers/~019476874a985b7535?mp_source=share";
const linkedinUrl = "https://linkedin.com/in/waqas75";
const githubUrl = "https://github.com/stranmous";
const instagramUrl = "https://www.instagram.com/waqas.zafar_/";
const emailAddress = "waqaszafarkhan8198@gmail.com";
type ContactFormState = "idle" | "submitting" | "success" | "error";

const expertise = [
  {
    icon: HiOutlineCpuChip,
    title: "Applied AI Integration",
    accent: "magenta",
    body: "Gemini/OpenAI APIs, RAG pipelines, AI coach flows, and prompt engineering for intelligent product features.",
    tags: ["Gemini", "OpenAI", "Anthropic", "Python"],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend & Mobile Development",
    accent: "blue",
    body: "React Native, Expo, React, TypeScript, JavaScript, and Vite for polished web and mobile interfaces.",
    tags: ["JavaScript", "TypeScript", "React", "Expo", "Vite"],
  },
  {
    icon: HiOutlineServerStack,
    title: "Backend & Product Systems",
    accent: "orange",
    body: "Python, FastAPI, Django, REST APIs, PostgreSQL, Firebase Auth, and Docker for complete product foundations.",
    tags: ["Python", "FastAPI", "Django", "Firebase", "Docker", "SQL"],
  },
];

const tagIcons: Record<string, IconType> = {
  Gemini: SiGooglegemini,
  OpenAI: SiOpenai,
  Anthropic: SiAnthropic,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  Expo: SiExpo,
  Vite: SiVite,
  Python: SiPython,
  FastAPI: SiFastapi,
  Django: SiDjango,
  Firebase: SiFirebase,
  Docker: SiDocker,
  SQL: SiPostgresql,
  Chrome: SiGooglechrome,
  Automation: Bot,
  "React Native": SiReact,
  PostgreSQL: SiPostgresql,
  "AI/RAG": BrainCircuit,
};

const codeBackgroundText = `// waqas_expertise.ts
import { coffee, code, deploy, cry } from "daily-routine";
import { tryCatch, panic } from "utils/emotions";

interface Stack {
  ai: string[];
  frontend: string[];
  backend: string[];
}

const motivationLevel = Infinity;

async function buildProduct(idea: string) {
  const stack: Stack = {
    ai: ["Gemini", "RAG", "LangChain"],
    frontend: ["React", "TypeScript", "Expo"],
    backend: ["FastAPI", "PostgreSQL", "Docker"],
  };

  try {
    while (coffee.isAvailable()) {
      await code(stack);
      
      if (bugs.length > 99) {
        await coffee.refill(1000); // 1 liter should do
      }

      if (bugs.length === 0) {
        console.log("Wait, this is suspicious...");
        break; // lol
      }
    }
    
    // TODO: sleep is for the weak
    return deploy("production");
  } catch (error) {
    if (error instanceof MissingSemicolonError) {
       // Just kidding, I use Prettier
       return "It works on my machine™";
    }
    panic(error);
  }
}

// Adding some AI magic
function optimizePrompt(prompt: string): string {
  if (prompt === "Make it better") {
    return "You're asking too much of me, human.";
  }
  return prompt + " but explain it like I'm 5";
}

export const Developer = {
  status: "Fueled by coffee and compiler warnings",
  hoursSlept: 4,
  brain: "Loading...",
  skills: ["Overengineering", "Centering Divs", "Reading Docs"],
};

// No Stack Overflow was harmed in the making
// (Okay, maybe just a little bit)`;

const extraProjects = [
  {
    title: "Li-Autopilot",
    label: "Chrome Automation Extension",
    description:
      "A Manifest V3 browser extension that automates LinkedIn connection outreach and Easy Apply flows locally in the browser.",
    tags: ["JavaScript", "Chrome", "Automation"],
    href: "https://github.com/stranmous/Li-Autopilot",
    image: "/li-autopilot-wide.png",
    icon: "/li-autopilot-icon.png",
  },
  {
    title: "Jobify",
    label: "Full-Stack Job Platform",
    description:
      "A job listing platform with a React/Vite frontend, Django REST API, authentication-aware job posting, and application flows.",
    tags: ["React", "Vite", "Django", "SQL"],
    href: "https://github.com/stranmous/Jobify",
    image: "/jobify.jpg",
  },
];

const pythonContactCode = `# get_in_touch.py
import asyncio
from typing import Optional
from dataclasses import dataclass

@dataclass
class Visitor:
    name: str
    email: str
    intent: str
    is_recruiter: bool = False
    is_spam: bool = False

class WaqasAPI:
    def __init__(self):
        self.status = "Available for new challenges"
        self.coffee_level = 100
        
    async def process_message(self, visitor: Visitor):
        if visitor.is_spam:
            raise Exception("Nice try, bot. Into the void you go! 🕳️")
            
        print(f"New connection request from {visitor.name}...")
        
        if "collaboration" in visitor.intent.lower():
            self.coffee_level -= 10
            return self.reply("Sounds awesome! Let's chat.")
            
        return self.reply("I'll get back to you shortly.")

    def reply(self, msg: str) -> str:
        return f"200 OK: {msg}"

# Initialize connection instance
waqas = WaqasAPI()

async def main():
    # Waiting for your message...
    while True:
        await asyncio.sleep(1)
        # Type something below to trigger webhook!

if __name__ == "__main__":
    asyncio.run(main())`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [formState, setFormState] = useState<ContactFormState>("idle");

  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", `Portfolio message from ${data.get("name") || "visitor"}`);
    data.append("_captcha", "false");

    const subject = encodeURIComponent(`Portfolio message from ${data.get("name") || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    const openMailFallback = () => {
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    };

    setFormState("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      let payload: { success?: string | boolean; message?: string } | null = null;
      try {
        payload = (await response.json()) as { success?: string | boolean; message?: string };
      } catch {
        payload = null;
      }

      const accepted =
        response.ok &&
        (payload === null || payload.success === true || payload.success === "true" || payload.message === "Email sent successfully!");

      if (!accepted) {
        openMailFallback();
        setFormState("error");
        return;
      }

      setFormState("success");
      form.reset();
    } catch {
      openMailFallback();
      setFormState("error");
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <CustomCursor />
      <ScrollProgress />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Expertise />
        <Projects showMore={showMoreProjects} onToggle={() => setShowMoreProjects((value) => !value)} />
        <Contact onSubmit={handleContact} formState={formState} />
      </main>
      <Footer />
      <ScrollToTop />
    </LazyMotion>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return <m.div className="scroll-progress" style={{ scaleX }} />;
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const [certsOpen, setCertsOpen] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Get in Touch", href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (certRef.current && !certRef.current.contains(event.target as Node)) {
        setCertsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand interactive" href="#home" onClick={closeMenu}>
        Waqas<span>Zafar</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link, index) => (
          <a className="nav-link interactive" href={link.href} key={link.href}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <span>// {link.label}</span>
          </a>
        ))}
      </nav>
      <div className="mobile-social-icons">
        <IconLink href={linkedinUrl} label="LinkedIn">
          <Linkedin />
        </IconLink>
        <IconLink href={githubUrl} label="GitHub">
          <Github />
        </IconLink>
        <IconLink href={instagramUrl} label="Instagram">
          <Instagram />
        </IconLink>
      </div>
      <div className="header-actions">
        <IconLink href={linkedinUrl} label="LinkedIn">
          <Linkedin />
        </IconLink>
        <IconLink href={githubUrl} label="GitHub">
          <Github />
        </IconLink>
        <IconLink href={instagramUrl} label="Instagram">
          <Instagram />
        </IconLink>
        <a className="download-btn interactive" href="/Waqas-Zafar.pdf" download aria-label="Download CV">
          <Download size={16} />
          <span>Download CV</span>
        </a>
        <div className="certs-dropdown-container" ref={certRef}>
          <button
            className="download-btn interactive certs-btn"
            onClick={() => setCertsOpen(!certsOpen)}
            aria-expanded={certsOpen}
            aria-label="Certifications"
          >
            <Award size={16} />
            <span>Certifications</span>
            <ChevronDown size={14} style={{ transform: certsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          <AnimatePresence>
            {certsOpen && (
              <m.div
                className="certs-dropdown"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://drive.google.com/file/d/1QWH0WruSnss8R_GTwWBHBh9tflHgSyOn/view?usp=sharing" target="_blank" rel="noreferrer" className="cert-item interactive">
                  <FaAws size={20} className="cert-icon aws" />
                  <span>AWS Certified Machine Learning (Specialty)</span>
                </a>
                <a href="https://certificates.cs50.io/524e2087-6226-4fce-a582-b7a3d7dea5bc.pdf?size=letter" target="_blank" rel="noreferrer" className="cert-item interactive">
                  <FaUniversity size={20} className="cert-icon harvard" />
                  <span>CS50 Programming with Python</span>
                </a>
              </m.div>
            )}
          </AnimatePresence>
        </div>
        <button
          className="mobile-toggle interactive"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <m.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                // {link.label}
              </a>
            ))}
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a className="icon-link interactive" href={href} target="_blank" rel="noreferrer" aria-label={label} data-tooltip={label}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <HeroMesh />
      <div className="hero-glow" />
      <Reveal className="hero-content">
        <h1>Waqas Zafar</h1>
        <p className="hero-subtitle">Applied AI & Full-Stack Developer</p>
        <p className="hero-copy">
          I make intelligent, AI-powered web and mobile products with clean interfaces and practical automation.
        </p>
        <div className="hero-actions">
          <a className="primary-btn interactive" href="#projects">
            View My Work
          </a>
          <a className="ghost-btn interactive" href={upworkUrl} target="_blank" rel="noreferrer">
            Hire Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}


function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <SectionHeader title="My Expertise" label="/* What I do */" />
      <div className="expertise-wrapper">
        <pre className="faded-code-bg" aria-hidden="true">{codeBackgroundText}</pre>
        <m.div
          className="expertise-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <m.div
                className={`expertise-card accent-${item.accent}`}
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <div className="expertise-card-header">
                  <Icon className="expertise-icon" />
                  <h3>{item.title}</h3>
                </div>
                <span className="code-tag">{"<h3>"}</span>
                <p>{item.body}</p>
                <span className="code-tag">{"</h3>"}</span>
                <div className="logo-row">
                  {item.tags.map((tag) => {
                    const TagIcon = tagIcons[tag];
                    return (
                      <div key={tag} className="tech-logo" title={tag}>
                        {TagIcon && <TagIcon size={22} />}
                      </div>
                    );
                  })}
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

function Projects({ showMore, onToggle }: { showMore: boolean; onToggle: () => void }) {
  const [load3D, setLoad3D] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (load3D) return;
    
    // Intersection observer to completely prevent downloading the massive 1MB Three.js bundle
    // until the user is actually scrolling down towards the Projects section.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad3D(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" } // Load it 800px before it comes into view so it's ready seamlessly
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [load3D]);

  return (
    <section ref={sectionRef} className="section projects-section" id="projects">
      <SectionHeader title="My Projects" label="/* Featured Builds */" />
      <m.div
        className="featured-project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <m.div
          className="project-copy"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1, x: 0,
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <p className="eyebrow">// AI Health Companion</p>
          <h3>GlycoTwin</h3>
          <p>
            A bilingual cross-platform mobile app for diabetes management with meal scanning, glucose simulation,
            Time-in-Range tracking, and an AI Coach powered by a backend RAG pipeline.
          </p>
          <div className="logo-row project-logo-row">
            {["React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "AI/RAG"].map((tech) => {
              const TagIcon = tagIcons[tech];
              return (
                <div key={tech} className="tech-logo" title={tech}>
                  {TagIcon && <TagIcon size={24} />}
                </div>
              );
            })}
          </div>

        </m.div>
        <m.div
          className="phone-stage"
          role="img"
          aria-label="GlycoTwin dashboard preview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={{
            hidden: { opacity: 0, x: 140, rotate: 6, scale: 0.82 },
            visible: {
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
              transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {load3D && (
            <Suspense fallback={null}>
              <Phone3DStage />
            </Suspense>
          )}
        </m.div>
      </m.div>

      <div className="more-projects-control">
        <EasterEggHintWidget />
        <button
          className="ghost-btn interactive"
          type="button"
          onClick={() => {
            onToggle();
            window.setTimeout(() => document.querySelector(".project-grid")?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
          }}
        >
          {showMore ? "Hide Projects" : "More Projects"}
        </button>
      </div>

      <AnimatePresence>
        {showMore && (
          <m.div
            className="project-grid"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 }}
          >
            {extraProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}



function ProjectCard({
  project,
}: {
  project: {
    title: string;
    label: string;
    description: string;
    tags: string[];
    href: string;
    image: string;
    icon?: string;
  };
}) {
  return (
    <m.article
      className="project-card"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="window-dots">
        <span />
        <span />
        <span />
      </div>
      <div className="project-preview image-preview">
        <img src={project.image} alt={project.title} />
      </div>
      <p className="eyebrow">// {project.label}</p>
      <div className="project-title-row">
        {project.icon && <img src={project.icon} alt="" className="project-icon" />}
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="logo-row project-logo-row">
        {project.tags.map((tag) => {
          const TagIcon = tagIcons[tag];
          return (
            <div key={tag} className="tech-logo" title={tag}>
              {TagIcon && <TagIcon size={20} />}
            </div>
          );
        })}
      </div>
      <a className="text-link interactive" href={project.href} target="_blank" rel="noreferrer">
        Open GitHub <Github size={15} />
      </a>
    </m.article>
  );
}

function Contact({
  onSubmit,
  formState,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formState: ContactFormState;
}) {
  return (
    <section className="section contact-section" id="contact">
      <pre className="faded-code-bg" aria-hidden="true">{pythonContactCode}</pre>
      <m.div
        className="contact-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <m.h2
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: {
              opacity: 1, y: 0, scale: 1,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          Get In Touch
        </m.h2>
        <m.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          Have a project, opportunity, or idea? Send me a message.
        </m.p>
        <m.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            visible: {
              opacity: 1, y: 0, scale: 1,
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <label>
            const name =
            <input name="name" placeholder="'Enter your name'" required />
          </label>
          <label>
            const email =
            <input name="email" placeholder="'Enter your email'" required type="email" />
          </label>
          <label>
            const message =
            <textarea name="message" placeholder="`Hello Waqas...`" required rows={5} />
          </label>
          <button className="ghost-btn interactive" type="submit" disabled={formState === "submitting"}>
            {formState === "submitting" ? "sending..." : "send_message()"}
          </button>
          <span className="email-note">{emailAddress}</span>
          {formState === "success" && <span className="success-note">Message queued for Waqas.</span>}
          {formState === "error" && (
            <span className="error-note">
              Direct send did not complete. Your email app should open, or you can email me manually.
            </span>
          )}
        </form>
        </m.div>
      </m.div>
    </section>
  );
}

function EasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "quit_game") {
        setOpen(false);
      }
    };
    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <button 
        className="easter-egg-btn easter-egg-breathe interactive" 
        onClick={() => setOpen(true)}
        title="Secret Easter Egg"
        aria-label="Secret Easter Egg"
      >
        <Gamepad2 size={24} />
      </button>
      
      <AnimatePresence>
        {open && (
          <m.div 
            className="easter-egg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <m.div 
              className="easter-egg-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="interactive" 
                onClick={() => setOpen(false)} 
                style={{ position: "absolute", top: "24px", right: "24px", background: "transparent", border: "none", color: "var(--muted)", cursor: "none", zIndex: 10 }}
                title="Close"
              >
                <X size={28} />
              </button>

              <div className="easter-egg-top-bar">
                <div /> {/* Empty left spacer */}
                
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(8px, 2vw, 18px)" }}>
                  <Gamepad2 size={32} className="easter-egg-icon" />
                  <h2 style={{ margin: 0, fontSize: "clamp(1.4rem, 5vw, 2.8rem)", color: "#fff", textShadow: "0 0 16px rgba(158, 207, 218, 0.4)", fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, whiteSpace: "nowrap" }}>SimpleMario2D</h2>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "clamp(60px, 8vw, 80px)" }}>
                  <a 
                    className="interactive" 
                    href="https://github.com/stranmous/SimpleMario2D" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "8px",
                      color: "var(--primary)", 
                      fontFamily: "'Fira Code', 'Courier New', monospace",
                      fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                      fontWeight: 600,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition: "opacity 0.2s"
                    }}
                  >
                    Open GitHub <Github size={24} style={{ flexShrink: 0 }} />
                  </a>
                </div>
              </div>
              
              <div className="easter-egg-iframe-container">
                <iframe 
                  src="/SimpleMario2D/index.html" 
                  className="easter-egg-iframe" 
                  title="SimpleMario2D WebGL Game" 
                  sandbox="allow-scripts allow-same-origin"
                  allow="fullscreen"
                />
              </div>

              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: "700", color: "#fff", letterSpacing: "0.02em" }}>
                  You found the Easter Egg! 🍄 This is a silly side project I made in Godot Engine. <span style={{color: "var(--primary)"}}>Challenge: Complete the level in under 3 tries!</span>
                  <br/>
                  <span style={{ fontSize: "0.95rem", color: "var(--muted)", fontWeight: "500", marginTop: "6px", display: "inline-block" }}>(Note: Requires a keyboard or gamepad to play)</span>
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <span className="footer-prompt">$ <em>waqas-zafar</em> ~ <EasterEgg /></span>
      <span>© {new Date().getFullYear()} Waqas Zafar // Applied AI & Full-Stack Developer</span>
      <div>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

function SectionHeader({ title, label }: { title: string; label: string }) {
  return (
    <m.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      <m.h2
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.95 },
          visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {title}
      </m.h2>
      <m.span
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {label}
      </m.span>
    </m.div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      if (follower.current) {
        follower.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    // Event delegation: single listener handles all interactive elements
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, .interactive")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onOut = (event: MouseEvent) => {
      const target = event.relatedTarget as HTMLElement | null;
      if (!target || !target.closest("a, button, .interactive")) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursor} />
      <div className="cursor-follower" ref={follower} />
    </>
  );
}

function EasterEggHintWidget() {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("site-footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="easter-egg-widget interactive"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Up for a Challenge?"
    >
      <Gamepad2 size={20} />
      <ArrowDown size={16} />
      <AnimatePresence>
        {hovered && (
          <m.span
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
            className="widget-tooltip"
          >
            Up for a Challenge?
          </m.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          className="scroll-to-top interactive"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </m.button>
      )}
    </AnimatePresence>
  );
}

export default App;
