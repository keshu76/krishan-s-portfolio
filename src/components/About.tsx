import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="section-container"
      >
        <motion.div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easing }}
            className="text-muted-foreground text-lg tracking-widest uppercase mb-4"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: easing }}
            className="headline-lg mb-10"
          >
            Building the future,
            <br />
            one line at a time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: easing }}
            className="body-lg max-w-3xl mx-auto"
          >
            I'm a passionate Software Engineer with deep expertise in Machine Learning
            and Full-Stack Development. I specialize in transforming complex problems
            into elegant, scalable solutions. From training neural networks to crafting
            pixel-perfect interfaces, I bring ideas to life with precision and creativity.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
