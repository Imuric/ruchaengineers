import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Trophy } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import {
    company,
    coreBusinessItems,
    achievements,
    competitiveAdvantages,
    machines,
    addresses,
} from '../../lib/data';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Rucha Engineers – pioneer pattern shop in Kolhapur, India since 2016.',
};

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Est. {company.established}</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">About Rucha Engineers</h1>
                    <p className="page-hero__sub">
                        {company.tagline} {company.subTagline}
                    </p>
                </div>
            </div>

            {/* Company Overview */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <ScrollReveal>
                            <span className="label">Who We Are</span>
                            <div className="divider" />
                            <h2 className="section-title">
                                {achievements.pioneersTitle}
                            </h2>
                            {achievements.points.map((pt, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.875rem' }}>
                                    <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                                    <p style={{ margin: 0 }}>{pt}</p>
                                </div>
                            ))}
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <div className="about-facts">
                                {[
                                    { label: 'Founded', value: `${company.established} – Rucha Engineers [Pattern Shop]` },
                                    { label: 'Business Type', value: company.businessType },
                                    { label: 'Quality System', value: company.iso },
                                    { label: 'Quality Testing', value: 'Yes' },
                                    { label: 'Custom Packaging', value: 'Yes' },
                                    { label: 'After-Sale Support', value: 'Onsite – Yes' },
                                    { label: 'Working Days', value: company.workingDays },
                                    { label: 'Shifts', value: company.shifts },
                                    { label: 'Weekly Off', value: company.weeklyOff },
                                    { label: 'Employees', value: company.employees },
                                    { label: 'Shipment Mode', value: company.shipment.join(', ') },
                                    { label: 'Design CAD', value: company.designFacility[1] },
                                ].map((f, i) => (
                                    <div className="about-fact" key={i}>
                                        <div className="about-fact__key">{f.label}</div>
                                        <div className="about-fact__value">{f.value}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Business + Advantages */}
            <section className="section section--alt">
                <div className="container">
                    <div className="about-grid">
                        <ScrollReveal>
                            <span className="label">Core Business</span>
                            <div className="divider" />
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>What We Manufacture</h2>
                            {coreBusinessItems.map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '0.75rem 0',
                                    borderBottom: i < coreBusinessItems.length - 1 ? '1px solid var(--border)' : 'none',
                                }}>
                                    <span style={{
                                        width: '32px', height: '32px',
                                        borderRadius: '50%',
                                        background: 'var(--orange-pale)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        color: 'var(--orange)',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-mono)',
                                        flexShrink: 0,
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span style={{ fontWeight: 500, color: 'var(--navy)', fontSize: '0.9375rem' }}>{item}</span>
                                </div>
                            ))}
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <span className="label">Competitive Edge</span>
                            <div className="divider" />
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Primary Competitive Advantage</h2>
                            {competitiveAdvantages.map((adv, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '12px', marginBottom: '1rem',
                                    background: 'var(--cream)', borderRadius: 'var(--radius-md)',
                                    padding: '1rem', border: '1px solid var(--border)',
                                }}>
                                    <span style={{ color: 'var(--orange)', fontSize: '1.25rem', marginTop: '1px' }}><Check size={20} /></span>
                                    <p style={{ margin: 0, color: 'var(--navy)', fontWeight: 500 }}>{adv}</p>
                                </div>
                            ))}

                            {/* Award */}
                            <div className="award-badge" style={{ marginTop: '1.5rem' }}>
                                <span className="award-badge__icon"><Trophy size={28} /></span>
                                <div className="award-badge__text">
                                    <h4>{achievements.award}</h4>
                                    <p>{achievements.awardDesc}</p>
                                </div>
                            </div>

                            {/* Design facility */}
                            <div style={{
                                marginTop: '1.5rem',
                                background: 'var(--navy)',
                                borderRadius: 'var(--radius-md)',
                                padding: '1.25rem',
                                color: 'white',
                            }}>
                                <div className="label" style={{ marginBottom: '0.5rem' }}>Design Facility</div>
                                {company.designFacility.map((df, i) => (
                                    <p key={i} style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0', fontSize: '0.875rem' }}>
                                        → {df}
                                    </p>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Machines */}
            <section className="section" id="machines">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="label">Pattern Shop</span>
                            <div className="divider" />
                            <h2 className="section-title">Machines &amp; Make</h2>
                            <p className="section-subtitle">
                                State-of-the-art equipment enabling precision manufacturing at scale.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px,1fr))', gap: '1rem' }}>
                        {machines.map((m, i) => (
                            <ScrollReveal delay={i * 80} key={i}>
                                <div className="machine-card">
                                    <div className="machine-card__icon"><m.icon size={24} /></div>
                                    <div>
                                        <div className="machine-card__make">{m.make}</div>
                                        <div className="machine-card__name">{m.name}</div>
                                        <ul className="machine-card__specs">
                                            {m.specs.map((s, j) => (
                                                <li key={j}>{s}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Addresses */}
            <section className="section section--alt">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header section-header--center">
                            <span className="label">Find Us</span>
                            <div className="divider divider--center" />
                            <h2 className="section-title">Our Locations</h2>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                        {[addresses.registered, addresses.work].map((addr, i) => (
                            <ScrollReveal delay={i * 120} key={i}>
                                <div style={{
                                    background: 'var(--navy)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: '2rem',
                                    color: 'white',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%',
                                }}>
                                    <div style={{
                                        position: 'absolute', bottom: '-40px', right: '-40px',
                                        width: '160px', height: '160px',
                                        background: 'radial-gradient(circle, rgba(232,98,10,0.2) 0%, transparent 70%)',
                                    }} />
                                    <div className="label" style={{ marginBottom: '1rem' }}>{addr.label}</div>
                                    {addr.lines.map((line, j) => (
                                        <p key={j} style={{
                                            color: j === 0 ? 'white' : 'rgba(255,255,255,0.65)',
                                            fontWeight: j === 0 ? 600 : 400,
                                            margin: '3px 0',
                                            fontSize: '0.9375rem',
                                        }}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}