import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 overflow-hidden">

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Main Content Group */}
                    <div className="flex flex-col items-center gap-10 md:gap-14 w-full mb-24 md:mb-32">
                        {/* Work in Progress Banner */}


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-7xl font-extrabold leading-tight md:leading-tight px-2"
                        >
                            Innovating the <br className="md:hidden" />
                            <span className="text-gradient">Digital Future.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm md:text-xl text-text-muted max-w-xl md:max-w-2xl leading-relaxed px-4"
                        >
                            High-quality web solutions, creative designs, and professional portfolios tailored for your success.
                            Founded by <strong>Akash</strong>, a tech visionary dedicated to bridging the gap between ideas and reality.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4"
                        >
                            <a href="#portfolio" className="btn btn-primary group w-full sm:w-auto">
                                View Our Work
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn btn-outline w-full sm:w-auto">
                                Get a Quote
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats/Features row - Separated by structural gap */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 p-8 md:p-10 glass w-full max-w-3xl mx-4"
                    >
                        <div className="flex flex-col items-center">
                            <Globe className="text-primary mb-2" size={24} />
                            <span className="text-xl md:text-2xl font-bold">5+</span>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest text-center">Projects Delivered</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Zap className="text-secondary mb-2" size={24} />
                            <span className="text-xl md:text-2xl font-bold text-gradient">Fast</span>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest text-center">Delivery Time</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Sparkles className="text-accent mb-2" size={24} />
                            <span className="text-xl md:text-2xl font-bold">100%</span>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest text-center">Client Satisfaction</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative radial gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none"></div>
        </section>
    );
};

export default Hero;
