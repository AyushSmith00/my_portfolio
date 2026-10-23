
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="status-dot" />
          DEVELOPER IN PROGRESS
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          BUILDING DIGITAL EXPERIENCES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          I BUILD
          <br />
          <span className="lime-text">THINGS</span>
          <br />
          THAT <span className="outline-text">WORK.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          I'm Ayush — a developer exploring full-stack engineering,
          backend systems, and interactive web experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <a className="button-primary" href="#projects">
            EXPLORE MY WORK <ArrowUpRight size={17} />
          </a>

          <a className="button-secondary" href="#about">
            MORE ABOUT ME <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.45 }}
      >
        {/* Background visual effects */}
        <div className="visual-grid" />

        {/* Actual interactive Three.js scene */}
        <div className="hero-3d-object">
          <Scene3D />
        </div>

        {/* Floating information tags */}
        <motion.div
          className="floating-tag tag-top"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="tag-dot" />
          FULL-STACK DEV
        </motion.div>

        <motion.div
          className="floating-tag tag-bottom"
          animate={{ y: [0, 9, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          BACKEND · SYSTEMS · WEB
        </motion.div>

        <div className="visual-index">
          FIG. 001 — CREATIVE ENGINEERING
        </div>
      </motion.div>

      <a href="#projects" className="scroll-cue">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>

      <div className="hero-counter">01 / 04</div>
    </section>
  );
}
