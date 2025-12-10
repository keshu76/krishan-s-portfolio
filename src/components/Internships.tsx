import { motion, useScroll, useTransform } from "framer-motion";
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

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const Internships = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: easing }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-lg tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="headline-lg">Internships</h2>
        </motion.div>

        <div className="space-y-16 max-w-4xl">
          {internships.map((internship, index) => (
            <InternshipItem
              key={internship.company}
              internship={internship}
              index={index}
              isLast={index === internships.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const InternshipItem = ({
  internship,
  index,
  isLast,
}: {
  internship: (typeof internships)[0];
  index: number;
  isLast: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div ref={itemRef} style={{ x, opacity }} className="group">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easing }}
          className="md:w-32 flex-shrink-0"
        >
          <span className="text-sm text-muted-foreground font-medium">
            {internship.period}
          </span>
        </motion.div>

        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
            className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-muted-foreground transition-colors duration-500"
          >
            {internship.company}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing }}
            className="text-lg font-medium text-muted-foreground mb-4"
          >
            {internship.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: easing }}
            className="body-md max-w-2xl"
          >
            {internship.description}
          </motion.p>
        </div>
      </div>

      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: easing }}
          className="h-px bg-border mt-16 origin-left"
        />
      )}
    </motion.div>
  );
};

export default Internships;
