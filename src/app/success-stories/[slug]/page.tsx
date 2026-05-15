import { notFound } from 'next/navigation';
import { successStories } from '../../../lib/data';
import ScrollReveal from '../../../components/ScrollReveal';

export function generateStaticParams() {
    return successStories.map((story) => ({
        slug: story.slug,
    }));
}

export default function SuccessStoryDetail({ params }: { params: { slug: string } }) {
    const story = successStories.find((s) => s.slug === params.slug);

    if (!story) {
        notFound();
    }

    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Success Story</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">{story.name}</h1>
                    <p className="page-hero__sub">
                        {story.description}
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
                                        Visionary Concept
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        The creation of the {story.name} started with an ambitious vision. Our client wanted 
                                        a larger-than-life representation that would captivate audiences. Transforming this concept 
                                        into reality required meticulous planning, scaling, and an in-depth understanding of 
                                        structural aesthetics to ensure the final piece would be both impressive and durable.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/success1/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)'
                                }} />
                            </div>

                            {/* Section 2 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/success2/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)',
                                    order: -1
                                }} />
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Masterful Execution
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        Our master craftsmen dedicated countless hours to sculpting and refining the thermocol structure. 
                                        Using specialized tools and techniques, they carved intricate details that brought the 
                                        {story.name} to life. The process demanded immense patience and a keen eye for proportion, 
                                        ensuring every curve and feature was perfectly captured.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        A Grand Installation
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        The final installation of the sculpture was a monumental event. Standing tall and majestic, 
                                        the {story.name} became an instant centerpiece, drawing admiration from all who saw it. 
                                        This project not only showcased our ability to handle large-scale custom thermocol works 
                                        but also highlighted our commitment to delivering extraordinary artistic excellence.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/success3/800/600) center/cover no-repeat',
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
