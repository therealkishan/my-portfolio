import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaAws, FaShieldAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiHibernate, SiJenkins } from 'react-icons/si';

const About = () => {
    /* Organized Skills Categories */
    const skillCategories = [
        {
            title: 'Backend',
            items: [
                { name: 'Java', icon: <FaJava color="#f89820" /> },
                { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" /> },
                { name: 'Microservices', icon: <FaShieldAlt color="#00f0ff" /> },
                { name: 'REST APIs', icon: <FaJava color="#5382a1" /> }
            ]
        },
        {
            title: 'Data & Cloud',
            items: [
                { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
                { name: 'Hibernate', icon: <SiHibernate color="#b6a978" /> },
                { name: 'AWS', icon: <FaAws color="#ff9900" /> },
                { name: 'Jenkins', icon: <SiJenkins color="#d24939" /> }
            ]
        }
    ];

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-center"><span className="gradient-text">About Me</span></h2>

                <div className="glass-card" style={{ marginBottom: '1rem', background: 'var(--card-bg)' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        I am a high-performance <strong>Backend Java Developer</strong> with over 3 years of experience building scalable APIs and microservices.
                        SPECIALIZING in the financial domain, I engineer core banking solutions that prioritize security, reliability, and speed.
                        I have led complex database migrations, optimized high-volume SQL queries, and implemented banking-grade security protocols.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
