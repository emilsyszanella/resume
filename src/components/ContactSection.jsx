import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span style={styles.badge}>Next Steps</span>
                    <h2 style={styles.heading}>Let's Architect the Future.</h2>
                    <p style={styles.text}>
                        Specialized in high-performance Android systems and scalable architectures.
                        Available for consulting, senior engineering roles, or strategic partnerships.
                    </p>

                    <div style={styles.actions}>
                        <motion.a
                            href="mailto:emilsyszanella@gmail.com"
                            style={styles.primaryButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} /> Say Hello
                        </motion.a>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <motion.a
                                href="https://github.com/emilsyszanella"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.secondaryButton}
                                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={20} /> GitHub
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/emilsyszanella"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.secondaryButton}
                                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin size={20} /> LinkedIn
                            </motion.a>
                        </div>
                    </div>

                    <footer style={styles.footer}>
                        <p>© {new Date().getFullYear()} Emilsys Zanella. Crafted with precision.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0 60px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-primary), #000)',
    },
    container: {
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px',
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
        fontSize: 'clamp(40px, 5vw, 64px)',
        fontWeight: '800',
        marginBottom: '24px',
        letterSpacing: '-2px',
        background: 'linear-gradient(to bottom, #fff, #888)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    text: {
        fontSize: '20px',
        color: 'var(--text-secondary)',
        marginBottom: '48px',
        lineHeight: '1.6',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '24px',
        marginBottom: '80px',
    },
    primaryButton: {
        background: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        padding: '16px 36px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'transform 0.2s, opacity 0.2s',
        border: '1px solid var(--text-primary)',
    },
    secondaryButton: {
        background: 'transparent',
        color: 'var(--text-primary)',
        padding: '16px 36px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'background 0.2s',
        border: '1px solid var(--border-focus)',
    },
    footer: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '32px',
        color: 'var(--text-tertiary)',
        fontSize: '14px',
    }
};

export default ContactSection;
