import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(links.find(link => link.id === id).name);
        setIsOpen(false);
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, width: '100%',
            background: scrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            zIndex: 1000,
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            padding: '1rem 0',
            transition: '0.3s'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a onClick={() => scrollToSection('home')} style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--accent-color)', textDecoration: 'none', cursor: 'pointer' }}>
                    Kishan
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                color: activeLink === link.name ? 'var(--accent-color)' : 'var(--text-color)',
                                fontWeight: '500',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {link.name}
                            {activeLink === link.name && (
                                <motion.div
                                    layoutId="underline"
                                    style={{
                                        position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px',
                                        background: 'var(--accent-color)', borderRadius: '2px'
                                    }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Right Side: LinkedIn & Theme Toggle & Mobile Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <a
                        href="https://www.linkedin.com/in/kishan-pandey-75b328287/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: '0.6rem 1.8rem',
                            border: '1px solid var(--accent-secondary)',
                            borderRadius: '30px',
                            color: 'var(--text-color)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: '0.3s',
                            background: 'rgba(56, 189, 248, 0.05)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-secondary)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.05)'; e.currentTarget.style.color = 'var(--text-color)'; }}
                        className="linkedin-btn"
                    >
                        LinkedIn Profile
                    </a>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-color)',
                            cursor: 'pointer',
                            fontSize: '1.4rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: '0.3s'
                        }}
                        title="Toggle Theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <div className="mobile-toggle" onClick={toggleMenu} style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-color)' }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            overflow: 'hidden',
                            background: 'var(--glass-bg)',
                            borderBottom: '1px solid var(--glass-border)',
                            zIndex: 999,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    >
                        <ul style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            scrollToSection(link.id);
                                        }}
                                        style={{
                                            fontSize: '1.2rem',
                                            color: activeLink === link.name ? 'var(--accent-color)' : 'var(--text-color)',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-menu { display: none !important; }
                    .linkedin-btn { display: none !important; }
                }
                @media (min-width: 1025px) {
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
