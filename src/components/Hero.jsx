import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* Background Glow - Purple/Violet tint like reference */}
            <div style={{
                position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)',
                width: '500px', height: '500px', background: 'var(--accent-secondary)',
                borderRadius: '50%', filter: 'blur(180px)', opacity: 0.1, zIndex: -1
            }}></div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '2rem', height: '100%', maxWidth: '1200px' }}>

                {/* Left: Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'left', zIndex: 1 }}
                >
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '0.2rem', fontWeight: '700', color: 'var(--text-color)' }}>Hi, I am</h3>
                    <h1 className="gradient-text" style={{
                        fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                        lineHeight: '1.1',
                        fontWeight: '800'
                    }}>
                        Kishan pandey
                    </h1>

                    <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Backend Developer', 'Java Specialist', 'API Architect', 'Cloud Enthusiast']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>

                    <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.15rem', maxWidth: '600px' }}>
                        I have a proven track record of delivering high-quality solutions, developing new features, and optimizing performance in the financial domain.
                        My expertise lies in building robust backend systems using <strong>Java, Spring Boot, and Microservices</strong>.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <motion.a
                            href="/kishan_resume_update.pdf"
                            download="kishan_resume_update.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 3rem',
                                background: 'var(--accent-color)', // Sky Blue button
                                color: '#0F172A', // Navy text for contrast
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                boxShadow: '0 4px 14px 0 rgba(56, 189, 248, 0.39)', // Soft blue shadow
                                display: 'inline-block',
                                border: 'none',
                                textDecoration: 'none'
                            }}
                        >
                            Check Resume
                        </motion.a>

                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="https://github.com/therealkishan" target="_blank" rel="noreferrer" style={{ fontSize: '2rem', color: 'var(--text-color)', transition: '0.3s' }} className="social-icon"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/kishan-pandey-75b328287/" target="_blank" rel="noreferrer" style={{ fontSize: '2rem', color: 'var(--text-color)', transition: '0.3s' }} className="social-icon"><FaLinkedin /></a>
                            <a href="mailto:kishan.backend@gamil.com" style={{ fontSize: '2rem', color: 'var(--text-color)', transition: '0.3s' }} className="social-icon"><FaEnvelope /></a>
                        </div>
                    </div>

                    <style>{`
                        .social-icon:hover { color: var(--accent-secondary) !important; transform: translateY(-3px); }
                    `}</style>
                </motion.div>

                {/* Right: Profile Picture (Circle) */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} gyroscope={true} trackOnWindow={true}>
                        {/* Circle Background Geometry */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '450px', height: '450px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            zIndex: -1
                        }}></div>

                        <motion.div
                            className="profile-container"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                width: '400px', height: '400px',
                                borderRadius: '50%',
                                border: '3px solid var(--accent-color)', // Sky Blue Border
                                padding: '15px',
                                boxShadow: '0 0 50px rgba(56, 189, 248, 0.2)', // Soft blue glow
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(5px)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img src="/profile.jpg" alt="Profile"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Kishan+Pandey&background=0ef&color=000&size=256'; }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }}
                            />
                        </motion.div>
                    </Tilt>
                </div>
            </div>

            {/* Mobile Responsive Style */}
            <style>{`
                @media (max-width: 968px) {
                    .container {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        padding-top: 2rem;
                    }
                    .container > div:first-child {
                        order: 2 !important;
                        align-items: center !important; 
                        display: flex;
                        flex-direction: column;
                    }
                     .container > div:first-child > div {
                        justify-content: center;
                    }
                    .container > div:last-child {
                        order: 1 !important;
                        margin-bottom: 2rem;
                    }
                    h1 { font-size: 3rem !important; }
                    /* Make profile image smaller on mobile */
                    .profile-container {
                        width: 280px !important;
                        height: 280px !important;
                    }
                }
            `}</style>
        </section >
    );
};

export default Hero;
