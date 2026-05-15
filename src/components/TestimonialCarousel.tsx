'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../lib/data';

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleCount(1);
            } else if (window.innerWidth <= 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize(); // set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - visibleCount);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [maxIndex]); // re-bind if maxIndex changes

    // Safety check in case resizing reduces maxIndex below currentIndex
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    return (
        <div className="testimonial-carousel">
            <div className="testimonial-carousel__viewport">
                <div 
                    className="testimonial-carousel__track"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                >
                    {testimonials.map((testimonial, i) => (
                        <div className="testimonial-carousel__slide" key={i} style={{ flex: `0 0 ${100 / visibleCount}%`, padding: '0 0.5rem' }}>
                            <div className="card" style={{ padding: '2rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ color: 'var(--orange)', marginBottom: '1.5rem', opacity: 0.5 }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                </div>
                                <p style={{ color: 'var(--navy)', fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)', fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6, fontWeight: 500 }}>
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <h4 style={{ color: 'var(--navy)', fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '0.25rem' }}>{testimonial.author}</h4>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--orange)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial-carousel__controls">
                <button onClick={prevSlide} className="testimonial-carousel__btn" aria-label="Previous testimonial">
                    <ChevronLeft size={24} />
                </button>
                <div className="testimonial-carousel__dots">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setCurrentIndex(i)}
                            className={`testimonial-carousel__dot ${i === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="testimonial-carousel__btn" aria-label="Next testimonial">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
