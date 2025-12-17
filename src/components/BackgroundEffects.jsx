import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div style={styles.container}>
            {/* Orb 1: Blue (Intelligence/System) - Top Right */}
            <motion.div
                style={{ ...styles.orb, ...styles.orbBlue }}
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.2, 0.15]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 2: Purple (Creativity) - Bottom Left Area */}
            <motion.div
                style={{ ...styles.orb, ...styles.orbPurple }}
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Orb 3: Green/Teal (Status) - Mid Right/Center */}
            <motion.div
                style={{ ...styles.orb, ...styles.orbTeal }}
                animate={{
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Grid Overlay */}
            <div style={styles.grid}></div>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
    },
    orb: {
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 1,
    },
    orbBlue: {
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(10, 132, 255, 1) 0%, rgba(0,0,0,0) 70%)',
    },
    orbPurple: {
        bottom: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(191, 90, 242, 1) 0%, rgba(0,0,0,0) 70%)',
    },
    orbTeal: {
        top: '40%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(48, 209, 88, 1) 0%, rgba(0,0,0,0) 70%)',
        opacity: 0.1,
    },
    grid: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 2,
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)',
    }
};

export default BackgroundEffects;
