import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Wearable Device for Early Diabetes Detection",
    description:
      "An innovative AI-powered wearable solution that monitors vital signs and uses machine learning algorithms to predict early diabetes indicators with high accuracy.",
    tech: ["Python", "TensorFlow", "IoT", "Machine Learning"],
    year: "2024",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A comprehensive predictive analytics platform leveraging advanced ML models to assess cardiovascular health risks from patient data with clinical precision.",
    tech: ["Python", "Scikit-learn", "JavaScript", "Flask"],
    year: "2023",
  },
];

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      <motion.div style={{ opacity }} className="section-container">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: easing }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-lg tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="headline-lg">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div ref={cardRef} style={{ y, opacity, scale }}>
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-3xl p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="flex justify-between items-start mb-4 relative z-10">
          <span className="text-sm text-muted-foreground font-medium">
            {project.year}
          </span>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
          </motion.div>
        </div>

        <h3 className="headline-md mb-4 group-hover:text-foreground/80 transition-colors duration-500 relative z-10">
          {project.title}
        </h3>

        <p className="body-md flex-1 mb-6 relative z-10">{project.description}</p>

        <div className="flex flex-wrap gap-2 relative z-10">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + techIndex * 0.05 }}
              className="text-xs px-3 py-1.5 bg-secondary rounded-full text-muted-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
