import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
    { icon: <Award size={26} color="var(--accent-color)" />, value: '11+', label: 'Years Engineering' },
    { icon: <Users size={26} color="var(--accent-color)" />, value: '+12.6M', label: 'Users Impacted' },
    { icon: <TrendingUp size={26} color="var(--accent-color)" />, value: 'Acquired', label: 'Health-tech App Exit' },
];

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
                        Building the mobile systems that scale to millions —
                        and leading the engineers who build them.
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
                        href="#about"
                        style={styles.secondaryButton}
                        whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About Me
                    </motion.a>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={styles.statsContainer}
                    className="stats-container"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            style={styles.statCard}
                            className="stat-card"
                            whileHover={{ y: -5, background: 'var(--bg-secondary)' }}
                            aria-label={`${stat.value} ${stat.label}`}
                        >
                            <div style={styles.iconContainer} className="stat-icon" aria-hidden="true">
                                {stat.icon}
                            </div>
                            <div style={styles.statContent} className="stat-content" aria-hidden="true">
                                <span className="text-gradient stat-value" style={styles.statValue}>{stat.value}</span>
                                <span style={styles.statLabel} className="stat-label">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Local styles for single-line mobile responsiveness */}
                <style>{`
                    @media (max-width: 768px) {
                        .stats-container {
                            gap: 12px !important;
                        }
                        .stat-card {
                            flex-direction: column !important;
                            align-items: center !important;
                            text-align: center !important;
                            gap: 8px !important;
                            padding: 8px !important;
                        }
                        .stat-icon {
                            width: 40px !important;
                            height: 40px !important;
                        }
                        .stat-icon svg {
                            width: 20px !important;
                            height: 20px !important;
                        }
                        .stat-value {
                            font-size: 22px !important;
                        }
                        .stat-label {
                            font-size: 10px !important;
                            letter-spacing: 0px !important;
                        }
                    }
                `}</style>
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
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
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
        background: 'var(--success-color)', // Success Green
        boxShadow: '0 0 8px var(--success-color)',
        animation: 'pulse 2s infinite',
    },
    headline: {
        fontSize: 'clamp(48px, 6vw, 80px)', // Fluid typography
        lineHeight: '1.05',
        fontWeight: '800',
        marginBottom: '32px',
        letterSpacing: '-2px',
        color: 'var(--text-primary)',
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
        background: 'var(--accent-color)',
        color: '#FFFFFF',
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
        background: 'var(--card-bg-subtle)',
        backdropFilter: 'blur(10px)',
    },
    statsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        marginTop: '64px',
    },
    statCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '16px',
        borderRadius: '16px',
        transition: 'background 0.3s, transform 0.3s',
        cursor: 'default',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        flexShrink: 0,
    },
    statContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    statValue: {
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '-1px',
        display: 'inline-block', // Crucial for text-gradient
    },
    statLabel: {
        fontSize: '13px',
        color: 'var(--text-tertiary)',
        lineHeight: '1.4',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
};

export default HeroSection;
