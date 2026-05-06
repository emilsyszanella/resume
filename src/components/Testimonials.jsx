import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Eva Rodriguez Garcia",
        role: "Android Developer",
        text: "She doesn't just master the technical side; she understands the 'why' behind every decision and its impact on the team. She explains things with admirable naturalness, making everyone understand even the most complex topics. Emilsys doesn't just bring technical value; she brings clarity and great humanity.",
        link: "https://linkedin.com/in/emilsyszanella"
    },
    {
        id: 2,
        name: "Borja Orts Bosch",
        role: "Android Developer @ Napptilus",
        text: "Her ability to design clean architectures (MVVM and Clean Architecture) makes her an exceptional professional. She stands out for her collaborative attitude, always ready to support the team, share knowledge, and find efficient solutions to complex problems.",
        link: "https://linkedin.com/in/emilsyszanella"
    },
    {
        id: 3,
        name: "Armando Quispe Ticona",
        role: "Android Developer",
        text: "She is a highly valuable person for any team, not only technically but also on a human level. I am very grateful to have been part of her team under her guidance, especially during the first days when one needs direction the most.",
        link: "https://linkedin.com/in/emilsyszanella"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    return (
        <section id="testimonials" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={styles.header}
                >
                    <span style={styles.badge}>Social Proof</span>
                    <h2 style={styles.heading}>What Colleagues Say.</h2>
                </motion.div>

                <div style={styles.carouselContainer}>
                    <button onClick={handlePrev} style={styles.navButton}>
                        <ChevronLeft size={24} color="var(--text-primary)" />
                    </button>

                    <div style={styles.cardWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                style={styles.card}
                            >
                                <Quote size={40} color="var(--border-focus)" style={styles.quoteIcon} />
                                
                                <p style={styles.text}>"{testimonials[currentIndex].text}"</p>
                                
                                <div style={styles.authorSection}>
                                    <div style={styles.authorInfo}>
                                        <h4 style={styles.authorName}>{testimonials[currentIndex].name}</h4>
                                        <p style={styles.authorRole}>{testimonials[currentIndex].role}</p>
                                    </div>
                                    <a href={testimonials[currentIndex].link} target="_blank" rel="noopener noreferrer" style={styles.linkedinIcon}>
                                        <Linkedin size={20} color="#0A66C2" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={handleNext} style={styles.navButton}>
                        <ChevronRight size={24} color="var(--text-primary)" />
                    </button>
                </div>

                <div style={styles.dotsContainer}>
                    {testimonials.map((_, idx) => (
                        <div 
                            key={idx} 
                            style={{
                                ...styles.dot, 
                                background: idx === currentIndex ? 'var(--accent-color)' : 'var(--border-subtle)'
                            }}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        marginBottom: '64px',
        textAlign: 'center',
    },
    badge: {
        fontSize: '14px',
        fontWeight: '600',
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        display: 'block',
        marginBottom: '16px',
    },
    heading: {
        fontSize: '40px',
        fontWeight: '800',
        letterSpacing: '-1px',
    },
    carouselContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        position: 'relative',
    },
    navButton: {
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s',
        flexShrink: 0,
    },
    cardWrapper: {
        flex: 1,
        maxWidth: '700px',
        overflow: 'hidden',
    },
    card: {
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '24px',
        padding: '48px 40px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '280px',
    },
    quoteIcon: {
        position: 'absolute',
        top: '32px',
        left: '32px',
    },
    text: {
        fontSize: '16px',
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
        marginTop: '32px',
        marginBottom: '32px',
        flex: 1,
    },
    authorSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '24px',
    },
    authorInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    authorName: {
        fontSize: '16px',
        fontWeight: '700',
        color: 'var(--text-primary)',
    },
    authorRole: {
        fontSize: '14px',
        color: 'var(--text-tertiary)',
    },
    linkedinIcon: {
        padding: '8px',
        background: 'var(--card-bg-subtle)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
    },
    dotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '32px',
    },
    dot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background 0.3s',
    }
};

export default Testimonials;
