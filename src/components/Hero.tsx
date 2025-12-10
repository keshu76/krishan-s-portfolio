import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-container section-padding">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent rounded-4xl blur-3xl scale-110" />
            <img
              src={portrait}
              alt="Krishan Rajput - Software Engineer"
              className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] object-cover rounded-4xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl mb-4 tracking-wide"
          >
            Software Engineer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="headline-xl mb-6"
          >
            KRISHAN
            <br />
            RAJPUT
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="body-lg max-w-md mx-auto lg:mx-0 mb-10"
          >
            Crafting powerful experiences with code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="apple-button-primary"
            >
              View Projects
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
      </div>
    </section>
  );
};

export default Hero;
