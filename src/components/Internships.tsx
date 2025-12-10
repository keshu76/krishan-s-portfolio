import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const internships = [
  {
    company: "DRDO",
    role: "Data Visualization Intern",
    description:
      "Developed an advanced data visualization tool to analyze and present complex datasets for defense research applications.",
    period: "2024",
  },
  {
    company: "BugSphere",
    role: "Frontend Developer Intern",
    description:
      "Optimized user interface components using TypeScript, enhancing application performance and user experience.",
    period: "2023",
  },
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-lg tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="headline-lg">
            Internships
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-4xl">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm text-muted-foreground font-medium">
                    {internship.period}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-muted-foreground transition-colors">
                    {internship.company}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mb-4">
                    {internship.role}
                  </p>
                  <p className="body-md max-w-2xl">
                    {internship.description}
                  </p>
                </div>
              </div>

              {index < internships.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="h-px bg-border mt-12 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
