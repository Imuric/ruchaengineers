'use client';
import { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { addresses, contacts, company } from '../../lib/data';
import { Phone, Briefcase, MapPin, Clock, Globe, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

/*
 * TODO (Future Enhancement): Country-code phone input with flags & auto-formatting
 * Packages needed:
 *   npm install react-phone-number-input libphonenumber-js
 * Key files to restore:
 *   - imports: PhoneInput, isValidPhoneNumber, getCountryCallingCode (react-phone-number-input)
 *              getExampleNumber, examples (libphonenumber-js)
 *              flags (react-phone-number-input/flags)
 *   - state:   phoneCountry, isDropdownOpen, dropdownRef
 *   - logic:   CountrySelect component with SVG flags + phonePlaceholder generator
 *   - jsx:     <PhoneInput countrySelectComponent={CountrySelect} limitMaxLength={true} ... />
 */

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', company: '', email: '', phone: '', subject: '', message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        let processedValue = value;
        // Auto-capitalize first letter of every word for First Name and Last Name
        if (name === 'firstName' || name === 'lastName') {
            processedValue = value.replace(/\b\w/g, char => char.toUpperCase());
        }

        // Phone: only allow digits and the '+' symbol
        if (name === 'phone') {
            processedValue = value.replace(/[^\d+]/g, '');
        }

        setForm(prev => ({ ...prev, [name]: processedValue }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Sanitization: Trim all inputs
        const sanitizedForm = {
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            company: form.company.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            subject: form.subject,
            message: form.message.trim(),
        };

        // 2. Validation: Required fields
        if (!sanitizedForm.firstName || !sanitizedForm.lastName || !sanitizedForm.email || !sanitizedForm.phone || !sanitizedForm.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // 3. Validation: Strict Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sanitizedForm.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // 4. Validation: Phone — allow digits, spaces, +, -, (), min 7 digits
        const digitsOnly = sanitizedForm.phone.replace(/\D/g, '');
        if (!/^[0-9+\-\s()]*$/.test(sanitizedForm.phone) || digitsOnly.length < 7) {
            alert('Please enter a valid phone number (minimum 7 digits).');
            return;
        }

        setStatus('sending');
        // Replace with Formspree / EmailJS / Next.js API route
        await new Promise(r => setTimeout(r, 1400));
        setStatus('sent');
    };

    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Get in Touch</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">Contact Us</h1>
                    <p className="page-hero__sub">
                        Reach out for custom patterns, dies, castings, or any technical inquiry. Our team responds within 24 hours.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info panel */}
                        <ScrollReveal>
                            <div className="contact-info-block">
                                <h3>Let's Talk</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.9375rem' }}>
                                    Contact our Technical Director directly for project inquiries, or use the form to send us a message.
                                </p>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon"><Phone size={24} /></div>
                                    <div className="contact-info-text">
                                        <h4>Technical Director</h4>
                                        <p>{contacts.technical.name}</p>
                                        <p><a href={`tel:${contacts.technical.phone}`} style={{ color: 'var(--orange)' }}>{contacts.technical.phone}</a></p>
                                        <p><a href={`mailto:${contacts.technical.email}`} style={{ color: 'rgba(255,255,255,0.55)' }}>{contacts.technical.email}</a></p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon"><Briefcase size={24} /></div>
                                    <div className="contact-info-text">
                                        <h4>Accounts Director</h4>
                                        <p>{contacts.accounts.name}</p>
                                        <p><a href={`tel:${contacts.accounts.phone}`} style={{ color: 'var(--orange)' }}>{contacts.accounts.phone}</a></p>
                                        <p><a href={`mailto:${contacts.accounts.email}`} style={{ color: 'rgba(255,255,255,0.55)' }}>{contacts.accounts.email}</a></p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon"><MapPin size={24} /></div>
                                    <div className="contact-info-text">
                                        <h4>Work Address</h4>
                                        {addresses.work.lines.map((l, i) => (
                                            <p key={i}>{l}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon"><Clock size={24} /></div>
                                    <div className="contact-info-text">
                                        <h4>Working Hours</h4>
                                        <p>Tuesday – Sunday · 02 Shifts</p>
                                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>Weekly off: Monday</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon"><Globe size={24} /></div>
                                    <div className="contact-info-text">
                                        <h4>Website</h4>
                                        <p>
                                            <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer"
                                                style={{ color: 'var(--orange)' }}>
                                                {company.website}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Form */}
                        <ScrollReveal delay={150}>
                            <div className="contact-form">
                                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', marginBottom: '0.5rem' }}>
                                    Send a Message
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
                                    Fields marked <span style={{ color: 'var(--orange)' }}>*</span> are required.
                                </p>

                                {status === 'sent' ? (
                                    <div style={{
                                        background: 'var(--orange-pale)',
                                        border: '1px solid rgba(232,98,10,0.3)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '2rem',
                                        textAlign: 'center',
                                    }}>
                                        <span style={{ display: 'block', marginBottom: '1rem', color: 'var(--orange)' }}><CheckCircle size={48} /></span>
                                        <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Message Sent!</h4>
                                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                                            Thank you, {form.firstName} {form.lastName}. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {/* Row 1: First Name + Last Name */}
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>First Name <span style={{ color: 'var(--orange)' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name <span style={{ color: 'var(--orange)' }}>*</span></label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2: Email + Company */}
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Email <span style={{ color: 'var(--orange)' }}>*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="your@email.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Your company name"
                                                    value={form.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3: Phone (full width) */}
                                        <div className="form-group">
                                            <label>Phone <span style={{ color: 'var(--orange)' }}>*</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 XXXXX XXXXX"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Subject</label>
                                            <select name="subject" value={form.subject} onChange={handleChange}>
                                                <option value="">Select enquiry type</option>
                                                <option>Thermocol Pattern Enquiry</option>
                                                <option>Wooden Master Pattern Enquiry</option>
                                                <option>Aluminium Pattern &amp; Die Enquiry</option>
                                                <option>CI / SG Iron Casting Enquiry</option>
                                                <option>General Enquiry</option>
                                                <option>Quote Request</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Message <span style={{ color: 'var(--orange)' }}>*</span></label>
                                            <textarea
                                                name="message"
                                                placeholder="Describe your requirement – dimensions, material, quantity, deadline..."
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                                            disabled={status === 'sending'}
                                        >
                                            {status === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={18} /></>}
                                        </button>

                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                                            To integrate with a real backend, replace the submit handler with Formspree, EmailJS, or a Next.js API route.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="section section--alt">
                <div className="container">
                    <ScrollReveal>
                        <div style={{
                            width: '100%',
                            height: '600px',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            background: 'var(--cream)',
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.28373448178!2d74.26903589999999!3d16.7625535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1013d4257e471%3A0x4b99a351e947dad5!2sRucha%20Engineers%20shiroli%20midc!5e0!3m2!1sen!2sin!4v1778848496607!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}