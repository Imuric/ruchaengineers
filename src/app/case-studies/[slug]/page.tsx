import { notFound } from 'next/navigation';
import { caseStudies } from '../../../lib/data';
import ScrollReveal from '../../../components/ScrollReveal';

export function generateStaticParams() {
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <>
            <div className="page-hero">
                <div className="page-hero__inner">
                    <span className="label">Case Study {caseStudy.number}</span>
                    <div className="divider" />
                    <h1 className="page-hero__title">{caseStudy.title}</h1>
                    <p className="page-hero__sub">
                        {caseStudy.body}
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
                                        The Challenge
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        Our client approached us with a complex requirement demanding extreme precision and a tight deadline. 
                                        The project required innovative thinking to overcome structural constraints and material limitations. 
                                        Our engineering team conducted a thorough analysis of the requirements to identify potential bottlenecks 
                                        early in the design phase.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/case1/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)'
                                }} />
                            </div>

                            {/* Section 2 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/case2/800/600) center/cover no-repeat',
                                    borderRadius: 'var(--radius-lg)',
                                    order: -1
                                }} />
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Our Solution
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        Leveraging our advanced manufacturing capabilities, we developed a customized tooling strategy. 
                                        By utilizing cutting-edge NX CAD software and state-of-the-art CNC machinery, we optimized the 
                                        production process. This allowed us to reduce lead times significantly while ensuring dimensional 
                                        accuracy and an impeccable surface finish.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                                        The Outcome
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                        The final deliverable exceeded the client's expectations, achieving a perfect score in quality 
                                        control assessments. The successful implementation of this project resulted in increased operational 
                                        efficiency for the client and further solidified our reputation as a trusted partner in precision 
                                        engineering and manufacturing.
                                    </p>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    background: 'url(https://picsum.photos/seed/case3/800/600) center/cover no-repeat',
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
