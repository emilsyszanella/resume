import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ShieldCheck } from 'lucide-react';

const stats = [
    { value: '11+', label: 'Years Engineering' },
    { value: '+12.6M', label: 'Users Impacted' },
    { value: 'App Acquired', label: 'Acquired by a pharmacy chain' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }
    }
};

const AboutSection = () => {
    return (
        <section id="about" style={styles.section}>
            <div className="container" style={styles.container}>

                {/* LEFT: Narrative */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    style={styles.left}
                >
                    {/* Location badge */}
                    <motion.div variants={itemVariants} style={styles.locationBadge}>
                        <MapPin size={13} />
                        Spain
                        <span style={styles.separator}>·</span>
                        <ShieldCheck size={13} />
                        EU Passport
                        <span style={styles.separator}>·</span>
                        <Globe size={13} />
                        Open to Global Remote
                    </motion.div>

                    {/* Value Statement */}
                    <motion.h2 variants={itemVariants} style={styles.heading}>
                        I don't fix bugs.{' '}
                        <span style={styles.accentText}>
                            I design systems that prevent them.
                        </span>
                    </motion.h2>

                    {/* Narrative */}
                    <motion.p variants={itemVariants} style={styles.narrative}>
                        It all started because I'd rather{' '}
                        <strong>build an app than walk into every pharmacy in the city.</strong>{' '}
                        That health-tech solution was later acquired by a national pharmacy chain —
                        and it set the tone for everything since: turning real problems into
                        products that actually ship, sustain, and scale.
                    </motion.p>
                    <motion.p variants={itemVariants} style={{ ...styles.narrative, marginTop: '-12px' }}>
                        As a key technical reference for the Android backbone of{' '}
                        <strong>Inditex (ZARA)</strong> — serving 12.6M users — to driving
                        quality standards at{' '}
                        <strong>Carrefour Spain</strong> — I combine native Android mastery{' '}
                        <em>(Kotlin · Compose · Java)</em> with a product mindset: I don't just
                        code features, I analyze viability, design for longevity, and build
                        systems that <strong>outlast the sprint they were born in.</strong>
                    </motion.p>

                    {/* Stats row removed from here → moved below grid */}
                </motion.div>

                {/* RIGHT: Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                    style={styles.right}
                >
                    <div style={styles.photoFrame}>
                        <img
                            src="./profile.jpeg"
                            alt="Emilsys Zanella — Tech Lead & Android Engineer"
                            style={styles.photo}
                        />
                        {/* Decorative ring */}
                        <div style={styles.photoRing} />
                    </div>

                    {/* Identity chip below photo */}
                    <div style={styles.identityChip}>
                        <span style={styles.chipName}>Emilsys Zanella</span>
                        <span style={styles.chipRole}>Tech Lead & Android Engineer</span>
                    </div>
                </motion.div>

            </div>

            {/* ── Stats bar: full width, below both columns ── */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={styles.statsBar}
            >
                {stats.map((stat, i) => (
                    <React.Fragment key={i}>
                        <motion.div variants={itemVariants} style={styles.statCard}>
                            <span style={styles.statValue}>{stat.value}</span>
                            <span style={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                        {i < stats.length - 1 && (
                            <div style={styles.statDivider} />
                        )}
                    </React.Fragment>
                ))}
            </motion.div>

        </section>
    );
};

const styles = {
    section: {
        padding: '100px 0',
        background: 'var(--bg-primary)',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: '80px',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    // LEFT
    left: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },
    locationBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13px',
        fontWeight: '500',
        color: 'var(--text-secondary)',
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        padding: '6px 14px',
        width: 'fit-content',
    },
    separator: {
        margin: '0 2px',
        color: 'var(--text-tertiary)',
    },
    heading: {
        fontSize: 'clamp(32px, 4vw, 52px)',
        fontWeight: '800',
        lineHeight: '1.1',
        letterSpacing: '-1.5px',
        color: 'var(--text-primary)',
        margin: 0,
    },
    accentText: {
        color: 'var(--accent-color)',
    },
    narrative: {
        fontSize: '17px',
        color: 'var(--text-secondary)',
        lineHeight: '1.75',
        maxWidth: '580px',
        margin: 0,
    },
    statsBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '48px',
        padding: '40px 24px 0',
        borderTop: '1px solid var(--border-subtle)',
    },
    statCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
    },
    statValue: {
        fontSize: '28px',
        fontWeight: '800',
        color: 'var(--text-primary)',
    },
    statLabel: {
        fontSize: '12px',
        color: 'var(--text-tertiary)',
        lineHeight: '1.4',
        fontWeight: '500',
        textAlign: 'center',
        maxWidth: '160px',
    },
    statDivider: {
        width: '1px',
        height: '40px',
        background: 'var(--border-subtle)',
        flexShrink: 0,
    },
    // RIGHT
    right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    photoFrame: {
        position: 'relative',
        width: '100%',
        height: '460px',
    },
    photo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        borderRadius: '28px',
        display: 'block',
        position: 'relative',
        zIndex: 1,
    },
    photoRing: {
        position: 'absolute',
        inset: '-6px',
        borderRadius: '34px',
        border: '1.5px solid var(--border-focus)',
        zIndex: 0,
        opacity: 0.6,
    },
    identityChip: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        padding: '14px 24px',
        textAlign: 'center',
        width: '100%',
    },
    chipName: {
        fontSize: '16px',
        fontWeight: '700',
        color: 'var(--text-primary)',
    },
    chipRole: {
        fontSize: '13px',
        fontWeight: '500',
        color: 'var(--accent-color)',
    },
};

export default AboutSection;
