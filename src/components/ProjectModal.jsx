import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Briefcase, Zap, TrendingUp, Code, CheckCircle2, ChevronRight } from 'lucide-react';

/**
 * ProjectModal — Executive Case Study Layout
 *
 * modalData shape:
 * {
 *   icon:            ReactNode
 *   title:           string
 *   subtitle:        string       — Role + Focus Area
 *   hook:            string       — 1-2 line impact statement
 *   context:         string[]     — Situation when you joined (2-3 bullets)
 *   challenge:       string       — Core technical/org problem
 *   approach:        string[]     — How you solved it (bullet list, "→ ...")
 *   metrics:         string[]     — Quantified impact results (✓ ...)
 *   tags:            { label: string, category: string }[]
 *   link:            string?      — Play Store / external URL
 *   linkLabel:       string?
 *   screenshots:     string[]?    — Optional image URLs
 * }
 */
const ProjectModal = ({ isOpen, onClose, data }) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => closeBtnRef.current?.focus(), 100);
            const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen, onClose]);

    if (!data) return null;

    // Group tags by category
    const tagCategories = data.tags?.reduce((acc, tag) => {
        const cat = tag.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(tag.label);
        return acc;
    }, {}) || {};

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
                        aria-hidden="true"
                    />

                    {/* Panel */}
                    <motion.div
                        key="panel"
                        initial={{ opacity: 0, y: 50, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={modalStyles.panel}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        {/* Close button */}
                        <button
                            ref={closeBtnRef}
                            onClick={onClose}
                            style={modalStyles.closeBtn}
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>

                        {/* ── HEADER ─────────────────────────────── */}
                        <div style={modalStyles.header}>
                            <div style={modalStyles.iconWrapper} aria-hidden="true">
                                {data.icon}
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                                    <h2 id="modal-title" style={modalStyles.title}>{data.title}</h2>
                                    {data.year && <span style={modalStyles.yearBadge}>{data.year}</span>}
                                </div>
                                {data.subtitle && (
                                    <p style={modalStyles.subtitle}>{data.subtitle}</p>
                                )}
                            </div>
                        </div>

                        {/* ── SCROLLABLE BODY ─────────────────────── */}
                        <div style={modalStyles.body}>

                            {/* Hook / Impact Statement */}
                            {data.hook && (
                                <p style={modalStyles.hook}>{data.hook}</p>
                            )}

                            <div style={modalStyles.divider} aria-hidden="true" />

                            {/* CONTEXT */}
                            {data.context && data.context.length > 0 && (
                                <section style={modalStyles.section} aria-label="Context">
                                    <div style={modalStyles.sectionHeader}>
                                        <Briefcase size={14} color="var(--accent-color)" aria-hidden="true" />
                                        <h3 style={modalStyles.sectionLabel}>Context</h3>
                                    </div>
                                    <ul style={modalStyles.bulletList}>
                                        {data.context.map((item, i) => (
                                            <li key={i} style={modalStyles.bulletItem}>
                                                <span style={modalStyles.bulletDot} aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* CHALLENGE */}
                            {data.challenge && (
                                <section style={modalStyles.section} aria-label="Challenge">
                                    <div style={modalStyles.sectionHeader}>
                                        <Zap size={14} color="var(--accent-color)" aria-hidden="true" />
                                        <h3 style={modalStyles.sectionLabel}>Challenge</h3>
                                    </div>
                                    <p style={modalStyles.sectionText}>{data.challenge}</p>
                                </section>
                            )}

                            {/* APPROACH */}
                            {data.approach && data.approach.length > 0 && (
                                <section style={modalStyles.section} aria-label="Approach">
                                    <div style={modalStyles.sectionHeader}>
                                        <ChevronRight size={14} color="var(--accent-color)" aria-hidden="true" />
                                        <h3 style={modalStyles.sectionLabel}>How I Solved It</h3>
                                    </div>
                                    <ul style={modalStyles.approachList}>
                                        {data.approach.map((item, i) => (
                                            <li key={i} style={modalStyles.approachItem}>
                                                <span style={modalStyles.arrowMarker} aria-hidden="true">→</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* IMPACT / RESULTS */}
                            {data.metrics && data.metrics.length > 0 && (
                                <section style={modalStyles.section} aria-label="Impact and Results">
                                    <div style={modalStyles.sectionHeader}>
                                        <TrendingUp size={14} color="var(--accent-color)" aria-hidden="true" />
                                        <h3 style={modalStyles.sectionLabel}>Impact & Results</h3>
                                    </div>
                                    <ul style={modalStyles.metricsList}>
                                        {data.metrics.map((m, i) => (
                                            <li key={i} style={modalStyles.metricItem}>
                                                <CheckCircle2 size={15} color="var(--accent-color)" style={{ flexShrink: 0 }} aria-hidden="true" />
                                                <span>{m}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* TECH STACK / SKILLS */}
                            {Object.keys(tagCategories).length > 0 && (
                                <section style={modalStyles.section} aria-label="Technologies and Skills">
                                    <div style={modalStyles.sectionHeader}>
                                        <Code size={14} color="var(--accent-color)" aria-hidden="true" />
                                        <h3 style={modalStyles.sectionLabel}>Technologies & Skills</h3>
                                    </div>
                                    <div style={modalStyles.tagCategories}>
                                        {Object.entries(tagCategories).map(([cat, tags]) => (
                                            <div key={cat} style={modalStyles.tagCategoryRow}>
                                                <span style={modalStyles.tagCategoryLabel}>{cat}</span>
                                                <div style={modalStyles.tagsRow}>
                                                    {tags.map((tag) => (
                                                        <span key={tag} style={modalStyles.tag}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* External Links */}
                            {data.links && data.links.length > 0 && (
                                <div style={modalStyles.linksContainer}>
                                    {data.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={modalStyles.linkBtn}
                                            aria-label={`View project on ${link.label}`}
                                        >
                                            {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
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
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
    },
    panel: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        width: '90%',
        maxWidth: '680px',
        maxHeight: '88vh',
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
        transition: 'background 0.2s, color 0.2s',
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
        padding: '28px 32px 40px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
    },
    hook: {
        fontSize: '16px',
        color: 'var(--text-primary)',
        lineHeight: '1.7',
        fontWeight: '500',
        fontStyle: 'italic',
        borderLeft: '3px solid var(--accent-color)',
        paddingLeft: '16px',
    },
    divider: {
        height: '1px',
        background: 'var(--border-subtle)',
        margin: '-8px 0',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    sectionLabel: {
        fontSize: '11px',
        fontWeight: '700',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        margin: 0,
    },
    sectionText: {
        fontSize: '15px',
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
    },
    bulletList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingLeft: 0,
    },
    bulletItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    bulletDot: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: 'var(--text-tertiary)',
        flexShrink: 0,
        marginTop: '8px',
    },
    approachList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        paddingLeft: 0,
    },
    approachItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    arrowMarker: {
        color: 'var(--accent-color)',
        fontWeight: '700',
        flexShrink: 0,
        fontSize: '15px',
        marginTop: '1px',
    },
    metricsList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        paddingLeft: 0,
    },
    metricItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        lineHeight: '1.5',
    },
    tagCategories: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    tagCategoryRow: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        flexWrap: 'wrap',
    },
    tagCategoryLabel: {
        fontSize: '11px',
        fontWeight: '600',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        minWidth: '100px',
        paddingTop: '5px',
    },
    tagsRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        flex: 1,
    },
    tag: {
        fontSize: '12px',
        padding: '4px 11px',
        borderRadius: '10px',
        background: 'var(--accent-bg-subtle)',
        border: '1px solid var(--border-focus)',
        color: 'var(--accent-color)',
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
    linksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginTop: '8px',
    },
    yearBadge: {
        fontSize: '14px',
        fontWeight: '600',
        color: 'var(--text-tertiary)',
        background: 'var(--bg-secondary)',
        padding: '2px 8px',
        borderRadius: '6px',
        border: '1px solid var(--border-subtle)',
    },
};

export default ProjectModal;
