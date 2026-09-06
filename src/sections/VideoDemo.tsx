'use client';

import Tag from '@/components/Tag';
import { useEffect, useRef } from 'react';

export default function VideoDemo() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && iframeRef.current) {
                        // When section comes into view, reload iframe with autoplay
                        const currentSrc = iframeRef.current.src;
                        if (!currentSrc.includes('autoplay=1')) {
                            iframeRef.current.src = currentSrc + '?autoplay=1&muted=1';
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 mt-12">
            <br />
            <div className="container">
                <div className="text-center mb-16">
                    <div className="flex justify-center">
                        <Tag>Demo</Tag>
                    </div>
                    <p className="text-white/60 mt-4 text-base md:text-lg max-w-xl mx-auto font-normal">
                        No holy grail algos, no fake promises — just real-time protection so you lose less
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="p-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
                        <iframe
                            ref={iframeRef}
                            loading="lazy"
                            src="https://player.mux.com/00XHIbWzyPOgljgaNSdsyLkQUtis6lCQ3QruAMgI4deY?autoplay=1&muted=1"
                            style={{ width: '100%', border: 'none', aspectRatio: '238/135', borderRadius: '1rem' }}
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
