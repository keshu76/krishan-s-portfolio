import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajputkeshu26@gmail.com",
      href: "mailto:rajputkeshu26@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9990522424",
      href: "tel:+919990522424",
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="section-padding bg-foreground text-background relative overflow-hidden"
    >
      <motion.div style={{ opacity, y }} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: easing }}
          className="text-center mb-16"
        >
          <p className="text-background/60 text-lg tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="headline-lg mb-6">Let's Connect</h2>
          <p className="text-background/70 text-xl max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: easing }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: easing }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors duration-500 group relative overflow-hidden"
            >
              <contact.icon className="w-5 h-5 relative z-10" />
              <span className="font-medium relative z-10">{contact.value}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: easing }}
          className="flex justify-center gap-6 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: easing }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-500 relative overflow-hidden group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: easing }}
          className="text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: easing }}
            className="h-px bg-background/20 mb-8 origin-center"
          />
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Krishan Rajput. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
