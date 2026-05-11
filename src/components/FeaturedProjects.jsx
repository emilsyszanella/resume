import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Navigation, Map, Activity, Stethoscope, Gamepad2, ShoppingCart } from 'lucide-react';
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
            subtitle: 'Technical Lead & Mentorship',
            description: 'Leading technical delivery and architecture for the Carrefour App in Spain. Empowering and mentoring a squad of 3 engineers, establishing rigorous code quality standards, and enforcing TDD practices to ensure a highly scalable and stable platform.',
            metrics: ['13M Active Users', 'Architected MVI Delivery Pipeline', 'Mentoring 3 engineers (Junior → Mid)'],
        },
        modal: {
            icon: <ShoppingCart size={22} />,
            title: 'Carrefour Spain',
            subtitle: 'Technical Lead · Android Architecture',
            hook: 'Took technical ownership of the Carrefour Spain Android app — serving 13M users — driving a full architectural migration without a single production regression.',
            context: [
                'App serving 13M active users in Spain, with critical stability expectations and zero tolerance for downtime.',
                'Inherited a legacy codebase with no architectural standards, inconsistent patterns and no test coverage.',
                'Squad of 3 engineers at junior-to-mid level, requiring both technical and professional mentorship.',
            ],
            challenge: 'Migrating a live, high-traffic production codebase from legacy patterns to MVI + Jetpack Compose while maintaining release cadence and upskilling the team simultaneously.',
            approach: [
                'Defined an incremental migration strategy — feature-by-feature, not big bang — to isolate risk and keep CI green at every stage.',
                'Introduced TDD as a mandatory engineering standard, starting with the most critical user flows (cart, checkout, authentication).',
                'Established a PR review culture with documented architectural decisions (ADRs), so every team member understood the "why" behind each change.',
                'Personally mentored 3 engineers from junior to mid-level, holding weekly 1:1s focused on architecture thinking, not just code.',
                'Defined and enforced code quality gates through static analysis (Detekt) and automated coverage thresholds in CI.',
            ],
            metrics: [
                '13M active users served without a single architecture-related regression during the migration.',
                'MVI + Compose pipeline fully architected and delivered across all new features.',
                '3 engineers leveled up from Junior to Mid within the engagement.',
                'PR merge cycle reduced by ~30% after introducing structured review standards.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Jetpack Compose', category: 'UI' },
                { label: 'MVI Architecture', category: 'Architecture' },
                { label: 'Clean Architecture', category: 'Architecture' },
                { label: 'TDD', category: 'Engineering' },
                { label: 'Detekt', category: 'Engineering' },
                { label: 'CI/CD', category: 'DevOps' },
                { label: 'Tech Mentorship', category: 'Leadership' },
            ],
            year: '2023 - Present',
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.carrefour.espana', label: 'Play Store' },
                { url: 'https://apps.apple.com/es/app/carrefour-espa%C3%B1a/id585238053', label: 'App Store' }
            ],
        }
    },
    {
        id: 1,
        colSpan: 2,
        card: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Global Retail App & Technical Leadership',
            description: 'Spearheaded critical architectural integrations for the global Zara app (+50M downloads). Mentored 4 engineers and led the technical implementation of the WeChat ecosystem. Established Clean Architecture patterns that improved code maintainability and team velocity.',
            metrics: ['+12.6M Active Users (22M Daily Traffic)', '+1.9M Global Transactions', '90% Test Coverage on new architecture'],
        },
        modal: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Senior Android Engineer · Tech Lead',
            hook: 'Served as the key technical reference for the global Zara Android app — 12.6M active users, 22M daily traffic — leading critical integrations that opened the Chinese market.',
            context: [
                'Global retail app with +50M downloads, operating under strict Inditex security and compliance policies.',
                'Strategic mandate to integrate the full WeChat ecosystem (Login + Pay) to unlock the Chinese market — a first for the app.',
                'Distributed engineering squads across multiple offices, requiring strong technical alignment and documentation.',
            ],
            challenge: 'Integrating a full Chinese OAuth and payments ecosystem (WeChat Pay & Login) into a single global codebase, navigating PRC regulatory requirements, Inditex security standards, and a heterogeneous legacy architecture — all without breaking existing markets.',
            approach: [
                'Led the full technical design of the WeChat integration — from SDK evaluation to state management and security sandboxing.',
                'Enforced Clean Architecture adoption across new modules, establishing the pattern as the team standard going forward.',
                'Created the architectural documentation and integration specs that enabled parallel development across 4 engineers.',
                'Introduced mandatory test coverage thresholds for all new architecture layers, reaching 90% on new modules.',
                'Mentored 4 engineers on architecture thinking, giving them ownership of specific modules to accelerate velocity.',
            ],
            metrics: [
                '+12.6M active users supported (22M daily traffic events) without degradation.',
                '+1.9M global transactions processed through the newly integrated payment flows.',
                '90% test coverage achieved on all newly architected modules.',
                'WeChat ecosystem delivered on schedule, enabling commercial operations in China.',
                '4 engineers mentored to full architectural ownership of their respective domains.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Clean Architecture', category: 'Architecture' },
                { label: 'WeChat SDK', category: 'Integration' },
                { label: 'OAuth 2.0', category: 'Integration' },
                { label: 'LiveTracking', category: 'Feature' },
                { label: 'Git Flow', category: 'DevOps' },
                { label: 'CI/CD', category: 'DevOps' },
                { label: 'Tech Leadership', category: 'Leadership' },
            ],
            year: '2019 - 2022',
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.inditex.zara', label: 'Play Store' }
            ],
        }
    },
    {
        id: 5,
        colSpan: 2,
        card: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Clinical Gamification & Kiosk Ecosystem',
            description: 'Architected a secure, custom Android Kiosk ecosystem for Amadita Clinical Laboratory (Dominican Republic). Engineered a robust "Game Manager" that auto-launches on boot, overriding system navigation to prevent unauthorized exit, ensuring a safe, controlled environment for pediatric waiting rooms.',
            metrics: [
                'Hardware Lockdown: Secret-key exit protocols',
                'SuperMemory: 3 game worlds & local leaderboards',
                'SuperScientist: 400+ adaptive trivia questions',
            ],
        },
        modal: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Sole Android Architect · Kiosk Engineering',
            hook: 'Designed and deployed a tamper-proof Android kiosk ecosystem from scratch for a clinical laboratory — turning pediatric waiting rooms into safe, engaging learning environments.',
            context: [
                'Amadita Clinical Laboratory (Dominican Republic) needed a way to reduce anxiety for children during medical visits.',
                'Required a locked, controlled environment on physical tablet kiosks — no exits, no unauthorized access.',
                'Zero prior infrastructure; needed to be architected, built and deployed entirely from scratch on physical hardware.',
            ],
            challenge: 'Building a fully tamper-proof kiosk system using Android\'s Lock Task API that auto-boots, resists hardware manufacturer overlay overrides, and provides a seamless game experience — all while keeping the exit secured behind a secret key sequence.',
            approach: [
                'Architected a "Game Manager" as a custom Android launcher — the device boots directly into the ecosystem, bypassing the standard OS home screen.',
                'Implemented Lock Task Mode via Android Device Policy Manager, with a custom secret-key exit sequence invisible to end users.',
                'Designed SuperMemory: a dynamic memory game engine with 3 progressive worlds and a local Room DB-backed leaderboard.',
                'Designed SuperScientist: an adaptive trivia engine with 400+ randomized questions, difficulty levels and accessibility modes for different age groups.',
                'Deployed and tested on physical kiosk hardware, handling reboot resilience, manufacturer overlay conflicts and edge cases in lock-task behavior.',
            ],
            metrics: [
                'Hardware lockdown: 100% tamper-proof — 0 unauthorized exits reported post-deployment.',
                'SuperMemory deployed with 3 game worlds and persistent leaderboards via local Room DB.',
                'SuperScientist running 400+ adaptive trivia questions with randomized delivery and accessibility modes.',
                'Deployed on physical kiosk hardware across Amadita clinical locations in Dominican Republic.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Kiosk Mode', category: 'Architecture' },
                { label: 'Lock Task API', category: 'Architecture' },
                { label: 'Custom Launcher', category: 'Architecture' },
                { label: 'Room DB', category: 'Data' },
                { label: 'Device Policy Manager', category: 'System' },
                { label: 'Game Engine Design', category: 'Feature' },
            ],
            year: '2021',
            links: [],
        }
    },
    {
        id: 2,
        colSpan: 2,
        card: {
            icon: <Navigation size={22} />,
            title: 'Honda (Wind River)',
            subtitle: 'Automotive Embedded Systems',
            description: 'Embedded Software Engineer within the Wind River (Honda Motor) team, specializing in automotive digital dashboard systems. Architected new core functionalities and maintained safety-compliant infotainment middleware.',
        },
        modal: {
            icon: <Navigation size={22} />,
            title: 'Honda (Wind River)',
            subtitle: 'Embedded Android Engineer · AAOS Middleware',
            hook: 'Worked at the intersection of Android and automotive hardware — engineering middleware for Honda\'s digital dashboards, where performance and safety-compliance are non-negotiable.',
            context: [
                'Embedded in the Wind River engineering team, contracted to Honda Motor for AAOS-based (Android Automotive OS) digital dashboard systems.',
                'Safety-critical environment with ISO 26262 awareness — any middleware defect could directly affect driver experience and vehicle safety.',
                'Required deep expertise in the JNI bridge between native C++ vehicle HAL and the Android application layer.',
            ],
            challenge: 'Ensuring deterministic, real-time behavior in a JNI bridge layer connecting the native C++ vehicle HAL with the Android application framework — in an environment where unpredictable latency is unacceptable.',
            approach: [
                'Developed and maintained core middleware components for the AAOS-based infotainment layer, ensuring strict integration with the vehicle HAL.',
                'Architected new dashboard features with real-time performance constraints, validating against latency budgets defined by the automotive team.',
                'Applied ISO 26262 awareness principles to all contributions, ensuring traceability and defensive coding patterns in safety-adjacent code paths.',
                'Collaborated with firmware engineers on the JNI interface contract — defining stable, version-safe boundaries between the C++ HAL and Android layers.',
            ],
            metrics: [
                'New dashboard functionalities delivered on schedule for Honda vehicle integration cycle.',
                'Zero safety-critical regressions introduced across the engagement.',
                'JNI bridge maintained at defined latency budgets for real-time dashboard responsiveness.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'C++', category: 'Language' },
                { label: 'Android Automotive OS', category: 'Platform' },
                { label: 'AOSP', category: 'Platform' },
                { label: 'JNI', category: 'System' },
                { label: 'HAL', category: 'System' },
                { label: 'ISO 26262 Awareness', category: 'Standards' },
                { label: 'Safety-Critical', category: 'Standards' },
            ],
            year: '2022',
            links: [],
        }
    },
    {
        id: 3,
        colSpan: 2,
        card: {
            icon: <Map size={22} />,
            title: 'Janis (Logistic)',
            subtitle: 'Intelligent Supply Chain',
            description: 'Architected and delivered a high-efficiency logistics application from scratch as an independent Technical Lead. Defined the entire technical stack, solved complex routing challenges with custom internal maps, and implemented robust offline data synchronization.',
        },
        modal: {
            icon: <Map size={22} />,
            title: 'Janis (Logistic)',
            subtitle: 'Sole Technical Lead · Android Architect',
            hook: 'Took full technical ownership of a logistics platform from zero — defining the architecture, solving routing problems standard mapping SDKs couldn\'t handle, and shipping a production-ready offline-first app.',
            context: [
                'Logistics startup requiring a custom Android app to coordinate supply chain operations across delivery zones.',
                'Standard Google Maps routes were insufficient — internal delivery zones had custom paths not covered by public map data.',
                'Connectivity was unreliable in the field; the app needed to work fully offline and sync when reconnected.',
            ],
            challenge: 'Building a reliable offline-first routing system with real-time sync that could handle delivery zones outside the coverage of standard Google Maps SDK — using custom map overlays engineered from scratch.',
            approach: [
                'Defined the entire technical architecture independently — from data persistence strategy to sync conflict resolution patterns.',
                'Engineered custom map overlay layers on top of Google Maps SDK to represent internal logistics zones with precision.',
                'Designed an offline-first data layer using Room DB with a robust conflict resolution sync protocol for reconnection scenarios.',
                'Implemented real-time route tracking with background service resilience — app continued tracking even when backgrounded by the OS.',
                'Delivered the platform end-to-end, from architecture documentation to production deployment.',
            ],
            metrics: [
                'Full logistics platform delivered from zero to production as a sole Technical Lead.',
                'Custom map overlay system covering 100% of internal delivery zones not served by Google Maps.',
                'Offline-first architecture enabling full operation in connectivity-dead zones with zero data loss on sync.',
            ],
            tags: [
                { label: 'Kotlin', category: 'Language' },
                { label: 'Google Maps SDK', category: 'Integration' },
                { label: 'Custom Map Overlays', category: 'Integration' },
                { label: 'Room DB', category: 'Data' },
                { label: 'Offline-First', category: 'Architecture' },
                { label: 'Real-time Sync', category: 'Architecture' },
                { label: 'Background Services', category: 'System' },
            ],
            year: '2021',
            links: [
                { url: 'https://example.com/janis.apk', label: 'Download APK' }
            ],
        }
    },
    {
        id: 4,
        colSpan: 2,
        card: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis (VZLA)',
            subtitle: 'Social Impact & Civic Tech',
            description: 'Engineered a civic-tech platform to combat the severe 2014 medication shortage in Venezuela. Integrated Optical Character Recognition (OCR) and Barcode scanning for rapid drug identification, mapping real-time pharmacy inventory levels to guide users to life-saving supplies.',
        },
        modal: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis Responder',
            subtitle: 'Founder · Civic Tech · Social Impact',
            hook: 'Built and launched a civic-tech app during Venezuela\'s 2014 health crisis — because walking into every pharmacy in the city wasn\'t an option. The app was later acquired by a national pharmacy chain.',
            context: [
                'Venezuela, 2014: severe medication shortage crisis with pharmacies running out of critical drugs daily.',
                'No reliable system existed to help citizens know which pharmacies had specific medications in stock.',
                'Most users were on low-end Android devices with intermittent connectivity — standard solutions wouldn\'t work.',
            ],
            challenge: 'Implementing reliable OCR-based drug identification on low-end Android hardware with intermittent connectivity, while building a real-time crowd-sourced inventory backend that stayed accurate under crisis-level usage.',
            approach: [
                'Designed and built the entire platform independently — from concept and architecture to launch and user acquisition.',
                'Integrated OCR (Optical Character Recognition) for rapid text-based drug identification from packaging, optimized for low-end hardware performance.',
                'Added Barcode scanning as a complementary identification method, reducing reliance on OCR where barcodes were available.',
                'Built a crowd-sourced pharmacy inventory system backed by Firebase real-time database — users reported stock levels, creating a living map of availability.',
                'Optimized the app for low-end devices and intermittent connectivity, including offline caching of last-known inventory states.',
            ],
            metrics: [
                '10,000+ pharmacies mapped through crowd-sourced inventory contributions.',
                'Used actively by citizens across Venezuela during the peak of the medication supply crisis.',
                'App acquired by a national pharmacy chain — recognized as a high-value civic infrastructure.',
            ],
            tags: [
                { label: 'Kotlin / Java', category: 'Language' },
                { label: 'OCR', category: 'Feature' },
                { label: 'Barcode Scanning', category: 'Feature' },
                { label: 'Firebase Realtime DB', category: 'Data' },
                { label: 'Google Maps SDK', category: 'Integration' },
                { label: 'Offline Caching', category: 'Architecture' },
                { label: 'Civic Tech', category: 'Domain' },
            ],
            year: '2014',
            links: [],
        }
    },
];

// ---------------------------------------------------------------------------
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
