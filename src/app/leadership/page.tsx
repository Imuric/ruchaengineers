import type { Metadata } from 'next';
import ScrollReveal from '../../components/ScrollReveal';
import { UserRound, Target, Microscope, ShieldCheck, TrendingUp } from 'lucide-react';
import { leadership, contacts } from '../../lib/data';

export const metadata: Metadata = {
    title: 'Leadership',
    description: 'Meet the leadership team at Rucha Engineers – Mr. Umesh Kadam and Mrs. Rupali Kadam.',
};

export default function LeadershipPage() {
    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">The People Behind the Precision</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">Our Leadership</h1>
                    <p className="page-hero__sub">
                        Guided by 25+ years of expertise in patterns &amp; dies, the Rucha Engineers leadership team combines deep technical knowledge with operational excellence.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="leadership-grid">
                        {leadership.map((person, i) => {
                            const contact = i === 0 ? contacts.technical : contacts.accounts;
                            return (
                                <ScrollReveal delay={i * 150} key={i}>
                                    <div className="leader-card">
                                        <div className="leader-card__header">
                                            <div className="leader-card__avatar" style={{ overflow: 'hidden' }}>
                                                <img 
                                                    src={`https://i.pravatar.cc/150?u=${encodeURIComponent(person.name)}`} 
                                                    alt={person.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="leader-card__name-block">
                                                <div className="leader-card__name">{person.name}</div>
                                                <div className="leader-card__role">{person.role}</div>
                                            </div>
                                        </div>

                                        <div className="leader-card__body">
                                            <div className="leader-detail">
                                                <span className="leader-detail__label">Experience</span>
                                                <span className="leader-detail__value">{person.experience}</span>
                                            </div>
                                            <div className="leader-detail">
                                                <span className="leader-detail__label">Expertise</span>
                                                <span className="leader-detail__value">
                                                    {person.expertise.join(' · ')}
                                                </span>
                                            </div>
                                            {person.keyAchievements.length > 0 && (
                                                <div className="leader-detail">
                                                    <span className="leader-detail__label">Awards</span>
                                                    <span className="leader-detail__value" style={{ color: 'var(--orange)', fontWeight: 500 }}>
                                                        {person.keyAchievements[0]}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="leader-detail">
                                                <span className="leader-detail__label">Contact</span>
                                                <span className="leader-detail__value">
                                                    <a href={`tel:${contact.phone}`} style={{ color: 'var(--navy)', display: 'block' }}>
                                                        {contact.phone}
                                                    </a>
                                                    <a href={`mailto:${contact.email}`} style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                                        {contact.email}
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Values block */}
                    <ScrollReveal delay={300}>
                        <div style={{
                            marginTop: '2rem',
                            background: 'var(--navy)',
                            borderRadius: 'var(--radius-xl)',
                            padding: '3rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                            gap: '2rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                position: 'absolute', top: '-80px', right: '-80px',
                                width: '300px', height: '300px',
                                background: 'radial-gradient(circle, rgba(232,98,10,0.15) 0%, transparent 70%)',
                            }} />
                            {[
                                { icon: <Target size={28} />, title: 'Right-First-Time', desc: 'Committed to delivering precision from the very first attempt.' },
                                { icon: <Microscope size={28} />, title: 'FMEA-Aligned Design', desc: 'Tooling designed in compliance with FMEA standards for casting industries.' },
                                { icon: <ShieldCheck size={28} />, title: 'Zero Rejection', desc: 'Extended post-tooling support to ensure zero rejection in production.' },
                                { icon: <TrendingUp size={28} />, title: 'Continuous Value', desc: 'A work culture driven by ongoing improvement and value addition.' },
                            ].map((v, i) => (
                                <div key={i} style={{ position: 'relative', zIndex: 1 }}>
                                    <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem' }}>{v.icon}</span>
                                    <h4 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{v.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', margin: 0 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}