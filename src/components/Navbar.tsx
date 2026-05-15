'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, contacts } from '../lib/data';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [pathname]);

    return (
        <>
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, height: '36px',
                background: 'var(--orange)', color: 'var(--white)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem',
                fontSize: '0.75rem', fontFamily: 'var(--font-mono)', zIndex: 101,
                letterSpacing: '0.04em'
            }}>
                <span>GSTIN: {company.gstin}</span>
                <span>Email: {contacts.technical.email}</span>
            </div>
            <nav className={`nav ${scrolled ? 'nav--scrolled' : 'nav--transparent'}`} style={{ top: '36px' }}>
                <div className="nav__inner">
                    {/* Logo */}
                    <Link href="/" className="nav__logo">
                        <img
                            src={scrolled ? "/logo.svg" : "/logo-inverse.svg"}
                            alt="Rucha Engineers"
                            className="nav__logo-img"
                            onError={(e) => {
                                const t = e.target as HTMLImageElement;
                                t.style.display = 'none';
                            }}
                        />
                    </Link>

                    {/* Desktop links */}
                    <ul className="nav__links">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={pathname === href ? 'active' : ''}
                                    style={{ color: scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.85)' }}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="nav__cta">
                        <Link href="/contact" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.4rem' }}>
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="nav__hamburger"
                        aria-label="Toggle navigation"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ color: scrolled ? 'var(--navy)' : 'white' }}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <nav className={`nav__mobile ${mobileOpen ? 'open' : ''}`} style={{ top: '108px' }}>
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href}>
                        {label}
                    </Link>
                ))}
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Get a Quote
                </Link>
            </nav>
        </>
    );
}