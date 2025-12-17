import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Navigation, Map, Activity, Stethoscope, Gamepad2, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Inditex (ZARA)",
        subtitle: "Global Retail App",
        tags: ["Kotlin", "Clean Architecture", "WeChat SDK", "LiveTracking"],
        description: "Key contributor to the global Zara Android app (+50M downloads). Implemented critical features including WeChat integration, LiveTracking, Payment Methods, and User Session Management. Applied Clean Architecture patterns to harmonize complex business requirements with user needs.",
        icon: <ShoppingBag size={24} color="#fff" />,
        color: "var(--accent-color)", // Brand Blue
        link: "#"
    },
    {
        id: 2,
        title: "Honda (Wind River)",
        subtitle: "Automotive Embedded Systems",
        tags: ["Android Automotive", "AOSP", "Safety Critical", "JNI"],
        description: "Engineered safety-compliant infotainment middleware for Honda vehicles. Implemented driver distraction mitigation logic (speed-dependent feature blocking) and audio priority arbitration systems adhering to strict automotive standards.",
        icon: <Navigation size={24} color="#30D158" />,
        color: "#32d74b", // Automotive Green
        link: "#"
    },
    {
        id: 3,
        title: "Janis (Logistic)",
        subtitle: "Intelligent Supply Chain",
        tags: ["Google Maps SDK", "Offline-First", "Real-time Sync"],
        description: "Contributed to the development of a high-efficiency logistics application. Solved complex routing challenges with custom internal maps and implemented robust offline data synchronization.",
        icon: <Map size={24} color="#FF9500" />,
        color: "#FF9500", // Logistics Orange
        link: "#"
    },
    {
        id: 4,
        title: "RedyPlan CDI",
        subtitle: "Emergency Response Platform",
        tags: ["Geolocation", "Background Services", "Critical Alerts"],
        description: "Built a vital medical assistance application focused on reliability. Developed a background location tracking system and 'Panic Button' functionality that operates seamlessly across varying network conditions (WiFi/Mobile Data) in LATAM regions.",
        icon: <Activity size={24} color="#FF3B30" />,
        color: "#FF3B30", // Emergency Red
        link: "#"
    },
    {
        id: 5,
        title: "Focalyx",
        subtitle: "Telemedicine & Monitoring",
        tags: ["HealthTech", "Data Security", "Real-time Messaging"],
        description: "Developed a secure patient-physician communication network for prostate cancer monitoring. Implemented compliant health data handling and real-time status updates to facilitate direct remote medical supervision.",
        icon: <Stethoscope size={24} color="#5AC8FA" />,
        color: "#5AC8FA", // Medical Blue
        link: "#"
    },
    {
        id: 6,
        title: "Amadita Games",
        subtitle: "Enterprise Gamification Suite",
        tags: ["Kiosk Mode", "Lock Task API", "Custom Launcher"],
        description: "Created a secure, custom Android Kiosk ecosystem for children in clinical waiting rooms. Built 'Manager' (admin control) and 3 educational games (SuperMemory, SuperScientist) locked to specific hardware devices.",
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
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="project-card"
                            style={styles.card}
                        >
                            <motion.div
                                style={{ ...styles.iconBox, background: `rgba(255,255,255,0.05)` }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {project.icon}
                            </motion.div>

                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <h4 style={{ ...styles.subtitle, color: project.color }}>{project.subtitle}</h4>

                                <p style={styles.description}>{project.description}</p>

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
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    tag: {
        fontSize: '12px',
        padding: '6px 12px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-secondary)',
    }
};

export default FeaturedProjects;
