import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            role: 'Software Engineer',
            company: 'Financial Software & Systems (P) Ltd',
            period: 'Feb 2023 - Present',
            desc: [
                'Designed Core Banking modules (Fund Transfer, ASBA, Nominee Mgmt).',
                'Led Oracle to MySQL migration, optimizing queries by 40%.',
                'Implemented AES encryption and Google Play Integrity.',
                'Reduced production incidents via root cause analysis & Jenkins pipelines.'
            ]
        },
        {
            role: 'Software Engineer Trainee',
            company: 'Financial Software & Systems (P) Ltd',
            period: 'Feb 2023 - Aug 2023',
            desc: [
                'Built secure REST APIs compliant with banking regulations.',
                'Resolved real-time transaction failures.',
                'Patched mobile banking vulnerabilities.'
            ]
        }
    ];

    return (
        <section className="section container">
            <h2 className="text-center"><span className="gradient-text">Experience</span></h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: '3rem'
            }}>
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="glass-card"
                    >
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '0.5rem' }}>{job.role}</h3>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            {job.company} <br />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{job.period}</span>
                        </h4>

                        <ul style={{ paddingLeft: '1rem' }}>
                            {job.desc.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', listStyle: 'disc', fontSize: '0.95rem' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
