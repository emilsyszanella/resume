import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone } from 'lucide-react';

const HeroSection = () => {
    return (
        <section style={styles.section}>
            {/* Background handled globally by BackgroundEffects */}

            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div style={styles.badge}>
                        <span style={styles.badgeDot}></span>
                        Available for new challenges
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 style={styles.headline}>
                        11+ Years Architecting <br />
                        <motion.span
                            className="text-gradient"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                                }
                            }}
                        >
                            {["Mobile", "Systems."].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    style={{ display: 'inline-block', marginRight: i === 0 ? '0.3em' : 0 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p style={styles.description}>
                        I don't just build apps; I define the standard. From high-scale systems at <strong>Inditex (ZARA)</strong> to award-winning native solutions. Bridging the gap between creative vision and rock-solid engineering.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={styles.actions}
                >
                    <motion.a
                        href="#projects"
                        style={styles.primaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Selected Work <ChevronRight size={20} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        style={styles.secondaryButton}
                        whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={styles.statsRow}
                >
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>11+</span>
                        <span style={styles.statLabel}>Years Exp.</span>
                    </div>
                    <div style={styles.separator}></div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>+12.6M</span>
                        <span style={styles.statLabel}>Users Impacted</span>
                    </div>
                    <div style={styles.separator}></div>
                    <div style={styles.statItem}>
                        <span style={styles.statValue}>Top 1%</span>
                        <span style={styles.statLabel}>Talent</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '60px',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        maxWidth: '900px',
        padding: '0 24px',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '8px 16px',
        borderRadius: '30px',
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--text-primary)',
        marginBottom: '24px',
    },
    badgeDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#30D158', // Success Green
        boxShadow: '0 0 8px #30D158',
        animation: 'pulse 2s infinite',
    },
    headline: {
        fontSize: 'clamp(48px, 6vw, 80px)', // Fluid typography
        lineHeight: '1.05',
        fontWeight: '800',
        marginBottom: '32px',
        letterSpacing: '-2px',
        background: 'linear-gradient(to bottom, #fff, #ccc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    description: {
        fontSize: 'clamp(18px, 2vw, 22px)',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        marginBottom: '48px',
        maxWidth: '640px',
    },
    actions: {
        display: 'flex',
        gap: '16px',
        marginBottom: '64px',
        flexWrap: 'wrap',
    },
    primaryButton: {
        background: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        padding: '16px 32px',
        borderRadius: '30px',
        fontSize: '16px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    secondaryButton: {
        border: '1px solid var(--border-focus)',
        color: 'var(--text-primary)',
        padding: '16px 32px',
        borderRadius: '30px',
        fontSize: '16px',
        fontWeight: '600',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(10px)',
    },
    statsRow: {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '32px',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    statValue: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--text-primary)',
    },
    statLabel: {
        fontSize: '13px',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '500',
    },
    separator: {
        width: '1px',
        height: '40px',
        background: 'var(--border-subtle)',
    }
};

export default HeroSection;
