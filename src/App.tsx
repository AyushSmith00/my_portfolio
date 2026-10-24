
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard, { type Project } from "./components/ProjectCard";

const projects: Project[] = [
  {
    number: "01",
    name: "Echo",
    description:
      "A real-time, Discord-inspired chat platform built around WebSockets and a modern full-stack architecture.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    url: "https://github.com/AyushSmith00/Echo",
    category: "REAL-TIME SYSTEMS",
    image:
      "https://cdn.dribbble.com/userupload/45275284/file/8edf2c7a558cfb76de82c85cf3b08a64.png?resize=1600x1200",
  },
  {
    number: "02",
    name: "Seatify",
    description:
      "An event ticketing platform featuring authentication, event booking, and Razorpay payments.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    url: "https://github.com/AyushSmith00/Seatify",
    category: "FULL-STACK",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "03",
    name: "Rolegate",
    description:
      "A backend-focused authentication and user-management API with role-based access control and pagination.",
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    url: "https://github.com/AyushSmith00/Rolegate",
    category: "BACKEND ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "04",
    name: "PicTale",
    description:
      "A blogging platform with user authentication, image sharing, and a full-stack application architecture.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    url: "https://github.com/AyushSmith00/PicTale",
    category: "FULL-STACK",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "05",
    name: "PolyView",
    description:
      "A lightweight browser-based 3D model viewer built with Three.js.",
    stack: ["JavaScript", "Three.js", "WebGL"],
    url: "https://github.com/AyushSmith00/PolyView",
    category: "3D / WEB",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "06",
    name: "AuthForge",
    description:
      "An authentication and user-management backend with JWT, role-based access, and admin functionality.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    url: "https://github.com/AyushSmith00/AuthForge",
    category: "BACKEND ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1000&q=80",
  },
];

const skillGroups = [
  {
    title: "LANGUAGES",
    description: "The foundations",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "Java", "C", "Python"],
  },
  {
    title: "FRONTEND & UI",
    description: "Interfaces and experiences",
    icon: Layers3,
    skills: ["React", "Next.js", "Three.js", "HTML", "CSS"],
  },
  {
    title: "BACKEND & DATA",
    description: "APIs and application logic",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: "TOOLS & WORKFLOW",
    description: "Building and shipping",
    icon: Code2,
    skills: ["Git", "GitHub", "REST APIs", "JWT", "Docker"],
  },
];

export default function App() {
  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Navbar />

      <main>
        <Hero />

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                className="ticker-group"
                key={i}
                aria-hidden={i === 1}
              >
                {["BUILD", "DEPLOY", "LEARN", "REPEAT", "BUILD", "DEPLOY"].map(
                  (word, j) => (
                    <span key={`${word}-${j}`}>
                      {word} <b>✳</b>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <section
          className="projects-section section-wrap"
          id="projects"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A SELECTION OF MY WORK</p>
              <h2>
                BUILT WITH <span className="lime-text">INTENT.</span>
              </h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/AyushSmith00"
              target="_blank"
              rel="noopener noreferrer"
            >
              ALL REPOSITORIES <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="about-section about-v2 section-wrap"
          id="about"
        >
          <div className="about-intro">
            <div className="about-heading">
              <p className="eyebrow">BEHIND THE CODE</p>
              <h2>
                MORE THAN
                <br />
                <span className="lime-text">JUST THE UI.</span>
              </h2>
            </div>

            <div className="about-intro-copy">
              <span className="about-index">01 / THE DEVELOPER</span>

              <p>
                I'm a computer applications student who enjoys building
                full-stack products and understanding what happens behind
                the interface.
              </p>

              <p>
                I'm particularly interested in backend engineering, APIs,
                authentication, databases, and the fundamentals of systems
                programming. I like learning by building projects, breaking
                things, and figuring out how to make them work better.
              </p>

              <a
                className="about-github-link"
                href="https://github.com/AyushSmith00"
                target="_blank"
                rel="noopener noreferrer"
              >
                EXPLORE MY CODE <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* SKILLS */}
          <div className="about-subheading">
            <div>
              <span className="about-index">02 / THE TOOLKIT</span>
              <h3>
                TOOLS OF THE TRADE<span>.</span>
              </h3>
            </div>

            <p>
              Technologies I use while building projects and expanding my
              engineering fundamentals.
            </p>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-top">
                    <span className="skill-group-number">
                      0{index + 1}
                    </span>
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h4>{group.title}</h4>

                  <p className="skill-group-description">
                    {group.description}
                  </p>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* EDUCATION */}
          <div className="education-section">
            <div className="about-subheading education-heading">
              <div>
                <span className="about-index">
                  03 / THE FOUNDATION
                </span>
                <h3>
                  THE LEARNING CURVE<span>.</span>
                </h3>
              </div>

              <GraduationCap size={25} strokeWidth={1.5} />
            </div>

            <div className="education-timeline">
              <article className="education-item">
                <div className="education-marker">
                  <span />
                </div>

                <div className="education-date">2026 — 2028</div>

                <div className="education-details">
                  <span className="education-current">
                    CURRENTLY PURSUING
                  </span>

                  <h4>Master of Computer Applications</h4>
                  <p>Usha Martin University</p>

                  <span className="education-note">
                    Advanced computer applications and software development
                  </span>
                </div>
              </article>

              <article className="education-item">
                <div className="education-marker">
                  <span />
                </div>

                <div className="education-date">2023 — 2026</div>

                <div className="education-details">
                  <span className="education-current">COMPLETED</span>

                  <h4>Bachelor of Computer Applications</h4>
                  <p>Amity University Online</p>

                  <span className="education-note">
                    Data Science specialization · CGPA 8.60
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact-section section-wrap"
          id="contact"
        >
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>

          <h2>
            LET'S MAKE
            <br />
            <span className="lime-text">IT REAL.</span>
          </h2>

          <p className="contact-copy">
            Explore my work or connect with me online.
          </p>

          <div className="contact-actions">
            <a
              className="button-primary"
              href="https://github.com/AyushSmith00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} />
              FIND ME ON GITHUB
              <ArrowUpRight size={17} />
            </a>

            <a
              className="button-primary"
              href="https://www.linkedin.com/in/ayush-kumar-01bba6280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} />
              CONNECT ON LINKEDIN
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>
            AYUSH<span className="brand-muted">/DEV</span>
          </span>
        </a>

        <span>DESIGNED & BUILT WITH CURIOSITY.</span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}
