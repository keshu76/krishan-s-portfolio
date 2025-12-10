import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "MySQL", category: "Database" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Pandas", category: "Data Science" },
  { name: "NumPy", category: "Data Science" },
  { name: "Matplotlib", category: "Data Science" },
];

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: easing }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-lg tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="headline-lg">Tech Stack</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="skill-tag cursor-default relative group overflow-hidden"
            >
              <span className="relative z-10">{skill.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: easing }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          And many more technologies in my toolkit...
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Skills;
