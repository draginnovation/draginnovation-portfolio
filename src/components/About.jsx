import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-slate-900/50">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-2 md:mb-4">The Visionary</h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 md:mb-8 font-heading">
                            Meet the <span className="text-gradient">Founder</span>
                        </h2>
                        <p className="text-text-muted text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                            <strong>Akash</strong> is a Pre-final year Computer Science & Engineering student at <strong>P.S.R. Engineering College</strong>.
                            Drag Innovation was born out of a passion for coding and design, aimed at bridging the gap between complex technology and elegant user experiences.
                        </p>

                        <div className="space-y-4 md:space-y-6 text-left">
                            <div className="flex gap-4 p-4 glass-card rounded-xl">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <GraduationCap size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1 text-sm md:text-base">Tech Scholar</h5>
                                    <p className="text-xs md:text-sm text-text-muted">Pursuing B.E. CSE at P.S.R. Engineering College with a focus on full-stack development.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 glass-card rounded-xl">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                                    <Briefcase size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-1 text-sm md:text-base">Freelance Expert</h5>
                                    <p className="text-xs md:text-sm text-text-muted">Successfully delivered 5+ freelance projects across diverse sectors including Medical & Education.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-8 md:mt-0"
                    >
                        <div className="aspect-square glass rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6 md:p-8">
                            <div className="text-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-primary to-secondary rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center text-white shadow-2xl">
                                    <Code size={32} md:size={48} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading">Our Mission</h3>
                                <p className="text-text-muted text-sm md:text-base px-2">
                                    To provide end-to-end digital solutions, from complex web development to professional branding, empowering businesses to thrive in the modern age.
                                </p>
                            </div>
                        </div>
                        {/* Absolute element for depth */}
                        <div className="absolute -z-10 -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-full h-full bg-primary/5 rounded-3xl blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
