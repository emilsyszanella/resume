import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Users } from 'lucide-react';
import ProjectCard from './ProjectCard';

const philosophies = [
    {
        icon: <Layers size={22} />,
        title: 'Clean Architecture & MVI',
        description: 'Designing decoupled, scalable systems. By isolating business logic from UI frameworks, I ensure applications can grow and adapt without accumulating technical debt.',
    },
    {
        icon: <ShieldCheck size={22} />,
        title: 'Quality Engineering',
        subtitle: 'TDD · BDD · CI/CD',
        description: 'Enforcing rigorous testing standards. Through TDD and automated CI/CD pipelines, I deliver highly stable platforms that maintain 99.9% crash-free rates.',
    },
    {
        icon: <Users size={22} />,
        title: 'Team Mentorship',
        subtitle: 'Tech Leadership',
        description: 'Empowering developers to become architects. I focus on establishing clear technical standards, reviewing critical PRs, and elevating the velocity of the entire squad.',
    },
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
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <ProjectCard
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                clickable={false}
                            />
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
        color: 'var(--text-primary)',
    },
    subHeading: {
        fontSize: '18px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
    },
};

export default CorePhilosophy;
