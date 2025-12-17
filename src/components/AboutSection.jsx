import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Layers } from 'lucide-react';

const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
        }
    };

    const techListVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.5 }
        }
    };

    const techTagVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 200 }
        }
    };

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Left Column: Narrative */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="about-content"
                >
                    <motion.h2 variants={itemVariants}>
                        More Than Just Code. <br />
                        <span className="text-gradient">Engineering Systems.</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="about-text">
                        My engineering journey is defined by versatility and impact. From <strong>founding and exiting GeoHealth</strong> to architecting the mobile backbone of <strong>Inditex (ZARA)</strong> for over 12.6 million users. I don't just write code; I build viable, high-scale businesses.
                    </motion.p>

                    <motion.p variants={itemVariants} className="about-text">
                        As a <strong>Senior System Engineer</strong>, I bridge the gap between complex embedded hardware and fluid, intuitive user interfaces. I specialize in <strong>Jetpack Compose</strong>, <strong>clean architecture</strong>, and high-performance native solutions that just work.
                    </motion.p>

                    <motion.p variants={itemVariants} className="about-text">
                        I thrive on complexity. Whether it's integrating <strong>Chinese OAuth ecosystems (WeChat)</strong>, managing <strong>embedded Android kiosk modes</strong> for Honda, or optimizing real-time critical systems, I deliver engineering excellence.
                    </motion.p>

                    <motion.div variants={techListVariants} className="tech-stack">
                        {['Kotlin', 'Jetpack Compose', 'Clean Arch', 'CI/CD', 'Google APIs', 'Java'].map((tech) => (
                            <motion.span
                                key={tech}
                                variants={techTagVariants}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                className="tech-tag"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual Stats / Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="about-grid"
                >
                    <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bento-card card-large">
                        <div className="photo-placeholder">
                            {/* Replace src with your actual photo URL */}
                            <img src="./profile.jpg" alt="Emilsys Zanella" className="profile-photo" />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bento-card">
                        <Smartphone size={32} color="#BF5AF2" />
                        <h3 className="card-title">Native</h3>
                        <p className="card-text">100% Fluid mobile performance.</p>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bento-card">
                        <Code size={32} color="#30D158" />
                        <h3 className="card-title">Clean Code</h3>
                        <p className="card-text">Scalable & maintainable arch.</p>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bento-card card-wide">
                        <h3 className="stat-number" style={{ marginBottom: 0 }}>+12.6</h3>
                        <h3 className="stat-number" style={{ fontSize: '0.96em' }}>Millions Users Impacted.</h3>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
