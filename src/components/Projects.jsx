import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bankingImg from '../assets/banking.svg';
import modulesImg from '../assets/modules.svg';
import securityImg from '../assets/security.svg';

const Projects = () => {
    const projects = [
        {
            title: 'Bank CRUD Application',
            desc: 'A Spring Boot application for managing bank accounts with full Create, Read, Update, Delete functionality. Implemented secure REST APIs to handle customer data.',
            tech: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST API'],
            img: bankingImg,
            github: 'https://github.com/therealkishan/bank-repository-app'
        },
        {
            title: 'Core Banking Modules',
            desc: 'Developed critical modules like Nominee Registration, Fund Transfer, and ASBA. Optimized SQL queries for high-volume transactions.',
            tech: ['Java', 'Spring MVC', 'Oracle', 'JSP'],
            img: modulesImg
        },
        {
            title: 'Security Implementation',
            desc: 'Implemented AES payload encryption and secure request signing to meet compliance standards. Integrated CSRF protection and App Attestation.',
            tech: ['Java', 'Security', 'AES', 'Cryptography'],
            img: securityImg
        }
    ];

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-center"><span className="gradient-text">Featured Projects</span></h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        style={{ height: '100%' }}
                    >
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} style={{ height: '100%' }}>
                            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <img src={project.img} alt={project.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'auto', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.desc}</p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.85rem',
                                                padding: '0.3rem 0.6rem',
                                                borderRadius: '4px',
                                                fontWeight: '500',

                                                /* Using CSS Variables */
                                                background: 'var(--tag-bg)',
                                                color: 'var(--tag-text)',
                                                border: '1px solid var(--tag-border)'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.3rem', color: 'var(--text-color)' }}>
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
