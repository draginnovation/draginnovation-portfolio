import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-40"
                >
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 focus:outline-none"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={24} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
