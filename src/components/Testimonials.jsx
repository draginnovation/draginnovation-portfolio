import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Ashok Kumar",
            role: "Owner, Sri Sornam Medicals",
            content: "The website they built for us is incredibly user-friendly and efficient. It has streamlined our daily operations perfectly.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
                    >
                        Success Stories
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        What Our <span className="text-gradient">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="flex justify-center gap-10 md:gap-14 px-4 md:px-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 md:p-8 rounded-2xl flex flex-col relative max-w-2xl w-full items-center text-center"
                        >
                            <Quote size={40} className="text-primary/20 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-4 justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 flex-grow">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 w-full">
                                <h4 className="text-white font-bold text-base md:text-lg">{testimonial.name}</h4>
                                <p className="text-primary text-xs md:text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
