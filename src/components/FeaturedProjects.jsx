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
        colSpan: 3,
        card: {
            icon: <ShoppingCart size={22} />,
            title: 'Carrefour Spain',
            subtitle: 'Technical Lead & Mentorship',
            description: 'Leading technical delivery and architecture for the Carrefour App in Spain. Empowering and mentoring a squad of 3 engineers, establishing rigorous code quality standards, and enforcing TDD practices to ensure a highly scalable and stable platform.',
            metrics: ['13M Active Users', 'Architected MVI Delivery Pipeline', 'Mentoring 3 engineers (Junior → Mid)'],
            tags: ['MVI Architecture', 'Jetpack Compose', 'Quality Engineering', 'Team Leadership'],
        },
        modal: {
            icon: <ShoppingCart size={22} />,
            title: 'Carrefour Spain',
            subtitle: 'Technical Lead & Mentorship',
            description: 'Leading technical delivery and architecture for the Carrefour App in Spain. Empowering and mentoring a squad of 3 engineers, establishing rigorous code quality standards, and enforcing TDD practices to ensure a highly scalable and stable platform.',
            role: 'Technical Lead — defining architecture, reviewing PRs, and driving quality standards across the Android squad.', // TODO: refine
            challenge: 'Migrating a legacy codebase to MVI + Jetpack Compose while maintaining a live app serving 13M users without regressions.', // TODO: refine
            metrics: ['13M Active Users', 'Architected MVI Delivery Pipeline', 'Mentoring 3 engineers (Junior → Mid)'],
            tags: ['MVI Architecture', 'Jetpack Compose', 'Quality Engineering', 'Team Leadership', 'Kotlin', 'CI/CD'],
            link: null, // TODO: add Play Store link if desired
            linkLabel: 'View on Play Store',
        }
    },
    {
        id: 1,
        colSpan: 3,
        card: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Global Retail App & Technical Leadership',
            description: 'Spearheaded critical architectural integrations for the global Zara app (+50M downloads). Mentored 4 engineers and led the technical implementation of the WeChat ecosystem. Established Clean Architecture patterns that improved code maintainability and team velocity.',
            metrics: ['+12M Active Users (22M Daily Traffic)', '+1.9M Global Transactions', '90% Test Coverage on new architecture'],
            tags: ['Kotlin', 'Clean Architecture', 'WeChat SDK', 'LiveTracking'],
        },
        modal: {
            icon: <ShoppingBag size={22} />,
            title: 'Inditex (ZARA)',
            subtitle: 'Global Retail App & Technical Leadership',
            description: 'Spearheaded critical architectural integrations for the global Zara app (+50M downloads). Mentored 4 engineers and led the technical implementation of the WeChat ecosystem. Established Clean Architecture patterns that improved code maintainability and team velocity across distributed squads.',
            role: 'Senior Android Engineer & Tech Lead — responsible for the WeChat integration, Clean Architecture migration, and mentoring a squad of 4 engineers.', // TODO: refine
            challenge: 'Integrating the full Chinese OAuth ecosystem (WeChat Pay & Login) into a global codebase while respecting both PRC compliance requirements and Inditex security standards.', // TODO: refine
            metrics: ['+12M Active Users (22M Daily Traffic)', '+1.9M Global Transactions', '90% Test Coverage on new architecture'],
            tags: ['Kotlin', 'Clean Architecture', 'WeChat SDK', 'LiveTracking', 'CI/CD', 'Git Flow'],
            link: null, // TODO: add Play Store link
            linkLabel: 'View on Play Store',
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
            tags: ['Android Automotive', 'AOSP', 'Safety Critical', 'JNI'],
        },
        modal: {
            icon: <Navigation size={22} />,
            title: 'Honda (Wind River)',
            subtitle: 'Automotive Embedded Systems',
            description: 'Embedded Software Engineer within the Wind River (Honda Motor) team, specializing in automotive digital dashboard systems. Architected new core functionalities and maintained safety-compliant infotainment middleware, ensuring high reliability and real-time performance across Honda\'s vehicle fleet.',
            role: 'Embedded Android Engineer — middleware development for AAOS-based infotainment systems.', // TODO: refine
            challenge: 'Ensuring deterministic real-time behavior and safety-compliance (ISO 26262 awareness) in a JNI bridge layer between the native C++ vehicle HAL and the Android application framework.', // TODO: refine
            tags: ['Android Automotive OS', 'AOSP', 'Safety Critical', 'JNI', 'C++', 'HAL'],
            link: null,
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
            tags: ['Google Maps SDK', 'Offline-First', 'Real-time Sync'],
        },
        modal: {
            icon: <Map size={22} />,
            title: 'Janis (Logistic)',
            subtitle: 'Intelligent Supply Chain',
            description: 'Architected and delivered a high-efficiency logistics application from scratch as an independent Technical Lead. Defined the entire technical stack, solved complex routing challenges with custom internal maps, and implemented robust offline data synchronization.',
            role: 'Sole Technical Lead & Android Developer — full ownership from architecture design to delivery.', // TODO: refine
            challenge: 'Building a fully offline-first routing system with real-time sync, using custom map overlays to handle delivery zones not covered by standard Google Maps routes.', // TODO: refine
            tags: ['Google Maps SDK', 'Offline-First', 'Real-time Sync', 'Kotlin', 'Room DB'],
            link: null,
        }
    },
    {
        id: 4,
        colSpan: 2,
        card: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis Responder (VZLA)',
            subtitle: 'Social Impact & Civic Tech',
            description: 'Engineered a civic-tech platform to combat the severe 2014 medication shortage in Venezuela. Integrated OCR and Barcode scanning for rapid drug identification, mapping real-time pharmacy inventory levels to guide users to life-saving supplies.',
            tags: ['OCR & Barcode', 'Real-time Mapping', 'Inventory Sync', 'Crisis Tech'],
        },
        modal: {
            icon: <Activity size={22} />,
            title: 'HealthCrisis Responder (VZLA)',
            subtitle: 'Social Impact & Civic Tech',
            description: 'Engineered a civic-tech platform to combat the severe 2014 medication shortage in Venezuela. Integrated Optical Character Recognition (OCR) and Barcode scanning for rapid drug identification, mapping real-time pharmacy inventory levels to guide users to life-saving supplies across the country.',
            role: 'Founder & Sole Developer — designed, built, and launched the entire platform independently.', // TODO: refine
            challenge: 'Implementing reliable OCR-based drug identification on low-end Android hardware common in Venezuela, with intermittent connectivity and a real-time crowd-sourced inventory backend.', // TODO: refine
            metrics: [], // TODO: add user count if available
            tags: ['OCR', 'Barcode Scanning', 'Real-time Mapping', 'Firebase', 'Crisis Tech'],
            link: null,
        }
    },
    {
        id: 5,
        colSpan: 6,
        card: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Clinical Gamification & Kiosk Ecosystem',
            description: 'Architected a secure, custom Android Kiosk ecosystem for Amadita Clinical Laboratory (Dominican Republic). Engineered a robust Game Manager that auto-launches on boot, overriding system navigation to prevent unauthorized exit, ensuring a safe, controlled environment for pediatric waiting rooms.',
            metrics: [
                'Hardware Lockdown: Custom launcher with secret-key exit protocols.',
                'SuperMemory: Dynamic memory engine with 3 worlds and local DB leaderboards.',
                'SuperScientist: Adaptive trivia system with 400+ randomized questions and accessibility modes.',
            ],
            tags: ['Kiosk Mode', 'Lock Task API', 'Custom Launcher', 'Local DB'],
        },
        modal: {
            icon: <Gamepad2 size={22} />,
            title: 'Amadita Games',
            subtitle: 'Clinical Gamification & Kiosk Ecosystem',
            description: 'Architected a secure, custom Android Kiosk ecosystem for Amadita Clinical Laboratory (Dominican Republic). Engineered a robust "Game Manager" that auto-launches on boot, overriding system navigation to prevent unauthorized exit, ensuring a safe, controlled environment for pediatric waiting rooms.',
            role: 'Sole Android Architect & Developer — end-to-end design, build and deployment on physical kiosk hardware.', // TODO: refine
            challenge: 'Implementing a tamper-proof kiosk using Android\'s Lock Task API with a secret-key exit protocol, while ensuring the Game Manager survives forced reboots and hardware manufacturer overlays.', // TODO: refine
            metrics: [
                'Hardware Lockdown: Custom launcher with secret-key exit protocols.',
                'SuperMemory: Dynamic memory engine with 3 worlds and local DB leaderboards.',
                'SuperScientist: 400+ randomized questions with auditory & visual accessibility modes.',
            ],
            tags: ['Kiosk Mode', 'Lock Task API', 'Custom Launcher', 'Local DB', 'Kotlin', 'AAOS'],
            link: null,
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
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className={`project-card span-${project.colSpan || 1}`}
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
