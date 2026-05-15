import { notFound } from 'next/navigation';
import { products } from '../../../lib/data';
import ScrollReveal from '../../../components/ScrollReveal';

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Product Details</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">{product.name}</h1>
                    <p className="page-hero__sub">
                        Category: {product.category} | Dimension: {product.dimension}
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {/* Section 1 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Precision Engineered
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        Our {product.name} represents the pinnacle of manufacturing excellence. 
                                        Crafted with meticulous attention to detail, this product undergoes rigorous quality control 
                                        to ensure it meets the highest industry standards. Designed for durability and precision, 
                                        it seamlessly integrates into complex industrial applications.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/product1/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)'
                                }} />
                            </div>

                            {/* Section 2 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/product2/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)',
                                    order: -1
                                }} />
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Robust Materials
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        Utilizing advanced material science, the {product.name} is built to withstand extreme conditions 
                                        while maintaining structural integrity. The {product.category} category demands reliability, 
                                        and we source only the finest raw materials to guarantee an extended lifespan and optimal performance 
                                        in demanding environments.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Seamless Integration
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        With dimensions of {product.dimension}, this product is precisely calibrated to fit 
                                        perfectly into your existing workflow. Our engineering team has optimized the design 
                                        to reduce setup time and maximize operational efficiency, delivering consistent, 
                                        high-quality results right from the first use.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/product3/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)'
                                }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
