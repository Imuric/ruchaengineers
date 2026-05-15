import Link from 'next/link';
import { Trophy, Package, Box, Settings, Cpu, Factory, Phone } from 'lucide-react';
import ClientMarquee from '../components/ClientMarquee';
import ScrollReveal from '../components/ScrollReveal';
import {
  company,
  coreBusinessItems,
  achievements,
  competitiveAdvantages,
  stats,
  caseStudies,
} from '../lib/data';

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero noise">
        <div className="hero__bg-pattern" />
        <div className="hero__grid-lines" />

        <div className="hero__content">


          <h1 className="hero__title animate-fade-up delay-1">
            Precision <em>Patterns</em> &amp; <em>Castings</em> That Define Industries
          </h1>

          <p className="hero__subtitle animate-fade-up delay-2">
            {company.tagline}<br />
            {company.subTagline}
          </p>

          <div className="hero__actions animate-fade-up delay-3">
            <Link href="/products" className="btn btn-primary">Explore Products</Link>
            <Link href="/case-studies" className="btn btn-ghost">View Case Studies</Link>
          </div>

        </div>

        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          scroll
        </div>
      </section>



      {/* ───── ABOUT TEASER ───── */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <span className="label">Who We Are</span>
              <div className="divider" />
              <h2 className="section-title">
                Pioneers in Thermocol &amp; Wooden Master Patterns
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                {achievements.points[0]}
              </p>
              {achievements.points.slice(1).map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0 }}>{pt}</p>
                </div>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Link href="/about" className="btn btn-outline">Learn More About Us</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'Business Type', value: company.businessType },
                  { label: 'Quality', value: company.iso },
                  { label: 'Working Days', value: company.workingDays },
                  { label: 'Design CAD', value: 'NX CAD – Siemens 2406' },
                  { label: 'Employees', value: company.employees },
                  { label: 'After-Sale Support', value: 'Onsite – Available' },
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

      {/* ───── CORE BUSINESS ───── */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header section-header--center">
              <span className="label">What We Make</span>
              <div className="divider divider--center" />
              <h2 className="section-title">Core Business Areas</h2>
              <p className="section-subtitle">
                Serving foundries, pump manufacturers, and heavy engineering companies across India and USA.
              </p>
            </div>
          </ScrollReveal>

          <div className="features-list">
            {coreBusinessItems.map((item, i) => (
              <ScrollReveal delay={i * 80} key={i}>
                <div className="feature-item">
                  <div className="feature-icon">
                    {(() => {
                      const Icon = [Package, Box, Settings, Cpu, Factory][i % 5];
                      return <Icon size={28} />;
                    })()}
                  </div>
                  <div>
                    <h4>{item}</h4>
                    <p>Manufactured with NX CAD precision & FMEA-aligned tooling design.</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CASE STUDY TEASER ───── */}
      <section className="section" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(232,98,10,0.15) 0%, transparent 70%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div className="section-header">
              <span className="label">Proven Track Record</span>
              <div className="divider" />
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Case Studies &amp; Achievements
              </h2>
              <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Real projects. Real results. Delivered with precision engineering.
              </p>
            </div>
          </ScrollReveal>

          <div className="case-grid" style={{ marginBottom: '2.5rem' }}>
            {caseStudies.slice(0, 4).map((cs, i) => (
              <ScrollReveal delay={i * 100} key={i}>
                <Link href={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="case-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="case-card__num" style={{ color: 'rgba(255,255,255,0.06)' }}>{cs.number}</div>
                    <div className="case-card__title">{`Case Study ${cs.number}`}</div>
                    <h4 style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', fontSize: '1rem' }}>
                      {cs.title}
                    </h4>
                    <p className="case-card__body" style={{ color: 'rgba(255,255,255,0.55)' }}>{cs.body}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/case-studies" className="btn btn-ghost">See All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ───── CLIENT MARQUEE ───── */}
      <ClientMarquee />

      {/* ───── CTA ───── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: 'var(--cream-dark)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(232,98,10,0.06) 0%, transparent 70%)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="label">Ready to start?</span>
                <div className="divider divider--center" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--navy)', marginBottom: '1rem' }}>
                  Let's Build Something Precise Together
                </h2>
                <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                  Contact our Technical Director for custom pattern, die, or casting requirements.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                  <a href="tel:+917720840001" className="btn btn-outline">
                    <Phone size={16} /> +91 77208 40001
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}