import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Navigation, Map, Activity, Stethoscope, Gamepad2, ArrowUpRight, ShoppingCart, TrendingUp } from 'lucide-react';

const projects = [
    {
        id: 0,
        title: "Carrefour Spain",
        subtitle: "Technical Lead & Mentorship",
        colSpan: 3,
        tags: ["MVI Architecture", "Jetpack Compose", "Quality Engineering", "Team Leadership"],
        description: "Leading technical delivery and architecture for the Carrefour App in Spain. Empowering and mentoring a squad of 3 engineers, establishing rigorous code quality standards, and enforcing TDD practices to ensure a highly scalable and stable platform.",
        metrics: ["13M Active Users", "Architected MVP & Delivery Pipeline", "Mentoring 3 engineers (Junior to Mid)"],
        icon: <ShoppingCart size={24} color="#005b9f" />,
        color: "#005b9f", // Carrefour Blue
        link: "#"
    },
    {
        id: 1,
        title: "Inditex (ZARA)",
        subtitle: "Global Retail App & Technical Leadership",
        colSpan: 3,
        tags: ["Kotlin", "Clean Architecture", "WeChat SDK", "LiveTracking"],
        description: "Spearheaded critical architectural integrations for the global Zara app (+50M downloads). Mentored 4 engineers and led the technical implementation of the WeChat ecosystem. Established Clean Architecture patterns that improved code maintainability and team velocity across distributed squads.",
        metrics: ["+12M Active Users (22M Daily Traffic)", "+1.9M Global Transactions", "90% Test Coverage on new architecture"],
        icon: <ShoppingBag size={24} color="#fff" />,
        color: "var(--accent-color)", // Brand Blue
        link: "#"
    },
    {
        id: 2,
        title: "Honda (Wind River)",
        subtitle: "Automotive Embedded Systems",
        colSpan: 2,
        tags: ["Android Automotive", "AOSP", "Safety Critical", "JNI"],
        description: "Embedded Software Engineer within the Wind River (Honda Motor) team, specializing in automotive digital dashboard systems. Architected new core functionalities and maintained safety-compliant infotainment middleware, ensuring high reliability and real-time performance across Honda's vehicle fleet.",
        icon: <Navigation size={24} color="#30D158" />,
        color: "#32d74b", // Automotive Green
        link: "#"
    },
    {
        id: 3,
        title: "Janis (Logistic)",
        subtitle: "Intelligent Supply Chain",
        colSpan: 2,
        tags: ["Google Maps SDK", "Offline-First", "Real-time Sync"],
        description: "Architected and delivered a high-efficiency logistics application from scratch as an independent Technical Lead. Defined the entire technical stack, solved complex routing challenges with custom internal maps, and implemented robust offline data synchronization.",
        icon: <Map size={24} color="#FF9500" />,
        color: "#FF9500", // Logistics Orange
        link: "#"
    },
    {
        id: 4,
        title: "HealthCrisis Responder (VZLA)",
        subtitle: "Social Impact & Civic Tech",
        colSpan: 2,
        tags: ["OCR & Barcode", "Real-time Mapping", "Inventory Sync", "Crisis Tech"],
        description: "Engineered a civic-tech platform to combat the severe 2014 medication shortage in Venezuela. Integrated Optical Character Recognition (OCR) and Barcode scanning for rapid drug identification, mapping real-time pharmacy inventory levels to guide users to life-saving supplies.",
        icon: <Activity size={24} color="#FF3B30" />,
        color: "#FF3B30", // Urgent Red
        link: "#"
    },
    {
        id: 6,
        title: "Amadita Games",
        subtitle: "Clinical Gamification & Kiosk Ecosystem",
        colSpan: 6,
        tags: ["Kiosk Mode", "Lock Task API", "Custom Launcher", "Local DB"],
        description: "Architected a secure, custom Android Kiosk ecosystem for Amadita Clinical Laboratory (Dominican Republic). Engineered a robust 'Game Manager' that auto-launches on boot, overriding system navigation to prevent unauthorized exit, ensuring a safe, controlled environment for pediatric waiting rooms.",
        metrics: [
            "Hardware Lockdown: Custom launcher with secret-key exit protocols.",
            "SuperMemory: Dynamic memory engine with 3 worlds and local DB leaderboards.",
            "SuperScientist: Adaptive trivia system with 400+ randomized questions and accessibility modes (auditory/visual) for pre-readers."
        ],
        icon: <Gamepad2 size={24} color="#BF5AF2" />,
        color: "#BF5AF2", // Gaming/Creative Purple
        link: "#"
    }
];

const FeaturedProjects = () => {
    return (
        <section id="projects" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={styles.header}
                >
                    <h2 style={styles.heading}>Selected Highlights</h2>
                    <p style={styles.subHeading}>Scalable Architectures. Embedded Systems. Critical Solutions.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ borderColor: 'var(--border-focus)', backgroundColor: 'var(--card-bg-subtle)', transition: { duration: 0.2 } }}
                            className={`project-card span-${project.colSpan || 1}`}
                            style={styles.card}
                        >
                            <div style={{ ...styles.iconBox, background: `var(--card-bg-subtle)` }}>
                                {project.icon}
                            </div>

                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <h4 style={{ ...styles.subtitle, color: project.color }}>{project.subtitle}</h4>

                                <p style={styles.description}>{project.description}</p>

                                {project.metrics && (
                                    <div style={styles.metricsContainer}>
                                        {project.metrics.map((metric, i) => (
                                            <div key={i} style={styles.metricItem}>
                                                <TrendingUp size={14} color="var(--accent-color)" />
                                                <span>{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div style={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CSS for hover effects that are hard to do inline */}
            {/* CSS hover removed in favor of Framer Motion */}
        </section>
    );
};

const styles = {
    section: {
        padding: '40px 0', /* Reduced from 120px */
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
    heading: {
        fontSize: '48px',
        fontWeight: '800',
        marginBottom: '16px',
        letterSpacing: '-1px',
    },
    subHeading: {
        fontSize: '18px',
        color: 'var(--text-secondary)',
    },
    // Grid now handled in index.css for responsiveness
    card: {
        background: 'var(--bg-secondary)',
        borderRadius: '24px',
        padding: '40px 32px',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    iconBox: {
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        flex: 1,
    },
    title: {
        fontSize: '24px',
        fontWeight: '700',
    },
    subtitle: {
        fontSize: '14px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    description: {
        fontSize: '16px',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        flex: 1, // Pushes tags to bottom
        marginBottom: '16px',
    },
    metricsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
        background: 'var(--card-bg-subtle)',
        padding: '12px 16px',
        borderRadius: '12px',
        borderLeft: '2px solid var(--accent-color)'
    },
    metricItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    tag: {
        fontSize: '12px',
        padding: '6px 12px',
        borderRadius: '12px',
        background: 'var(--card-bg-subtle)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
    }
};

export default FeaturedProjects;
