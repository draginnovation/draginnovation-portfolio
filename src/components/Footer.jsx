import React from 'react';
import { Shield, CreditCard, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-16 md:py-20 border-t border-white/5 bg-slate-950">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="sm:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white font-heading">
                                DRAG <span className="text-gradient">INNOVATION</span>
                            </span>
                        </div>
                        <p className="text-text-muted text-sm max-w-sm mb-6 leading-relaxed">
                            Pioneering digital excellence through innovative web solutions and premium design.
                            Founded by <strong>Akash</strong>, dedicated to your digital success.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-500 bg-emerald-500/5 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                <Shield size={14} />
                                Secure Payments via UPI/GPay
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <h5 className="text-white font-bold mb-6 font-heading uppercase tracking-widest text-[10px] md:text-xs">Quick Links</h5>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#about" className="hover:text-primary transition-colors no-underline">Our Founder</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors no-underline">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-primary transition-colors no-underline">Success Wall</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors no-underline">Get Started</a></li>
                        </ul>
                    </div>

                    <div className="px-2">
                        <h5 className="text-white font-bold mb-6 font-heading uppercase tracking-widest text-[10px] md:text-xs">Services</h5>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#services" className="hover:text-white transition-colors no-underline">Custom Web Design</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors no-underline">Career Portfolios</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors no-underline">Brand Identity</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors no-underline">SEO Optimization</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
                        © {new Date().getFullYear()} Drag Innovation. All rights reserved.
                        <br className="md:hidden" />
                        Designed with  by <span className="text-white font-bold">Drag Innovation</span>
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
