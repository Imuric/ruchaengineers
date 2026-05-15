import { customers } from '../lib/data';

export default function ClientMarquee() {
    // Duplicate for infinite scroll
    const items = [...customers, ...customers];

    return (
        <section className="marquee-section">
            <div className="marquee-label">
                <span className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Our Esteemed Clients
                </span>
            </div>
            <div className="marquee-track" aria-hidden="true">
                <div className="marquee-inner">
                    {items.map((c, i) => (
                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem' }}>
                            <span className="marquee-item">{c.name}</span>
                            <span className="marquee-dot" />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}