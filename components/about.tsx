'use client';

import { motion } from 'framer-motion';
import { skillCategories } from './data/skills';
import { experiences } from './data/experience';
import AdBanner from './AdBanner';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Full-Stack Developer with expertise in React, Next.js, Java, and Spring Boot. Experienced in building scalable applications, REST APIs, microservices, Dockerized deployments, and Git-based workflows.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Focused on clean code, performance, and continuous learning.
            </motion.p>

          </motion.div>

          {/* Experience timeline */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
            {experiences.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="border-l-2 border-accent pl-6 pb-6"
              >
                <h4 className="text-xl font-bold text-foreground">{exp.position}</h4>
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-accent font-medium">
                  {exp.company}
                </a>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="text-muted-foreground mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                className="bg-card/50 border border-border rounded-lg p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold text-foreground mb-6">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-secondary rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-accent/50"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <AdBanner />
    </section>
  );
};

export default About;
