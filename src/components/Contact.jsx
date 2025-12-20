import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const [copiedField, setCopiedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:kishan.backend@gamil.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const CopyButton = ({ text, field }) => (
        <button
            onClick={() => copyToClipboard(text, field)}
            style={{
                background: 'transparent',
                border: 'none',
                color: copiedField === field ? '#4ade80' : 'var(--accent-color)',
                cursor: 'pointer',
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                transition: '0.3s'
            }}
            title="Copy to clipboard"
        >
            {copiedField === field ? <FaCheck /> : <FaCopy />}
        </button>
    );

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-center"><span className="gradient-text">Contact Me</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Contact Info */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '2rem', color: 'var(--accent-color)' }}>Get In Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Phone</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ color: 'var(--text-secondary)' }}>+91 7272925420</p>
                                        <CopyButton text="+917272925420" field="phone1" />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ color: 'var(--text-secondary)' }}>+91 6204595281</p>
                                        <CopyButton text="+916204595281" field="phone2" />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Email</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ color: 'var(--text-secondary)' }}>kishan.backend@gamil.com</p>
                                        <CopyButton text="kishan.backend@gamil.com" field="email" />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Location</p>
                                    <p style={{ color: 'var(--text-secondary)' }}>Chennai / Hybrid</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>Send a Message</h3>

                        <div className="name-mobile-grid">
                            <input
                                type="text" name="name" placeholder="Name" required
                                onChange={handleChange}
                                style={{ padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-color)', borderRadius: '8px' }}
                            />
                            <input
                                type="number" name="mobile" placeholder="Mobile" required
                                onChange={handleChange}
                                style={{ padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-color)', borderRadius: '8px' }}
                            />
                        </div>

                        <input
                            type="email" name="email" placeholder="Email" required
                            onChange={handleChange}
                            style={{ padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-color)', borderRadius: '8px' }}
                        />

                        <input
                            type="text" name="subject" placeholder="Subject" required
                            onChange={handleChange}
                            style={{ padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-color)', borderRadius: '8px' }}
                        />

                        <textarea
                            name="message" cols="30" rows="5" placeholder="Your Message" required
                            onChange={handleChange}
                            style={{ padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-color)', borderRadius: '8px', resize: 'none' }}
                        ></textarea>

                        <button
                            type="submit"
                            style={{ padding: '1rem', background: 'var(--accent-color)', color: '#000', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', border: 'none', 'marginTop': '1rem' }}
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </motion.div>
            <style>{`
                .name-mobile-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                @media (max-width: 768px) {
                    .name-mobile-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
