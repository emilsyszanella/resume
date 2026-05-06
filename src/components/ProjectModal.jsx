import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

/**
 * ProjectModal
 *
 * modalData shape:
 * {
 *   icon:            ReactNode
 *   title:           string
 *   subtitle:        string
 *   description:     string      — full/extended description
 *   role:            string      — e.g. "Technical Lead & Sole Architect"
 *   challenge:       string      — biggest technical challenge solved
 *   metrics:         string[]
 *   tags:            string[]
 *   link:            string?     — Play Store / external URL (optional)
 *   linkLabel:       string?     — Button label, e.g. "View on Play Store"
 * }
 */
const ProjectModal = ({ isOpen, onClose, data }) => {
    // Lock body scroll while modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={modalStyles.overlay}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        key="panel"
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={modalStyles.panel}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Close button */}
                        <button onClick={onClose} style={modalStyles.closeBtn} aria-label="Close">
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div style={modalStyles.header}>
                            <div style={modalStyles.iconWrapper}>
                                {data.icon}
                            </div>
                            <div>
                                <h2 style={modalStyles.title}>{data.title}</h2>
                                {data.subtitle && (
                                    <p style={modalStyles.subtitle}>{data.subtitle}</p>
                                )}
                            </div>
                        </div>

                        {/* Scrollable content */}
                        <div style={modalStyles.body}>

                            {/* Description */}
                            <p style={modalStyles.description}>{data.description}</p>

                            {/* Role */}
                            {data.role && (
                                <div style={modalStyles.section}>
                                    <h4 style={modalStyles.sectionLabel}>Role</h4>
                                    <p style={modalStyles.sectionText}>{data.role}</p>
                                </div>
                            )}

                            {/* Technical Challenge */}
                            {data.challenge && (
                                <div style={modalStyles.section}>
                                    <h4 style={modalStyles.sectionLabel}>Key Technical Challenge</h4>
                                    <p style={modalStyles.sectionText}>{data.challenge}</p>
                                </div>
                            )}

                            {/* Impact Metrics */}
                            {data.metrics && data.metrics.length > 0 && (
                                <div style={modalStyles.section}>
                                    <h4 style={modalStyles.sectionLabel}>Impact</h4>
                                    <div style={modalStyles.metricsGrid}>
                                        {data.metrics.map((m, i) => (
                                            <div key={i} style={modalStyles.metricChip}>
                                                <span style={modalStyles.metricDot} />
                                                {m}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tech Stack */}
                            {data.tags && data.tags.length > 0 && (
                                <div style={modalStyles.section}>
                                    <h4 style={modalStyles.sectionLabel}>Technologies</h4>
                                    <div style={modalStyles.tagsRow}>
                                        {data.tags.map((tag) => (
                                            <span key={tag} style={modalStyles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* External Link */}
                            {data.link && (
                                <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={modalStyles.linkBtn}
                                >
                                    {data.linkLabel || 'View Project'} <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        zIndex: 200,
    },
    panel: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '640px',
        maxHeight: '85vh',
        background: 'var(--bg-secondary)',
        borderRadius: '28px',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-heavy)',
        zIndex: 201,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    closeBtn: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-secondary)',
        transition: 'color 0.2s',
        zIndex: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '32px 32px 24px',
        borderBottom: '1px solid var(--border-subtle)',
        flexShrink: 0,
    },
    iconWrapper: {
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        background: 'var(--accent-bg-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'var(--accent-color)',
    },
    title: {
        fontSize: '22px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-0.3px',
    },
    subtitle: {
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginTop: '4px',
    },
    body: {
        padding: '28px 32px 32px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    description: {
        fontSize: '15px',
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    sectionLabel: {
        fontSize: '11px',
        fontWeight: '700',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
    },
    sectionText: {
        fontSize: '15px',
        color: 'var(--text-secondary)',
        lineHeight: '1.65',
    },
    metricsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    metricChip: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    metricDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--accent-color)',
        flexShrink: 0,
    },
    tagsRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    tag: {
        fontSize: '12px',
        padding: '5px 12px',
        borderRadius: '10px',
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    linkBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--accent-color)',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '24px',
        fontSize: '14px',
        fontWeight: '600',
        alignSelf: 'flex-start',
        transition: 'opacity 0.2s',
    },
};

export default ProjectModal;
