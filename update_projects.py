import re

with open('/Users/ezanella/Documents/GitHub/portfolio-2025/src/components/FeaturedProjects.jsx', 'r') as f:
    content = f.read()

new_projects = """const projects = [
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
            subtitle: 'Technical Lead & Mentorship',
            description: 'Leading technical delivery and architecture for the Carrefour App in Spain. Empowering and mentoring a squad of 3 engineers, establishing rigorous code quality standards, and enforcing TDD practices to ensure a highly scalable and stable platform.',
            role: 'Technical Lead — defining architecture, reviewing PRs, and driving quality standards across the Android squad.',
            challenge: 'Migrating a legacy codebase to MVI + Jetpack Compose while maintaining a live app serving 13M users without regressions.',
            metrics: ['13M Active Users', 'Architected MVI Delivery Pipeline', 'Mentoring 3 engineers (Junior → Mid)'],
            tags: ['MVI Architecture', 'Jetpack Compose', 'Quality Engineering', 'Team Leadership', 'Kotlin', 'CI/CD'],
            link: null,
            linkLabel: 'View on Play Store',
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
            subtitle: 'Global Retail App & Technical Leadership',
            description: 'Spearheaded critical architectural integrations for the global Zara app (+50M downloads). Mentored 4 engineers and led the technical implementation of the WeChat ecosystem. Established Clean Architecture patterns that improved code maintainability and team velocity across distributed squads.',
            role: 'Senior Android Engineer & Tech Lead — responsible for the WeChat integration, Clean Architecture migration, and mentoring a squad of 4 engineers.',
            challenge: 'Integrating the full Chinese OAuth ecosystem (WeChat Pay & Login) into a global codebase while respecting both PRC compliance requirements and Inditex security standards.',
            metrics: ['+12.6M Active Users (22M Daily Traffic)', '+1.9M Global Transactions', '90% Test Coverage on new architecture'],
            tags: ['Kotlin', 'Clean Architecture', 'WeChat SDK', 'LiveTracking', 'CI/CD', 'Git Flow'],
            link: null,
            linkLabel: 'View on Play Store',
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
            subtitle: 'Clinical Gamification & Kiosk Ecosystem',
            description: 'Architected a secure, custom Android Kiosk ecosystem for Amadita Clinical Laboratory (Dominican Republic). Engineered a robust "Game Manager" that auto-launches on boot, overriding system navigation to prevent unauthorized exit, ensuring a safe, controlled environment for pediatric waiting rooms.',
            role: 'Sole Android Architect & Developer — end-to-end design, build and deployment on physical kiosk hardware.',
            challenge: 'Implementing a tamper-proof kiosk using Android\\'s Lock Task API with a secret-key exit protocol, while ensuring the Game Manager survives forced reboots and hardware manufacturer overlays.',
            metrics: [
                'Hardware Lockdown: Secret-key exit protocols',
                'SuperMemory: 3 game worlds & local leaderboards',
                'SuperScientist: 400+ adaptive trivia questions',
            ],
            tags: ['Kiosk Mode', 'Lock Task API', 'Custom Launcher', 'Local DB', 'Kotlin', 'AAOS'],
            link: null,
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
            subtitle: 'Automotive Embedded Systems',
            description: 'Embedded Software Engineer within the Wind River (Honda Motor) team, specializing in automotive digital dashboard systems. Architected new core functionalities and maintained safety-compliant infotainment middleware, ensuring high reliability and real-time performance across Honda\\'s vehicle fleet.',
            role: 'Embedded Android Engineer — middleware development for AAOS-based infotainment systems.',
            challenge: 'Ensuring deterministic real-time behavior and safety-compliance (ISO 26262 awareness) in a JNI bridge layer between the native C++ vehicle HAL and the Android application framework.',
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
        },
        modal: {
            icon: <Map size={22} />,
            title: 'Janis (Logistic)',
            subtitle: 'Intelligent Supply Chain',
            description: 'Architected and delivered a high-efficiency logistics application from scratch as an independent Technical Lead. Defined the entire technical stack, solved complex routing challenges with custom internal maps, and implemented robust offline data synchronization.',
            role: 'Sole Technical Lead & Android Developer — full ownership from architecture design to delivery.',
            challenge: 'Building a fully offline-first routing system with real-time sync, using custom map overlays to handle delivery zones not covered by standard Google Maps routes.',
            tags: ['Google Maps SDK', 'Offline-First', 'Real-time Sync', 'Kotlin', 'Room DB'],
            link: null,
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
            title: 'HealthCrisis Responder (VZLA)',
            subtitle: 'Social Impact & Civic Tech',
            description: 'Engineered a civic-tech platform to combat the severe 2014 medication shortage in Venezuela. Integrated Optical Character Recognition (OCR) and Barcode scanning for rapid drug identification, mapping real-time pharmacy inventory levels to guide users to life-saving supplies across the country.',
            role: 'Founder & Sole Developer — designed, built, and launched the entire platform independently.',
            challenge: 'Implementing reliable OCR-based drug identification on low-end Android hardware common in Venezuela, with intermittent connectivity and a real-time crowd-sourced inventory backend.',
            metrics: ['10,000+ crowd-sourced pharmacies mapped', 'Used by citizens during peak supply crisis'],
            tags: ['OCR', 'Barcode Scanning', 'Real-time Mapping', 'Firebase', 'Crisis Tech'],
            link: null,
        }
    },
];"""

new_content = re.sub(r'const projects = \[.*?\];', new_projects, content, flags=re.DOTALL)

with open('/Users/ezanella/Documents/GitHub/portfolio-2025/src/components/FeaturedProjects.jsx', 'w') as f:
    f.write(new_content)
