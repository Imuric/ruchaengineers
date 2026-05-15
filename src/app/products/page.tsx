import type { Metadata } from 'next';
import ScrollReveal from '../../components/ScrollReveal';
import { Box, Package, Settings } from 'lucide-react';
import { products, successStories } from '../../lib/data';

export const metadata: Metadata = {
    title: 'Products',
    description: 'Browse Rucha Engineers product range – impellers, casings, foam dies, wooden patterns and more.',
};

const categoryColors: Record<string, string> = {
    'Wooden Pattern': '#8B6914',
    'Foam Die': '#1a6e8a',
    'Casting': 'var(--orange)',
};

export default function ProductsPage() {
    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">What We Make</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">Our Products</h1>
                    <p className="page-hero__sub">
                        Thermocol patterns, aluminium dies, CI castings, and more — precision-engineered for foundry industries.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="label">Product Catalogue</span>
                            <div className="divider" />
                            <h2 className="section-title">Manufactured Products</h2>
                            <p className="section-subtitle">
                                Each product is manufactured using NX CAD precision design and FMEA-aligned tooling methodology.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="products-grid">
                        {products.map((product, i) => (
                            <ScrollReveal delay={i * 60} key={i}>
                                <div className="product-card">
                                    {/* Visual placeholder with SVG icon */}
                                    <div className="product-card__img" style={{
                                        background: `linear-gradient(135deg, var(--cream-dark) 0%, var(--cream) 100%)`,
                                        flexDirection: 'column', gap: '0.5rem',
                                    }}>
                                        <span style={{ opacity: 0.35 }}>
                                            {product.category === 'Wooden Pattern' ? <Box size={48} /> : product.category === 'Foam Die' ? <Package size={48} /> : <Settings size={48} />}
                                        </span>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.1em',
                                            color: 'var(--text-muted)',
                                        }}>
                                            {product.dimension}
                                        </span>
                                    </div>
                                    <div className="product-card__body">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <h3 className="product-card__name">{product.name}</h3>
                                            <span style={{
                                                background: 'var(--orange-pale)',
                                                color: categoryColors[product.category] || 'var(--orange)',
                                                borderRadius: '4px',
                                                padding: '3px 10px',
                                                fontSize: '0.65rem',
                                                fontFamily: 'var(--font-mono)',
                                                letterSpacing: '0.08em',
                                                flexShrink: 0,
                                                whiteSpace: 'nowrap',
                                            }}>
                                                {product.category}
                                            </span>
                                        </div>
                                        <p className="product-card__dim">Dimension: {product.dimension}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories – thermocol sculptures */}
            <section className="section section--alt">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header section-header--center">
                            <span className="label">Beyond the Ordinary</span>
                            <div className="divider divider--center" />
                            <h2 className="section-title">Thermocol Success Stories</h2>
                            <p className="section-subtitle">
                                Remarkable large-scale thermocol sculptures crafted for our customers, showcasing the scale of our capability.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {successStories.map((story, i) => (
                            <ScrollReveal delay={i * 120} key={i}>
                                <div style={{
                                    background: 'var(--navy)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: '2rem',
                                    color: 'white',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    paddingTop: '210px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                }}>
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, height: '180px',
                                        backgroundImage: `url(https://picsum.photos/seed/${i + 20}/400/300)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                                    }} />
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0,
                                        width: '120px', height: '120px',
                                        background: 'radial-gradient(circle, rgba(232,98,10,0.4) 0%, transparent 70%)',
                                        zIndex: 1
                                    }} />
                                    <div style={{
                                        position: 'absolute', top: '1.5rem', left: '1.5rem',
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '5rem',
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.04)',
                                        lineHeight: 1,
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <div className="label" style={{ marginBottom: '0.5rem' }}>Success Story</div>
                                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', color: 'white', marginBottom: '0.75rem' }}>
                                            {story.name}
                                        </h4>
                                        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                                            {story.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}