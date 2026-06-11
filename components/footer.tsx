'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/imsbnepal',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/imsbnepal',
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/imsbnepal',
      ariaLabel: 'Visit my Twitter profile',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/imsbnepal',
      ariaLabel: 'Visit my Facebook profile',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sb.mail.np@gmail.com',
      ariaLabel: 'Send me an email',
    },

  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">IMSB Nepal</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack developer creating beautiful digital experiences.
            </p>
          </motion.div>

          {/* Links section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Blog', href: '#' },
                { label: 'Resume', href: '#' },
                { label: 'Testimonials', href: '#' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} IMSB Nepal. All rights reserved.
          </p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
