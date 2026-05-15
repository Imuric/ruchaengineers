import type { Metadata } from 'next';
import ScrollReveal from '../../components/ScrollReveal';
import { caseStudies } from '../../lib/data';

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore Rucha Engineers case studies – precision manufacturing achievements across six real-world projects.',
};

export default function CaseStudiesPage() {
    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Proven Results</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">Case Studies &amp; Achievements</h1>
                    <p className="page-hero__sub">
                        Real engineering challenges. Precision-delivered solutions. Zero compromises.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="label">Pattern Shop</span>
                            <div className="divider" />
                            <h2 className="section-title">Our Case Studies</h2>
                            <p className="section-subtitle">
                                Each case study highlights our commitment to precision, speed, and quality craftsmanship.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {caseStudies.map((cs, i) => (
                            <ScrollReveal delay={i * 80} key={i}>
                                <div 
                                    className="case-study-row"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: i % 2 === 0 ? 'auto 1fr' : '1fr auto',
                                        gap: '2rem',
                                        background: 'var(--white)',
                                        borderRadius: 'var(--radius-xl)',
                                        border: '1px solid var(--border)',
                                        overflow: 'hidden',
                                        transition: 'box-shadow 350ms var(--ease-smooth)',
                                    }}
                                >
                                    {/* Number block */}
                                    <div style={{
                                        background: i % 2 === 0 ? 'var(--navy)' : 'var(--orange)',
                                        padding: '2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minWidth: '160px',
                                        order: i % 2 === 0 ? 0 : 1,
                                    }}>
                                        <span style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.15em',
                                            color: i % 2 === 0 ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.7)',
                                            textTransform: 'uppercase',
                                            marginBottom: '0.5rem',
                                        }}>
                                            Case Study
                                        </span>
                                        <span style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '2.75rem',
                                            fontWeight: 700,
                                            color: 'white',
                                            lineHeight: 1,
                                        }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Content block */}
                                    <div style={{ padding: '2.5rem', order: i % 2 === 0 ? 1 : 0 }}>
                                        <div className="label" style={{ marginBottom: '0.5rem' }}>
                                            Case Study {cs.number}
                                        </div>
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                            color: 'var(--navy)',
                                            marginBottom: '1rem',
                                            fontWeight: 600,
                                        }}>
                                            {cs.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '560px', margin: 0 }}>
                                            {cs.body}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--alt">
                <div className="container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <span className="label">Have a project?</span>
                        <div className="divider divider--center" />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--navy)', marginBottom: '1rem' }}>
                            Let's Make Your Project a Case Study
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem' }}>
                            Reach out to discuss your pattern, die, or casting requirements. We deliver precision with speed.
                        </p>
                        <a href="/contact" className="btn btn-primary">Start a Project</a>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}