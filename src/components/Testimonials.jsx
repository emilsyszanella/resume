import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';

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

// ── Single testimonial card (shared between grid + mobile carousel) ──────────
const TestimonialCard = ({ testimonial }) => (
    <div style={styles.card}>
        <Quote size={32} color="var(--border-focus)" style={styles.quoteIcon} aria-hidden="true" />
        <p style={styles.text}>"{testimonial.text}"</p>
        <div style={styles.authorSection}>
            <div style={styles.authorInfo}>
                <h3 style={styles.authorName}>{testimonial.name}</h3>
                <p style={styles.authorRole}>{testimonial.role}</p>
            </div>
            <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkedinIcon}
                aria-label={`View ${testimonial.name} on LinkedIn`}
            >
                <Linkedin size={18} color="#0A66C2" />
            </a>
        </div>
    </div>
);

// ── Mobile carousel with scroll-snap ────────────────────────────────────────
const MobileCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef(null);

    const handleScroll = () => {
        if (!trackRef.current) return;
        const scrollLeft = trackRef.current.scrollLeft;
        const width = trackRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    };

    return (
        <div style={styles.mobileCarouselWrapper}>
            <div
                ref={trackRef}
                onScroll={handleScroll}
                style={styles.mobileTrack}
                role="region"
                aria-label="Testimonials carousel"
            >
                {testimonials.map((t) => (
                    <div key={t.id} style={styles.mobileSlide}>
                        <TestimonialCard testimonial={t} />
                    </div>
                ))}
            </div>
            {/* Dots */}
            <div style={styles.dotsContainer} role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        role="tab"
                        aria-selected={idx === activeIndex}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        style={{
                            ...styles.dot,
                            background: idx === activeIndex ? 'var(--accent-color)' : 'var(--border-subtle)',
                            border: 'none',
                            padding: 0,
                        }}
                        onClick={() => {
                            trackRef.current?.scrollTo({ left: idx * trackRef.current.offsetWidth, behavior: 'smooth' });
                            setActiveIndex(idx);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// ── Main component ────────────────────────────────────────────────────────────
const Testimonials = () => (
    <section id="testimonials" style={styles.section}>
        <div className="container" style={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={styles.header}
            >
                <span style={styles.badge}>Testimonials</span>
                <h2 style={styles.heading}>What Colleagues Say.</h2>
            </motion.div>

            {/* ── DESKTOP: 3-column grid ── */}
            <motion.div
                className="testimonials-desktop"
                style={styles.desktopGrid}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                {testimonials.map((t) => (
                    <TestimonialCard key={t.id} testimonial={t} />
                ))}
            </motion.div>

            {/* ── MOBILE: scroll-snap carousel ── */}
            <div className="testimonials-mobile">
                <MobileCarousel />
            </div>
        </div>

        <style>{`
            /* Desktop grid visible, mobile hidden */
            .testimonials-desktop { display: grid; }
            .testimonials-mobile  { display: none; }

            @media (max-width: 768px) {
                .testimonials-desktop { display: none !important; }
                .testimonials-mobile  { display: block !important; }
            }
        `}</style>
    </section>
);

const styles = {
    section: {
        padding: '80px 0',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        marginBottom: '56px',
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
        color: 'var(--text-primary)',
    },

    // ── Desktop grid ─────────────────────────────────────────────────────────
    desktopGrid: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        alignItems: 'stretch',
    },

    // ── Shared card ──────────────────────────────────────────────────────────
    card: {
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '24px',
        padding: '40px 32px 32px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        height: '100%',
        boxSizing: 'border-box',
    },
    quoteIcon: {
        flexShrink: 0,
    },
    text: {
        fontSize: '15px',
        lineHeight: '1.75',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
        flex: 1,
    },
    authorSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '20px',
    },
    authorInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
    },
    authorName: {
        fontSize: '15px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        margin: 0,
    },
    authorRole: {
        fontSize: '13px',
        color: 'var(--text-tertiary)',
        margin: 0,
    },
    linkedinIcon: {
        padding: '8px',
        background: 'var(--bg-secondary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-subtle)',
        transition: 'transform 0.2s',
    },

    // ── Mobile carousel ──────────────────────────────────────────────────────
    mobileCarouselWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    mobileTrack: {
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        gap: '16px',
        // Hide scrollbar cross-browser
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    },
    mobileSlide: {
        flex: '0 0 100%',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
    },
    dotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    dot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

export default Testimonials;
