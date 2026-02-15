import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
    const categories = ['All', 'Web Development', 'Web Application'];
    const [activeCategory, setActiveCategory] = useState('All');

    const allProjects = [
        {
            id: 1,
            title: 'Star Catering',
            category: 'Web Development',
            description: 'A modern landing page for Srivilliputhur premier catering service.',
            image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
            liveUrl: 'https://akarv742006.github.io/star-catering/',
            githubUrl: '#'
        },
        {
            id: 2,
            title: 'TSR Transport & Exports',
            category: 'Web Development',
            description: 'Commercial web presence for logistics and export business.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
            liveUrl: 'https://akarv742006.github.io/TSR-TRADERS-EXPORTS/',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'Sri Sornam Medical',
            category: 'Web Development',
            description: 'Local pharmacy website with digital inventory showcase.',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
            liveUrl: 'https://akarv742006.github.io/SRI-SORNAM-MEDICAL/',
            githubUrl: '#'
        },
        {
            id: 4,
            title: 'Mechanical Engineering Portfolio',
            category: 'Web Development',
            description: 'Specialized portfolio website for engineering projects and skills.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            liveUrl: 'https://draginnovation.github.io/mahavishva-portfolio/',
            githubUrl: '#'
        },
        {
            id: 5,
            title: 'Biomedical Career Portfolio',
            category: 'Web Development',
            description: 'A high-end portfolio website for biomedical engineering students.',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 6,
            title: 'Virtual Classroom Project',
            category: 'Web Application',
            description: 'Interactive digital classroom web application for remote learning.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    const filteredProjects = activeCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-slate-900/50">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-8">
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
                        >
                            Our Portfolio
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold font-heading"
                        >
                            Recent <span className="text-gradient">Projects</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-sm font-semibold transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white/5 text-text-muted hover:bg-white/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group glass-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col"
                            >
                                <div className="aspect-video bg-white/5 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-darker to-transparent opacity-60"></div>
                                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                                        <span className="badge bg-primary/20 text-primary border border-primary/20 backdrop-blur-md px-3 py-1 text-[10px] md:text-xs">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted text-sm md:text-base mb-6 md:mb-8 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <div className="flex gap-4">
                                            <a href={project.liveUrl} className="text-white/50 hover:text-primary transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                            <a href={project.githubUrl} className="text-white/50 hover:text-primary transition-colors">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                        <a href={project.liveUrl} className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm group/link">
                                            View Details
                                            <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
