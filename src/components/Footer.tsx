'use client';
import Link from 'next/link';
import { company, addresses, contacts } from '../lib/data';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const navCols = [
    {
        title: 'Company',
        links: [
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/leadership', label: 'Our Leadership' },
        ],
    },
    {
        title: 'Capabilities',
        links: [
            { href: '/products', label: 'Products' },
            { href: '/case-studies', label: 'Case Studies' },
            { href: '/about#machines', label: 'Pattern Shop' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__grid">
                {/* Brand col */}
                <div className="footer__brand">
                    <img
                        src="/logo-inverse.svg"
                        alt="Rucha Engineers"
                        className="footer__logo"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <p style={{ marginTop: '0.5rem' }}>{company.tagline}</p>
                    <p style={{ marginTop: '0.5rem' }}>{company.subTagline}</p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                            background: 'var(--white)',
                            border: '1px solid var(--white)',
                            color: 'var(--orange)',
                            fontWeight: 700,
                            borderRadius: '4px',
                            padding: '4px 10px',
                            fontSize: '0.72rem',
                            letterSpacing: '0.08em',
                            fontFamily: 'var(--font-mono)',
                        }}>
                            {company.iso}
                        </span>
                    </div>
                </div>

                {/* Nav cols */}
                {navCols.map((col) => (
                    <div className="footer__col" key={col.title}>
                        <h5>{col.title}</h5>
                        <ul>
                            {col.links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Contact col */}
                <div className="footer__col">
                    <h5>Contact</h5>
                    <div className="footer__contact-item">
                        <span style={{ color: 'var(--orange)', marginTop: '2px' }}><MapPin size={18} /></span>
                        <p>{addresses.work.lines.slice(1).join(' ')}</p>
                    </div>
                    <div className="footer__contact-item">
                        <span style={{ color: 'var(--orange)', marginTop: '2px' }}><Phone size={18} /></span>
                        <p>
                            <a href={`tel:${contacts.technical.phone}`}
                                style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 200ms' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                {contacts.technical.phone}
                            </a>
                        </p>
                    </div>
                    <div className="footer__contact-item">
                        <span style={{ color: 'var(--orange)', marginTop: '2px' }}><Mail size={18} /></span>
                        <p>
                            <a href={`mailto:${contacts.technical.email}`}
                                style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 200ms' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                {contacts.technical.email}
                            </a>
                        </p>
                    </div>
                    <div className="footer__contact-item">
                        <span style={{ color: 'var(--orange)', marginTop: '2px' }}><Globe size={18} /></span>
                        <p>
                            <a href={`https://${company.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 200ms' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                {company.website}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} Rucha Engineers. All rights reserved.</p>
                <p className="footer__gstin">GSTIN: {company.gstin}</p>
            </div>
        </footer>
    );
}