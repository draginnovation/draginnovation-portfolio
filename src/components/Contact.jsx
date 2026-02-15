import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Sparkles } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
                    >
                        Get In Touch
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Let's Talk About Your <span className="text-gradient">Project</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted text-base md:text-lg px-4"
                    >
                        Ready to start your next digital venture? We're here to help you
                        transform your ideas into reality.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4 md:gap-6 p-6 md:p-8 glass-card rounded-2xl">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Email Us</h4>
                                    <a href="mailto:draginnovation@gmail.com" className="text-text-muted text-sm md:text-base hover:text-primary transition-colors">draginnovation@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-6 p-6 md:p-8 glass-card rounded-2xl">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">WhatsApp / Call</h4>
                                    <p className="text-text-muted text-sm md:text-base">+91 6379762186</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 w-full"
                        action="mailto:draginnovation@gmail.com"
                        method="POST"
                        enctype="text/plain"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-colors text-white text-sm md:text-base cursor-text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-colors text-white text-sm md:text-base cursor-text"
                                />
                            </div>
                        </div>
                        <div className="space-y-2 mb-6 md:mb-8">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell us about your project..."
                                className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-colors text-white text-sm md:text-base resize-none cursor-text"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full py-4 rounded-xl md:rounded-2xl flex justify-center group">
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
