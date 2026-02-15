import React from 'react';
import { motion } from 'framer-motion';
import { Globe, GraduationCap, Briefcase, Palette, Code, CheckCircle2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            icon: <Code className="text-primary" size={32} />,
            description: 'Custom landing pages and full-stack websites built with React, Vite, and modern tech stacks.',
            features: ['Landing Pages', 'E-commerce', 'Full-stack Apps']
        },
        {
            title: 'Portfolio Design',
            icon: <GraduationCap className="text-secondary" size={32} />,
            description: 'Specialized career portfolios for CSE, Mechanical, and Biomedical engineering students.',
            features: ['Student Portfolios', 'Resume Design', 'Interactive Showcases']
        },
        {
            title: 'Business Solutions',
            icon: <Briefcase className="text-accent" size={32} />,
            description: 'Digital presence for local businesses including Medical, Catering, and Logistics sectors.',
            features: ['E-commerce', 'Booking Systems', 'Business Branding']
        },
        {
            title: 'Graphic Design',
            icon: <Palette className="text-primary" size={32} />,
            description: 'Professional logos, resumes, and LinkedIn branding using industry-leading tools like Canva.',
            features: ['Logo Design', 'LinkedIn Branding', 'Marketing Assets']
        }
    ];

    return (
        <section id="services" className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
                    >
                        What We Offer
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Our Specialized <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted text-base md:text-lg"
                    >
                        We provide end-to-end digital solutions tailored to your unique needs,
                        helping you stand out in the digital landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:px-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full"
                        >
                            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-4 font-heading text-white">{service.title}</h3>
                            <p className="text-text-muted text-xs md:text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>

                            <ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
                                {services[index].features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs font-semibold text-white/70">
                                        <CheckCircle2 size={14} className="text-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
