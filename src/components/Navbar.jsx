import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // ScrollSpy Logic
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 // Trigger when 40% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const getLinkStyle = (sectionId) => ({
        ...styles.link,
        color: activeSection === sectionId ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: activeSection === sectionId ? '600' : '500',
    });

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    ...styles.nav,
                    background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                }}
            >
                <div className="container" style={styles.container}>
                    <a href="#" style={styles.logo}>EZ.</a>

                    {/* Desktop Links */}
                    <ul style={styles.desktopLinks} className="desktop-only">
                        <li>
                            <a href="#about" style={getLinkStyle('about')}>About</a>
                        </li>
                        <li>
                            <a href="#projects" style={getLinkStyle('projects')}>Work</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                style={{
                                    ...styles.cta,
                                    background: activeSection === 'contact' ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.1)',
                                    color: activeSection === 'contact' ? 'var(--bg-primary)' : 'var(--text-primary)'
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button style={styles.mobileToggle} onClick={toggleMenu} className="mobile-only">
                        {isMobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={styles.mobileMenu}
                        className="mobile-only"
                    >
                        <ul style={styles.mobileLinks}>
                            <li>
                                <a href="#about" onClick={toggleMenu} style={getLinkStyle('about')}>About</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={toggleMenu} style={getLinkStyle('projects')}>Work</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={toggleMenu} style={{ color: activeSection === 'contact' ? 'var(--accent-color)' : 'var(--text-primary)' }}>Contact</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
        </>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 0',
        zIndex: 100,
        transition: 'background 0.3s, border 0.3s, backdrop-filter 0.3s',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-1px',
    },
    desktopLinks: {
        display: 'flex',
        gap: '32px',
        listStyle: 'none',
        alignItems: 'center',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'color 0.2s',
    },
    cta: {
        color: 'var(--text-primary)',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '8px 16px',
        borderRadius: '20px',
        transition: 'background 0.2s',
        fontSize: '14px',
        fontWeight: '500',
    },
    mobileToggle: {
        padding: '8px',
    },
    mobileMenu: {
        position: 'fixed',
        top: '80px', // Below nav
        left: 0,
        right: 0,
        background: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '32px',
        borderBottom: '1px solid var(--border-subtle)',
        zIndex: 99,
    },
    mobileLinks: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '600',
    }
};

export default Navbar;
