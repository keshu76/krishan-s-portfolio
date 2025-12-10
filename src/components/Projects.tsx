import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-lg tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="headline-lg">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 h-full flex flex-col group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-muted-foreground font-medium">
                    {project.year}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                </div>

                <h3 className="headline-md mb-4 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>

                <p className="body-md flex-1 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
