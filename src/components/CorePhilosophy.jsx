import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Users } from 'lucide-react';

const philosophies = [
    {
        id: 1,
        title: "Clean Architecture & MVI",
        description: "Designing decoupled, scalable systems. By isolating business logic from UI frameworks, I ensure applications can grow and adapt without accumulating technical debt.",
        icon: <Layers size={28} color="var(--accent-color)" />
    },
    {
        id: 2,
        title: "Quality Engineering",
        description: "Enforcing rigorous testing standards. Through TDD and automated CI/CD pipelines, I deliver highly stable platforms that maintain 99.9% crash-free rates.",
        icon: <ShieldCheck size={28} color="#32d74b" />
    },
    {
        id: 3,
        title: "Team Mentorship",
        description: "Empowering developers to become architects. I focus on establishing clear technical standards, reviewing critical PRs, and elevating the velocity of the entire squad.",
        icon: <Users size={28} color="#BF5AF2" />
    }
];

const CorePhilosophy = () => {
    return (
        <section id="philosophy" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={styles.header}
                >
                    <span style={styles.badge}>Technical Authority</span>
                    <h2 style={styles.heading}>Core Philosophy.</h2>
                    <p style={styles.subHeading}>Beyond writing code, I build resilient systems and high-performing teams.</p>
                </motion.div>

                <div style={styles.grid}>
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            style={styles.card}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                        >
                            <div style={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 style={styles.cardTitle}>{item.title}</h3>
                            <p style={styles.cardDesc}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        marginBottom: '64px',
        maxWidth: '600px',
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
        fontSize: '48px',
        fontWeight: '800',
        marginBottom: '16px',
        letterSpacing: '-1px',
    },
    subHeading: {
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
    },
    card: {
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '24px',
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'all 0.3s ease',
    },
    iconWrapper: {
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px',
    },
    cardTitle: {
        fontSize: '22px',
        fontWeight: '700',
        color: 'var(--text-primary)',
    },
    cardDesc: {
        fontSize: '16px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    }
};

export default CorePhilosophy;
