import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * ProjectCard — Unified card component
 *
 * Props:
 *   icon        ReactNode  — Icon element (always rendered in accent color)
 *   title       string     — Main title
 *   subtitle    string?    — Subtitle (accent color). Optional.
 *   description string     — Body text
 *   metrics     string[]?  — Impact metrics. Optional.
 *   tags        string[]?  — Tech tags. Optional.
 *   clickable   boolean?   — If true, card is interactive and shows "Read More"
 *   onReadMore  function?  — Callback fired when "Read More" is clicked
 *   colSpan     number?    — Grid column span (used externally)
 *   className   string?    — Extra class (e.g. "span-3")
 */
const ProjectCard = ({
    icon,
    title,
    subtitle,
    description,
    metrics,
    tags,
    clickable = false,
    onReadMore,
    className = '',
}) => {
    const handleReadMore = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        if (onReadMore) onReadMore();
    };

    const handleKeyDown = (e) => {
        if (clickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleReadMore(e);
        }
    };

    return (
        <div
            className={`project-card-unified ${className}`}
            style={{
                ...cardStyles.card,
                cursor: clickable ? 'pointer' : 'default',
            }}
            onClick={clickable ? handleReadMore : undefined}
            onKeyDown={clickable ? handleKeyDown : undefined}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            aria-label={clickable ? `View details for ${title}` : undefined}
        >
            {/* Header: title + subtitle LEFT, icon RIGHT */}
            <div style={cardStyles.header}>
                <div style={cardStyles.headerText}>
                    <h3 style={cardStyles.title}>{title}</h3>
                    {subtitle && (
                        <p style={cardStyles.subtitle}>{subtitle}</p>
                    )}
                </div>
                <div style={{
                    ...cardStyles.iconWrapper,
                    alignSelf: subtitle ? 'center' : 'flex-start',
                }}>
                    {icon}
                </div>
            </div>

            {/* Description */}
            <p style={cardStyles.description}>{description}</p>

            {/* Impact Metrics — optional */}
            {metrics && metrics.length > 0 && (
                <div style={cardStyles.metricsContainer}>
                    {metrics.map((metric, i) => (
                        <div key={i} style={cardStyles.metricItem}>
                            <span style={cardStyles.metricDot} />
                            <span>{metric}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Tags — optional */}
            {tags && tags.length > 0 && (
                <div style={cardStyles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} style={cardStyles.tag}>{tag}</span>
                    ))}
                </div>
            )}

            {/* Read More — only if clickable */}
            {clickable && (
                <div style={cardStyles.readMoreRow}>
                    <span style={cardStyles.readMoreBtn} aria-hidden="true">
                        Read More <ArrowRight size={14} />
                    </span>
                </div>
            )}
        </div>
    );
};

const cardStyles = {
    card: {
        background: 'var(--bg-secondary)',
        borderRadius: '24px',
        padding: '36px 32px',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s ease',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
    },
    headerText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1,
    },
    title: {
        fontSize: '20px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-0.3px',
        lineHeight: '1.2',
    },
    subtitle: {
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    iconWrapper: {
        flexShrink: 0,
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: 'var(--accent-bg-subtle)',
        color: 'var(--accent-color)',
    },
    description: {
        fontSize: '15px',
        color: 'var(--text-secondary)',
        lineHeight: '1.65',
        flex: 1,
    },
    metricsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        background: 'var(--card-bg-subtle)',
        padding: '14px 16px',
        borderRadius: '12px',
        borderLeft: '2px solid var(--accent-color)',
    },
    metricItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
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
    tags: {
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
    readMoreRow: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '4px',
    },
    readMoreBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'var(--accent-color)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        transition: 'opacity 0.2s',
    },
};

export default ProjectCard;
