import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaAws, FaLinux, FaGitAlt, FaLock, FaNetworkWired } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiMysql, SiOracle, SiHibernate, SiJenkins, SiDocker, SiAnsible, SiPostman, SiJira } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Core & Frameworks',
            skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring IOC', 'Microservices', 'REST API Design', 'Hibernate', 'Spring Data JPA', 'JMS', 'XML']
        },
        {
            title: 'DevOps & Cloud',
            skills: ['AWS (EC2, S3)', 'Jenkins', 'Ansible', 'CI/CD Pipelines', 'Docker', 'Maven', 'Git', 'Bitbucket']
        },
        {
            title: 'Frontend',
            skills: ['Thymeleaf', 'JSP', 'JSTL', 'HTML', 'CSS', 'JavaScript', 'jQuery']
        },
        {
            title: 'Database',
            skills: ['Oracle', 'MySQL', 'H2 Database']
        },
        {
            title: 'Security',
            skills: ['AES Encryption', 'Hashing', 'Auth & Authorization', 'Secure Coding Practices']
        },
        {
            title: 'Tools & Platform',
            skills: ['Linux (Log Analysis)', 'Windows', 'Swagger/OpenAPI', 'Postman', 'Jira', 'HTTP/DNS/TCP-IP']
        }
    ];

    return (
        <section className="section container" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Technical Skills</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Technologies and tools I work with</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            whileHover={{ y: -5 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            <h3 style={{
                                fontSize: '1.4rem',
                                color: 'var(--accent-color)',
                                fontWeight: '600',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '1rem'
                            }}>
                                {category.title}
                            </h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            background: 'rgba(56, 189, 248, 0.1)',
                                            color: 'var(--text-color)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            border: '1px solid rgba(56, 189, 248, 0.2)',
                                            transition: '0.3s'
                                        }}
                                        className="skill-tag"
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--accent-color)';
                                            e.target.style.color = '#000';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(56, 189, 248, 0.1)';
                                            e.target.style.color = 'var(--text-color)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
