'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Check, AlertCircle } from 'lucide-react';
import AdBanner from './AdBanner';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Your Formspree endpoint ID from https://formspree.io
const FORMSPREE_ENDPOINT_ID = 'xnjgdrnd';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {


      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sb.mail.np@gmail.com',
      href: 'mailto:sb.mail.np@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9862440344',
      href: 'tel:+9779862440344',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#',
    },
  ];

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
    <>
      <AdBanner />
      <section id="contact" className="py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact info */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex flex-col items-center text-center p-8 bg-card/50 border border-border rounded-lg backdrop-blur-sm hover:border-accent transition-all group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.label}</h3>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact form */}
          <motion.div
            className="max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card/50 border border-border rounded-lg p-8 backdrop-blur-sm space-y-6"
              variants={itemVariants}
            >
              {/* Status messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-start gap-3"
                >
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-green-500 font-medium">{submitMessage}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-500 font-medium">{submitMessage}</p>
                </motion.div>
              )}

              {/* Name field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Email field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Subject field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </motion.div>

              {/* Message field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
