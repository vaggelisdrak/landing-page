'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Metric {
    label: string;
    value: number;
    suffix?: string;
}

const metrics: Metric[] = [
    { label: 'Accounts rescued', value: 12 },
    { label: 'Money saved', value: 540, suffix: '$' },
    { label: 'Mistakes avoided', value: 79 },
    { label: 'Total users', value: 20 },
];

export default function Metrics() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="py-24">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {hasAnimated ? (
                                    <CountUpAnimation
                                        end={metric.value}
                                        duration={2}
                                        suffix={metric.suffix}
                                    />
                                ) : (
                                    <span>0{metric.suffix || ''}</span>
                                )}
                            </div>
                            <div className="text-white/50 text-sm md:text-base">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CountUpAnimation({ end, duration, suffix = '' }: { end: number; duration: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
}
