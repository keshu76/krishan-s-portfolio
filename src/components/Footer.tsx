import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    <footer id="contact" className="section-padding bg-foreground text-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-background/60 text-lg tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="headline-lg mb-6">
            Let's Connect
          </h2>
          <p className="text-background/70 text-xl max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors"
            >
              <contact.icon className="w-5 h-5" />
              <span className="font-medium">{contact.value}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-6 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="h-px bg-background/20 mb-8" />
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Krishan Rajput. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
