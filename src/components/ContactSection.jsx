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
                    <span style={styles.badge}>Let's Talk</span>
                    <h2 style={styles.heading}>Your Next Android Tech Lead.</h2>
                    <p style={styles.text}>
                        If you're scaling an Android product to millions — or building the team
                        that will — I'm the technical reference you're looking for.
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

                        {/* GitHub hidden as requested (empty personal profile) */}
                        {/* 
                        <div style={styles.socialRow}>
                            <a href="https://github.com/emilsyszanella" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <Github size={24} />
                            </a>
                        </div> 
                        */}

                        <motion.a
                            href="https://linkedin.com/in/emilsyszanella"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.secondaryButton}
                            whileHover={{ scale: 1.05, background: 'var(--card-bg-subtle)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={20} /> Connect on LinkedIn
                        </motion.a>
                    </div>

                    <footer style={styles.footer}>
                        <p>Designed & developed by Emilsys Zanella — Spain, {new Date().getFullYear()}.</p>
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
        background: 'var(--bg-primary)',
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
        color: 'var(--text-primary)',
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
        background: 'var(--accent-color)',
        color: '#FFFFFF',
        padding: '16px 36px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'transform 0.2s, opacity 0.2s',
        border: '1px solid var(--accent-color)',
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
