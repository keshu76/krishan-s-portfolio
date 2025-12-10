import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center section-container section-padding relative overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: easing }}
          style={{ y: imageY }}
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent rounded-4xl blur-3xl scale-110"
              style={{ scale: imageScale }}
            />
            <motion.div
              className="relative overflow-hidden rounded-4xl shadow-2xl"
              style={{ scale: imageScale }}
            >
              <img
                src={portrait}
                alt="Krishan Rajput - Software Engineer"
                className="w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easing }}
            className="text-muted-foreground text-lg md:text-xl mb-4 tracking-wide"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: easing }}
            className="headline-xl mb-6"
          >
            KRISHAN
            <br />
            RAJPUT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: easing }}
            className="body-lg max-w-md mx-auto lg:mx-0 mb-10"
          >
            Crafting powerful experiences with code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easing }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="apple-button-primary group relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="apple-button-secondary"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
