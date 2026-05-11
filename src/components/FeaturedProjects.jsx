import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Navigation, Map, Activity, Stethoscope, Gamepad2, ShoppingCart, Building2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// ---------------------------------------------------------------------------
// Project data
// Each entry has:
//   card  — data shown in the grid card
//   modal — extra data shown in the modal (role, challenge, link, etc.)
// ---------------------------------------------------------------------------
const projects = [
    {
        id: 0,
        colSpan: 2,
        card: {
            icon: <ShoppingCart size={22} />,
            title: 'Carrefour Spain',
            subtitle: 'Senior Android Engineer · Technical Reference',
            description: 'Leading the modernization of critical authentication and onboarding flows for the Carrefour Spain Android app. Driving the migration toward Jetpack Compose, modular architecture and MVI while mentoring engineers and improving development quality standards.',
            metrics: [
                '5M+ Android Downloads',
                'Compose + Modular Architecture Migration',
                'Reduced PR Review Time & Regression Rate',
            ],
        },
        modal: {
            icon: <ShoppingCart size={22} />,
            title: 'Carrefour Spain',
            subtitle: 'Senior Android Engineer · Technical Reference',
            hook: 'Technical reference for the modernization of Carrefour Spain’s Android app, collaborating with internal teams to migrate critical user flows toward a modular Compose-based architecture.',
            context: [
                'Android app with more than 5M downloads and large-scale daily usage across Spain.',
                'Legacy authentication and onboarding flows required modernization and better maintainability.',
                'Worked as technical reference within an external squad of 4 engineers collaborating with Carrefour internal teams.',
            ],
            challenge: 'Migrating critical user flows toward Jetpack Compose, MVI and modular architecture while maintaining release stability and improving engineering quality standards.',
            approach: [
                'Led the migration of login, registration, password recovery, onboarding and tutorial flows to Jetpack Compose.',
                'Implemented modular and scalable MVI-based architectures in collaboration with internal engineering teams.',
                'Introduced automated testing practices for all newly developed flows to reduce regressions and improve maintainability.',
                'Performed pair programming sessions, architecture reviews and technical documentation to mentor engineers within the squad.',
                'Improved pull request review quality and development consistency through architectural alignment and shared engineering practices.',
            ],
            metrics: [
                '5M+ Android app downloads.',
                'Compose + modular architecture adopted across critical authentication flows.',
                'Reduced PR review time and improved release stability for external squad deliveries.',
                'Improved onboarding experience with dynamic and reusable UI architecture.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Jetpack Compose', category: 'UI' },
                { label: 'MVI Architecture', category: 'Architecture' },
                { label: 'Modularization', category: 'Architecture' },
                { label: 'Clean Architecture', category: 'Architecture' },
                { label: 'Unit Testing', category: 'Engineering' },
                { label: 'CI/CD', category: 'DevOps' },
                { label: 'Technical Mentorship', category: 'Leadership' },
            ],
            year: '2026 - Present',
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.munrodev.crfmobile', label: 'Play Store' }
            ],
        }
    },
    {
        id: 1,
        colSpan: 2,
        card: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Senior Android Engineer · Technical Reference',
            description: 'Contributed to the global Zara Android app, implementing large-scale retail features and leading critical integrations for the Chinese market. Acted as technical reference within the squad, mentoring engineers and improving architecture consistency across new modules.',
            metrics: [
                '12.6M+ Global Users',
                'WeChat Login Integration',
                '70%+ Test Coverage Across Delivered Modules',
            ],
        },
        modal: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Senior Android Engineer · Technical Reference',
            hook: 'Technical reference within a global retail squad, contributing to high-scale Android features and leading the implementation of WeChat authentication flows for the Chinese market.',
            context: [
                'Global retail application supporting millions of users and high daily traffic worldwide.',
                'Worked within a distributed squad structure where technical alignment and maintainability were critical.',
                'Collaborated on features impacting global store operations, account systems and international user experiences.',
            ],
            challenge: 'Integrating WeChat authentication flows into an existing global retail ecosystem while maintaining compatibility with guest and authenticated session handling.',
            approach: [
                'Implemented WeChat login integration with transparent token orchestration between WeChat authentication and Zara session management.',
                'Contributed to large-scale retail features including live tracking, connected accounts, account verification and travel mode.',
                'Worked on worldwide store lifecycle features including regional store openings and temporary store closures.',
                'Continued and reinforced Clean Architecture practices already established within the Android platform.',
                'Mentored engineers within the squad through architecture guidance, code reviews and implementation support.',
                'Maintained high automated test coverage standards across delivered modules and pull requests.',
            ],
            metrics: [
                '12.6M+ global users supported through the Android retail platform.',
                'WeChat login integration successfully delivered for Chinese market expansion.',
                '70%+ test coverage maintained across delivered modules.',
                'Multiple global retail features delivered without major production incidents.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Clean Architecture', category: 'Architecture' },
                { label: 'WeChat SDK', category: 'Integration' },
                { label: 'OAuth 2.0', category: 'Integration' },
                { label: 'Live Tracking', category: 'Feature' },
                { label: 'CI/CD', category: 'DevOps' },
                { label: 'Technical Mentorship', category: 'Leadership' },
            ],
            year: '2021 - 2025',
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.inditex.zara', label: 'Play Store' }
            ],
        }
    },
    {
        id: 6,
        colSpan: 2,
        card: {
            icon: <Building2 size={22} />,
            title: 'Volveremos si tu vuelves',
            subtitle: 'Senior Mobile Engineer · Cross-Platform',
            description: 'Contributed as a Senior Mobile Engineer to Volveremos si tu vuelves, a large-scale municipal commerce platform promoting local businesses across Aragón. Developed cross-platform features for Android and iOS using Xamarin Forms.',
            metrics: [
                '100K+ Android Downloads',
                'Cross-Platform Android & iOS Development',
                'Large-Scale Municipal Commerce Platform',
            ],
        },
        modal: {
            icon: <Building2 size={22} />,
            title: 'Volveremos si tu vuelves',
            subtitle: 'Senior Mobile Engineer · Xamarin Forms',
            hook: 'Worked as a Senior Mobile Engineer on Volveremos si tu vuelves, a cross-platform commerce incentive platform used across multiple municipalities in Aragón to promote local business activity.',
            context: [
                'Municipal commerce platform initially launched by Zaragoza City Council and later expanded across Aragón.',
                'Cross-platform mobile application available on both Android and iOS.',
                'Focused on supporting local commerce campaigns through cashback and incentive systems.',
            ],
            challenge: 'Maintaining and evolving a cross-platform mobile application with active public usage while ensuring feature consistency between Android and iOS.',
            approach: [
                'Developed and maintained mobile features using Xamarin Forms for both Android and iOS platforms.',
                'Collaborated with backend and product teams to support commerce campaign flows and user account management.',
                'Contributed to improving application stability, feature delivery and platform consistency.',
                'Worked on production-ready public sector mobile solutions with real users and active municipal campaigns.',
            ],
            metrics: [
                '100K+ Android downloads publicly available on Google Play.',
                'Cross-platform deployment across Android and iOS ecosystems.',
                'Used across multiple municipalities in Aragón as part of local commerce initiatives.',
            ],
            tags: [
                { label: 'C#', category: 'Language' },
                { label: 'Xamarin Forms', category: 'Framework' },
                { label: 'Android', category: 'Platform' },
                { label: 'iOS', category: 'Platform' },
                { label: 'Cross-Platform Development', category: 'Architecture' },
                { label: 'REST APIs', category: 'Integration' },
                { label: 'Public Sector', category: 'Domain' },
            ],
            year: '2020 - 2021',
            links: [
                { url: 'https://play.google.com/store/apps/details?id=es.zaragoza.volveremos', label: 'Customer App' },
                { url: 'https://play.google.com/store/apps/details?id=es.zaragoza.comerciosvolveremos', label: 'Merchant App' }
            ],
        }
    },
    {
        id: 4,
        colSpan: 2,
        card: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis Responder',
            subtitle: 'Founder · Civic Tech',
            description: 'Built a civic-tech Android application during Venezuela’s 2014 medication shortage crisis, helping users locate available medicines through crowdsourced pharmacy inventory data and OCR/barcode-based drug identification.',
            metrics: [
                '800+ Pharmacy Locations Mapped',
                'OCR + Barcode Drug Identification',
                'Project Later Acquired by a Pharmacy Retail Company',
            ],
        },
        modal: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis Responder',
            subtitle: 'Founder · Civic Tech',
            hook: 'Designed and developed a civic-tech Android app during Venezuela’s medication shortage crisis to help citizens locate available medicines in real time.',
            context: [
                'Developed as a university graduation project during the 2014 healthcare crisis in Venezuela.',
                'Users needed a faster way to locate pharmacies with available medication stock.',
                'Most target devices were low-end Android phones with unstable connectivity.',
            ],
            challenge: 'Building a lightweight Android application capable of identifying medications and sharing pharmacy inventory availability under unreliable connectivity conditions.',
            approach: [
                'Developed the entire application independently using Java and MVC architecture.',
                'Integrated OCR-based medication recognition for text identification from packaging.',
                'Implemented barcode scanning using ZXing as an alternative identification flow.',
                'Built a crowdsourced pharmacy inventory system backed by Firebase Realtime Database.',
                'Optimized the application for low-end Android devices and intermittent network conditions.',
            ],
            metrics: [
                '800+ pharmacy locations mapped across multiple countries.',
                'OCR and barcode-based medication identification implemented.',
                'Project later acquired by a pharmacy retail company.',
            ],
            tags: [
                { label: 'Java', category: 'Language' },
                { label: 'MVC', category: 'Architecture' },
                { label: 'OCR', category: 'Feature' },
                { label: 'ZXing', category: 'Feature' },
                { label: 'Firebase Realtime DB', category: 'Data' },
                { label: 'Offline Support', category: 'Architecture' },
                { label: 'Civic Tech', category: 'Domain' },
            ],
            year: '2014',
            links: [],
        }
    },
    {
        id: 5,
        colSpan: 2,
        card: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Android Kiosk Experience',
            description: 'Designed and developed a custom Android kiosk experience for pediatric waiting rooms, restricting device access through a custom launcher and controlled kiosk mode configuration.',
            metrics: [
                'Custom Android Launcher',
                'Boot Persistence with BOOT_COMPLETED',
                'Educational Games for Pediatric Waiting Rooms',
            ],
        },
        modal: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Android Kiosk Engineer',
            hook: 'Built a controlled Android kiosk environment for pediatric waiting rooms, focused on accessibility, parental control and uninterrupted gameplay.',
            context: [
                'Developed for physical tablets deployed inside clinical laboratory waiting rooms.',
                'Required a controlled environment preventing children from leaving the application ecosystem.',
                'Needed automatic recovery and persistence after device reboot.',
            ],
            challenge: 'Creating a stable Android kiosk experience capable of restricting device access while maintaining a seamless experience for children.',
            approach: [
                'Implemented a custom Android launcher replacing the default HOME experience.',
                'Added boot persistence using BOOT_COMPLETED to automatically restore the kiosk environment after reboot.',
                'Configured kiosk restrictions to prevent unauthorized access to external applications and system navigation.',
                'Developed educational mini-games fully using the native Android framework.',
            ],
            metrics: [
                'Custom launcher deployed on laboratory tablets.',
                'Automatic kiosk restoration after reboot implemented successfully.',
                'Educational game ecosystem designed for pediatric environments.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Android Launcher', category: 'System' },
                { label: 'Kiosk Mode', category: 'Architecture' },
                { label: 'BOOT_COMPLETED', category: 'System' },
                { label: 'Parental Control', category: 'Feature' },
                { label: 'Game Development', category: 'Feature' },
            ],
            year: '2021',
            links: [
                { url: 'https://memoria-s8k0.andro.io/', label: 'Super Memoria' },
                { url: 'https://play.google.com/store/apps/details?id=com.Keycore.supercientifico&hl=es', label: 'Super Científico' }
            ],
        }
    },
    {
        id: 2,
        colSpan: 2,
        card: {
            icon: <Navigation size={22} />,
            title: 'Honda (Wind River)',
            subtitle: 'Android Automotive Systems',
            description: 'Contributed to Android-based automotive infotainment systems within the Wind River team for Honda, focusing on bug fixing, multimedia stability and driver-facing user experience improvements.',
        },
        modal: {
            icon: <Navigation size={22} />,
            title: 'Honda (Wind River)',
            subtitle: 'Android Automotive Engineer',
            hook: 'Worked on Android-based infotainment systems for Honda vehicles, helping investigate and resolve complex multimedia and system interaction issues.',
            context: [
                'Embedded within the Wind River engineering team collaborating on Honda automotive infotainment systems.',
                'Worked on legacy Android-based platforms operating under hardware and performance constraints.',
                'Focused on improving multimedia stability and user-facing automotive experiences.',
            ],
            challenge: 'Investigating and fixing edge-case multimedia and notification-related bugs affecting infotainment stability and driver experience.',
            approach: [
                'Collaborated with the automotive engineering team to debug multimedia and notification interaction issues.',
                'Worked on legacy Android systems with tight hardware limitations and performance constraints.',
                'Contributed to reproducing and resolving edge cases triggered by concurrent system events.',
                'Supported stability improvements across infotainment-related user flows.',
            ],
            metrics: [
                'Improved infotainment stability across multimedia interaction scenarios.',
                'Contributed to issue resolution within automotive production environments.',
                'Worked under real-device hardware and system constraints.',
            ],
            tags: [
                { label: 'Android', category: 'Platform' },
                { label: 'Automotive Systems', category: 'Platform' },
                { label: 'Infotainment', category: 'Domain' },
                { label: 'Bug Fixing', category: 'Engineering' },
                { label: 'Performance Optimization', category: 'Engineering' },
            ],
            year: '2019',
            links: [
                { url: 'https://www.android.com/intl/en_ie/auto/compatibility/vehicles/', label: 'Android Auto Compatibility' }
            ],
        }
    },
];

const FeaturedProjects = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section id="projects" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={styles.header}
                >
                    <span style={styles.badge}>Selected Work</span>
                    <h2 style={styles.heading}>Selected Highlights</h2>
                    <p style={styles.subHeading}>Scalable Architectures. Embedded Systems. Critical Solutions.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`project-card span-${project.colSpan || 1}`}
                            style={{ height: '100%' }}
                        >
                            <ProjectCard
                                {...project.card}
                                clickable
                                onReadMore={() => setActiveModal(project.modal)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                data={activeModal}
            />
        </section>
    );
};

const styles = {
    section: {
        padding: '40px 0',
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
    },
};

export default FeaturedProjects;
