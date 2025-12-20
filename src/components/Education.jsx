import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy, FaDownload } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            title: 'MCA - Master of Computer Applications',
            institution: 'KIIT University, Bhubaneswar',
            period: '2021 – 2023',
            score: 'CGPA: 8.36 / 10.0',
            icon: <FaGraduationCap />
        },
        {
            title: 'BCA - Bachelor of Computer Applications',
            institution: 'G.J College Rambhag Bihta, Patna',
            period: '2018 – 2021',
            score: 'Percentage: 73.6%',
            icon: <FaGraduationCap />
        }
    ];

    const highlights = [
        {
            title: 'Employee of the Quarter (2024)',
            desc: 'Recognized for outstanding contribution to project delivery at FSS.',
            icon: <FaTrophy style={{ color: '#FFD700' }} />
        },
        {
            title: 'Spring Boot & Microservices',
            desc: 'Udemy Certification',
            icon: <FaCertificate />
        },
        {
            title: 'SQL Advanced',
            desc: 'HackerRank Certification',
            icon: <FaCertificate />
        }
    ];

    return (
        <section className="section container" id="education">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-center" style={{ marginBottom: '4rem' }}>
                    <span className="gradient-text">Education & Highlights</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                    {/* Education Box */}
                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -5 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <FaGraduationCap style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)' }}>Education</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {education.map((edu, index) => (
                                <div key={index} style={{ borderLeft: '2px solid var(--accent-secondary)', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{edu.title}</h4>
                                    <p style={{ color: 'var(--accent-color)', margin: '0.3rem 0', fontWeight: '500' }}>{edu.institution}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        <span>{edu.period}</span>
                                        <span>{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Box */}
                    <motion.div
                        className="glass-card"
                        whileHover={{ y: -5 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <FaTrophy style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }} />
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)' }}>Achievements</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {highlights.map((item, index) => (
                                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'start', paddingBottom: '1rem', borderBottom: index !== highlights.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                    <div style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginTop: '0.2rem' }}>{item.icon}</div>
                                    <div>
                                        <h5 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{item.title}</h5>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Education;
