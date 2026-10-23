
import { type KeyboardEvent, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";

export type Project = {
  number: string;
  name: string;
  description: string;
  stack: string[];
  url: string;
  category: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
  onOpenProject?: () => void;
};

export default function ProjectCard({
  project,
  onOpenProject,
}: ProjectCardProps) {
  const isFeatured = project.name === "Echo";

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) {
      return;
    }

    if (isFeatured) {
      onOpenProject?.();
    }
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || !isFeatured) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenProject?.();
    }
  };

  return (
    <motion.article
      className={`project-card ${
        isFeatured ? "project-card-featured project-card-clickable" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      onClick={isFeatured ? handleCardClick : undefined}
      onKeyDown={isFeatured ? handleCardKeyDown : undefined}
      role={isFeatured ? "button" : undefined}
      tabIndex={isFeatured ? 0 : undefined}
      aria-label={isFeatured ? "Open Echo project showcase" : undefined}
    >
      {/* PROJECT THUMBNAIL */}
      <div className="project-thumbnail">
        <img
          src={project.image}
          alt={`${project.name} project thumbnail`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <div className="project-thumbnail-overlay" />

        <div className="project-thumbnail-label">
          {isFeatured ? (
            <>
              <Radio size={14} />
              <span>REAL-TIME COMMUNICATION</span>
            </>
          ) : (
            <span>{project.category}</span>
          )}
        </div>

        <span className="project-thumbnail-number">
          {project.number}
        </span>
      </div>

      {/* PROJECT DETAILS */}
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>

        <span className="project-category">{project.category}</span>

        <a
          className="project-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {isFeatured && (
        <div className="featured-label">
          <span />
          FEATURED PROJECT · CLICK TO EXPLORE
        </div>
      )}
    </motion.article>
  );
}
